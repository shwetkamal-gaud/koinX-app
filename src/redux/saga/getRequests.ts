import { get, getBinanceData } from "../api";

export const getRequest = async () => {
    return get(`/coins/markets?vs_currency=usd`)
};

export const getSingleRequest = async (data: string) => {
    return get(`/simple/price?ids=${data}&vs_currencies=usd%2Cinr&include_24hr_change=true`)
}

export const getTrendingRequest = async () => {
    return get(`/search/trending`)
}

export const getDataByDaysRequest = async (data: { days: number, coins: string | string[] }) => {
    return get(`/coins/${data.coins}/market_chart?vs_currency=usd&days=${data.days}`)
}

export const getSingleCoinRequest = async (data: string) => {
    return get(`/coins/${data}`)
}

export const getTradesRequests = async (data: string) => {
    return getBinanceData(`/depth?symbol=${data}`)
}
