import axios from "axios";
import { initializeAxiosMockAdapter } from "../mockServer/mockConfig";

// Mock server
let instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

initializeAxiosMockAdapter(instance);

export const http = instance;

// instance.interceptors.request.use(
//   (config) => {
//     const token = window.localStorage.getItem('idToken')
//     if (token) {
//       config.headers['Authorization'] = 'Bearer ' + token
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// instance.interceptors.response.use(
//   (res) => {
//     return res
//   },
//   async (error) => {
//     if (error.response) {
//       // Token was expired
//       if (error.response.status === 401 || error.response.code === 'ERR_NETWORK') {
//         window.localStorage.setItem('authStatus', 'SignedOut')
//       }
//     }
//     return Promise.reject(error)
//   },
// )
