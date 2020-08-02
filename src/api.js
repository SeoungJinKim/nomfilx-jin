import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "7925cf759fecfafeff8d4e15160853aa",
    language: "en-US",
  },
});

export default api;
