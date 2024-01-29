import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://revel-shop.eu-west-2.elasticbeanstalk.com/api",
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});
export default apiClient;
