import axios from "axios";
import { Config } from "../src/Config";

export const axiosinstance=axios.create({
    baseURL:Config.url,
    headers:{accept: 'application/json', 'content-type': 'application/json'},
    withCredentials:true
})



