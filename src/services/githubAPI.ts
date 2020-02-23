import axios from "axios";

const githubAPI = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API,
  headers: { Accept: "application/vnd.github.mercy-preview+json" }
});

export default githubAPI;
