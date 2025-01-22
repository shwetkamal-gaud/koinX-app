import { RootState } from '@/redux/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const About = () => {
    const { singleCoin } = useSelector((state: RootState) => state.api)
    const [data, setData] = useState({
        name: '',
        symbol: '',
        discription: '',
        current_price: 0,
        volume24: 0,
        change24h: 0,
        high24h: 0,
        low24h: 0,
        circulatingSupply: 0,
        maxSupply: 0
    })
    useEffect(() => {
        setData({
            name: singleCoin?.name ?? '',
            discription: singleCoin?.description?.en ?? '',
            symbol: singleCoin?.symbol ?? '',
            current_price: singleCoin?.market_data?.current_price?.usd ?? 0,
            low24h: singleCoin?.market_data?.low_24h?.usd ?? 0,
            high24h: singleCoin?.market_data?.high_24h?.usd ?? 0,
            volume24: singleCoin?.market_data?.total_volume?.usd ?? 0,
            change24h: singleCoin?.market_data?.price_change_percentage_24h ?? 0,
            circulatingSupply: singleCoin?.market_data?.circulating_supply ?? 0,
            maxSupply: singleCoin?.market_data?.max_supply ?? 0
        })
    }, [singleCoin])
    useEffect(() => {
        if (typeof window !== "undefined" && document) {
            const disc = document.getElementById("disc");
            if (disc) {
                disc.innerHTML = singleCoin?.description?.en || "No description available.";
            }
        }
    }, [singleCoin]);
    return (
        <div>
            <div className='border-bottom p-2'>
                <h3>What is {data.name}?</h3>
                <p id='disc'>
                </p>
            </div>
            <div className='flex flex-col  border-bottom p-2'>
                <p>
                    {data.name}{`'s price today is`} <b>${data.current_price.toFixed(2)}</b>, with a 24-hour trading volume of
                    <b> ${(data.volume24 / 1e9).toFixed(2)}B</b>. {(data.symbol).toUpperCase()} is
                    <b>{data.change24h > 0 ? " +" : " -"}{data.change24h}%</b> in the last 24 hours.

                    It is currently <b>{data.change24h}%</b> from its 7-day all-time high of <b>${data.high24h}</b> and 
                    <b> {Math.abs(data.change24h)}%</b> from its 7-day all-time low of <b>${data.low24h}</b>.
                    &nbsp;
                    {(data.symbol).toUpperCase()} has a circulating supply of <b>{(data.circulatingSupply / 1e6).toFixed(2)}M {(data.symbol).toUpperCase()}</b> and
                    a max supply of <b>{(data.maxSupply / 1e6).toFixed(2)}M BTC</b>.
                </p>
            </div>

        </div>
    )
}

export default About