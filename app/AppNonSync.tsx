import React, { useEffect, useMemo } from "react";
import { CountryManager } from "./components/CountryManager";

import { CountryRealmContext } from "./models";
import { Country } from "./models/Country";

const { useQuery } = CountryRealmContext;

export const AppNonSync = () => {
  const result = useQuery(Country);

  const countries = useMemo(() => result, [result]);

  return <CountryManager countries={countries} />;
};
