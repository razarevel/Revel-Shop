import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000/api",
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});
export default apiClient;
