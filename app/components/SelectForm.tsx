import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { CountryModel } from "../models/CountryModel";
import { fetchCountries } from "../util/http";

export const SelectForm: React.FC<any> = ({ onSubmit }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      if (!countries || countries.length <= 0) {
        try {
          const countries = await fetchCountries();
          setCountries(countries);
        } catch (error) {
          console.log(error);
        }
      }
    }

    getCountries();
  }, [countries]);

  const handleCountrySelect = (value: string) => {
    if (value) {
      setSelectedCountry(value);
      const country = countries.find((country) => country.cca2 === value);

      onSubmit({ code: country.cca2, name: country.name.common });
    }
  };

  const renderProductList = () => {
    return countries.map((country) => {
      return (
        <Picker.Item
          key={country.cca2}
          label={country.name.common}
          value={country.cca2}
        />
      );
    });
  };

  return (
    <View>
      <Picker
        style={styles.select}
        selectedValue={selectedCountry}
        onValueChange={(value) => handleCountrySelect(value)}
        mode="dropdown"
      >
        <Picker.Item label="Select country" value={null} />
        {renderProductList()}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  select: {
    marginTop: 50,
  },
});
