const APIFY_KEY = "apify_api_p4UhrL4UbRkVThh63PnmbQbtuXTQB528FgeR";
const LINKEDIN_AUTH_KEY =
  "AQEDARdq3okC-iDoAAABgov9XzoAAAGEe3URpVYADtBIwTuyjuXP5QvPx6IydxqETttdA6dH_zfgxEQc4b-cJT-rFl6D_f9iE8vckXLpO5NgHcGrW6yN5t4oCRwZ3cJK_Wl0CD1zF-X6HgOTNn0N3qLs";
const BACKEND_COMPANY_URL = `https://api.apify.com/v2/acts/flood~linkedin-company-search-scraper/run-sync-get-dataset-items?token=${APIFY_KEY}`;
const BACKEND_COUNTRIES_URL = "https://restcountries.com/v3.1/all";

const data = {
  authToken: LINKEDIN_AUTH_KEY,
  hasJobs: false,
  limit: 250,
  location: [],
};
export async function fetchCompanies(countryCode: string) {
  data.location = [countryCode];
  const response = await fetch(BACKEND_COMPANY_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  });
  // return await transformResponse(await response.json());
  return response.json();
}

export async function fetchCountries() {
  const response = await fetch(BACKEND_COUNTRIES_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
