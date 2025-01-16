import axios from "axios";

export const get = async (url: string) => {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.coingecko.com/api/v3${url}`,
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': process.env.NEXT_PUBLIC_API_KEY,
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getBinanceData = async (url: string) => {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api4.binance.com/api/v3${url}`,
            // headers: {
            //     accept: 'application/json',
            //     'x-api-key': process.env.NEXT_PUBLIC_API_KEY_BINANCE,
            // }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}