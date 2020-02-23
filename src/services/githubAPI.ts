import axios from "axios";

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: { Accept: "application/vnd.github.mercy-preview+json" }
});

export default githubAPI;
