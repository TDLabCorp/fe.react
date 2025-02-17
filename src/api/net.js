import axios from "axios";

export const net = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return status < 500;
  },
});
