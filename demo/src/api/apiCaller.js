import { URL_API } from "../constants/apiConfig";
import axios from "axios";

export function getDataApi(endpoint) {
  return axios.get(`${URL_API}${endpoint}`); // URL_API là link api mặc định được khai báo trong file apiConfig, endpoint là phần đuôi sau của api
}
