import axios from "axios";

export const jsonplaceholderClient = axios.create({
  baseURL: "https://api.GitHub.com/",
  timeout: 1000,
  headers: {
    Accept: "application/vnd.GitHub.v3+json",
    //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  },
});
