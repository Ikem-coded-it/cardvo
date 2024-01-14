import axios from "axios"
const serverURL = import.meta.env.VITE_SERVER_URL;

export default axios.create({
  baseURL: serverURL
})

export const axiosPrivate =  axios.create({
  baseURL: serverURL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

export const axiosFormDataPrivate =  axios.create({
  baseURL: serverURL,
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  withCredentials: true
})