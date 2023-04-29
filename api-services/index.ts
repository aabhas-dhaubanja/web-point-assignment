import axios from "axios";

const baseInstance = axios.create({
  baseURL: "https://hn.algolia.com/api",
});
