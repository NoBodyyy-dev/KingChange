import axios from "axios";

const URL: string = "https://api.coinlore.net/api";

export const api = axios.create({
    baseURL: URL,
})