import React, { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { CountryRealmContext } from "../models";
import { fetchCompanies } from "../util/http";
import { SelectForm } from "./SelectForm";
import { transformResponse } from "../helpers/transformData";
import { Country } from "../models/Country";
import { LoadingOverlay } from "./LoadingOverlay";
import { CountryModel } from "../models/CountryModel";
import colors from "../styles/colors";

const { useRealm, useQuery } = CountryRealmContext;

export const CountryManager: React.FC<{
  countries: Realm.Results<Country & Realm.Object>;
}> = ({ countries }) => {
  const realm = useRealm();
  const [isFetching, setIsFetching] = useState(false);
  const [isWrittenInDb, setIsWrittenInDb] = useState(false);
  const [isShowCompanies, setIsShowCompanies] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCompanies, setSelectedCompanies] = useState(null);

  const handleCountrySelection = async (country: CountryModel) => {
    const findCountry = countries.find((ctry) => ctry.code === country.code);
    if (findCountry) {
      setIsWrittenInDb(true);
    } else {
      setIsWrittenInDb(false);
      setIsFetching(true);
      try {
        const companiesByCode = await fetchCompanies(country.name);
        const transformedCompanies = transformResponse(
          companiesByCode,
          country.code
        );
        realm.write(() => {
          return new Country(realm, country.code, transformedCompanies);
        });
      } catch (err) {
        console.log(err);
      }
      setIsFetching(false);
    }
  };

  const renderProductList = () => {
    return countries.map((country) => {
      return (
        <Picker.Item
          key={country.code}
          label={country.code}
          value={country.code}
        />
      );
    });
  };

  const handleCountrySelect = (value: string) => {
    if (value) {
      const res = realm.objects("Country").filtered("code == $0", value);
      setSelectedCompanies(res[0]["companies"]);
    }
  };

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <View style={styles.content}>
        <SelectForm onSubmit={handleCountrySelection} />
        {isWrittenInDb && (
          <View>
            <Text>Selected country is already added in DB!</Text>
          </View>
        )}
        <View>
          <Button
            onPress={() => setIsShowCompanies(!isShowCompanies)}
            title="List companies "
            color={colors.brown}
            accessibilityLabel="Learn more about this purple button"
          />
          {isShowCompanies && (
            <View>
              <Picker
                selectedValue={selectedCountry}
                onValueChange={(value) => handleCountrySelect(value)}
                mode="dropdown"
              >
                <Picker.Item label="Select country code" value={null} />
                {renderProductList()}
              </Picker>
              <FlatList
                data={selectedCompanies}
                renderItem={(itemData) => <Text>{itemData.item.name}</Text>}
                keyExtractor={(item) => item._id}
              />
            </View>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
