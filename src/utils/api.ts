import axios from "axios";
import { webStorage } from "./webStorage";

const axiosSetup = {
  json: axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
    headers: {
      common: {
        "Content-Type": "application/json",
      },
    },
  }),
  formData: axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
    headers: {
      common: {
        "Content-Type": "multipart/form-data",
      },
    },
  }),
};

if (webStorage.get("user")) {
  const token = webStorage.get("user").token;
  axiosSetup.json.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axiosSetup.formData.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const api = axiosSetup;
