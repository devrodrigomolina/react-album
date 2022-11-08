import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint)
  }
}