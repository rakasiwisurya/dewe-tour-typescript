import axios from "axios";
import { webStorage } from "./webStorage";

const axiosSetup = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

if (webStorage.get("user")) {
  const token = webStorage.get("user").token;
  axiosSetup.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const api = axiosSetup;
