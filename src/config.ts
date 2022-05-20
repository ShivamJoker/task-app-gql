export const API_URL =
  "https://n2puvdwp4vafbfkkw77nwxvkey.appsync-api.us-east-1.amazonaws.com/graphql";

export const fetchOptions = {
  headers: {
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
};
