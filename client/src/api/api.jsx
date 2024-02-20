import axios from "axios"

const client = axios.create({
    baseURL: "http://localhost:8080/api/short/"
})

export default client;