import axios from "axios"

const client = axios.create({
    baseURL: "http://localhost:3333/api/short/"
})

export default client;