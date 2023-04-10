import axios from "axios";
import { initializeAxiosMockAdapter } from "../mockServer/mockConfig";

// Mock server
let instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
  },
});

initializeAxiosMockAdapter(instance);

export const http = instance;
