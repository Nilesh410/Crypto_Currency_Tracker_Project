import axios from "axios";
import { COIN_GECKO_URL } from "./constants";


const axiosInstance=axios.create({
    baseURL:COIN_GECKO_URL
});

export default axiosInstance;