import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;
