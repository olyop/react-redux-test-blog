import axios from "axios"

export const jsonPlaceholder = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
  headers: {
    'Accept': 'application/json'
  }
})
