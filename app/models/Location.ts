export interface Location {
  address?: Address;
  headquarter?: boolean;
}

export interface Address {
  line1?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  geographicArea?: string;
}
