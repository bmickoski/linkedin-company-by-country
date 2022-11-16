import { createRealmContext } from "@realm/react";
import { Company } from "./Companies";
import { Country } from "./Country";
import { PersonSchema, RoomSchema } from "./Schema";

export const CountryRealmContext = createRealmContext({
  schema: [Country, Company],
  schemaVersion: 3,
});

export const CompaniesRealmContext = createRealmContext({
  schema: [Company],
});
