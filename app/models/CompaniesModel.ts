import { Location } from "./Location";

export interface CompaniesModel {
  name?: string;
  websiteUrl?: string;
  locations?: Location[];
  entityUrn?: string;
  url?: string;
  description?: string;
  logo?: string;
  industries?: string[];
  specialities?: string[];
  industriesV2?: string[];
  employeeCount?: number;
  employeeCountRange?: any;
}
