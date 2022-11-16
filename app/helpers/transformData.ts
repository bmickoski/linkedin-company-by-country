import { CompaniesModel } from "../models/CompaniesModel";

export function transformResponse(data: CompaniesModel[], code: string): any {
  let companies = [];
  if (data && data.length > 0) {
    data.forEach((company) => {
      const findLocationByCode = company.locations.find(
        (location) => location.address.country === code
      );

      const address = findLocationByCode
        ? findLocationByCode.address.line1 +
          " - " +
          findLocationByCode.address.country
        : company.locations[0].address.line1 +
          " - " +
          company.locations[0].address.country;

      companies = [
        ...companies,
        {
          name: company.name ? company.name : "",
          websiteUrl: company.websiteUrl ? company.websiteUrl : "",
          address: address,
        },
      ];
    });
  }

  return companies;
}
