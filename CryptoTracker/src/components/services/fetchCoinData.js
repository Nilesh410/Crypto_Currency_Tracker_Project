import axiosInstance from "../helpers/axiosInstance"

export async function fetchCoinData(page=1,currency='inr') {
    const perPage=10;
    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&page=${page}&per_page=${perPage}&order=market_cap_desc`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}