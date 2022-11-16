import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { CountryRealmContext } from "./models";
import colors from "./styles/colors";
import { AppNonSync } from "./AppNonSync";

export const AppWrapperNonSync = () => {
  const { RealmProvider } = CountryRealmContext;

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
      <RealmProvider>
        <AppNonSync />
      </RealmProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.fluorescentBlue,
  },
});
