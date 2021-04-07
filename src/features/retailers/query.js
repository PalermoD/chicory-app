export const query = `query retailers {
  retailers(zipCode: "11234", blacklistedRetailers: [], whitelistedRetailers: []) {
    id
    slug
    shopOnLogoUrl
    logoUrl
    name
    requiresLocation
  }
}`;
