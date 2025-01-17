import ArrowUp from '@/assets/svgs/ArroUp'
import { RootState } from '@/redux/store'

import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const OverViewTab = () => {
    const { dayData, daysData, yearlyData, simplePrice, singleCoin } = useSelector((state: RootState) => state.api)
    const [cryptoData, setCryptoData] = useState({
        current_price: 0,
        name: '',
        low_24h: 0,
        high_24h: 0,
        market_cap: 0,
        total_volume: 0,
        market_cap_rank: 0,
        price_change_percentage_24h: 0,
        ath: 0,
        atl: 0,
        atl_date: '',
        ath_date: '',
        low_7d: 0,
        hihg_7d: 0,
    })
    const [data, setData] = useState({
        low: 0,
        high: 0,
        current: 0,
        yearLow: 0,
        yearHigh: 0,
    });
    const router = useRouter()
    const { coins } = router.query
    let seventhDay: number[] | undefined
    useEffect(() => {
        const dailyPrices = dayData?.prices?.map((item: [number, number]) => item[1]);
        const yearlyPrices = yearlyData?.prices?.map((item: [number, number]) => item[1]);
        seventhDay = daysData?.prices?.map((item: [number, number]) => item[1]);
        if (dailyPrices && yearlyPrices) {
            setData({
                low: Math.min(...dailyPrices),
                high: Math.max(...dailyPrices),
                current: simplePrice[`${coins}`]?.usd ?? 0,
                yearLow: Math.min(...yearlyPrices),
                yearHigh: Math.max(...yearlyPrices),
            });
        }
    }, [dayData, yearlyData, router, singleCoin, daysData])
    useEffect(() => {
        setCryptoData({
            name: singleCoin?.name ?? '',
            current_price: singleCoin?.market_data?.current_price?.usd ?? 0,
            low_24h: singleCoin?.market_data?.low_24h?.usd ?? 0,
            high_24h: singleCoin?.market_data?.high_24h?.usd ?? 0,
            low_7d: seventhDay ? Math.min(...seventhDay) : 0,
            hihg_7d: seventhDay ? Math.max(...seventhDay) : 0,
            market_cap: singleCoin?.market_data?.market_cap?.usd ?? 0,
            market_cap_rank: singleCoin?.market_cap_rank ?? 0,
            total_volume: singleCoin?.market_data?.total_volume?.usd ?? 0,
            price_change_percentage_24h: singleCoin?.market_data?.price_change_percentage_24h ?? 0,
            ath: singleCoin?.market_data?.ath?.usd ?? 0,
            atl: singleCoin?.market_data?.atl?.usd ?? 0,
            atl_date: singleCoin?.market_data?.atl_date?.usd ?? '',
            ath_date: singleCoin?.market_data?.ath_date?.usd ?? '',
        })
    }, [singleCoin])
    const { low, high, current, yearLow, yearHigh } = data;
    const {
        name,
        current_price,
        low_24h,
        high_24h,
        market_cap,
        total_volume,
        market_cap_rank,
        price_change_percentage_24h,
        ath,
        atl,
        ath_date,
        atl_date,
        low_7d,
        hihg_7d,
    } = cryptoData;


    return (
        <div className='d-flex flex-column p-2'>
            <h3>Performance</h3>
            <div className="mb-3">
                <div className="d-flex justify-content-between  text-secondary">
                    <span>{`Today's Low`}</span>
                    <span>{`Today's High`}</span>
                </div>
                <div className=' d-flex align-items-center justify-content-center'>
                    <div className="position-relative gradient-bar">
                        <div className='position-absolute d-flex flex-column align-items-center' style={{ left: `${(((current - low) / (high - low)) * 100)}%`, marginTop: '0.4em' }}>
                            <ArrowUp color='#000' />
                            {`$${current?.toFixed(2)}`}
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between  text-secondary" >
                    <span>${low.toFixed(2)}</span>
                    <span>${high.toFixed(2)}</span>
                </div>
            </div>
            {/* <div className="mb-6">
                <div className="d-flex justify-content-between  text-secondary">
                    <span>52W Low</span>
                    <span>52W High</span>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className="position-relative gradient-bar">
                        <div className='position-absolute d-flex flex-column align-items-center' style={{ left: `${(((current - yearLow) / (yearHigh - yearLow)) * 100)}%`, marginTop: '0.4em' }}>
                            <ArrowUp color='#000' />
                            {`$${current?.toFixed(2)}`}
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between  text-secondary" >
                    <span>${yearLow.toFixed(2)}</span>
                    <span>${yearHigh.toFixed(2)}</span>
                </div>
            </div> */}
            <h3 className='fw-semibold text-secondary'>Fundamentals</h3>
            <div className="row  text-secondary">
                <div className='col-md-6 col-12'>
                    <p className='d-flex justify-content-between border-bottom p-2'>{name ?? ''} Price<span className="text-align-end">${current_price?.toLocaleString()}</span></p>

                    <p className="d-flex justify-content-between border-bottom p-2">24h Low / 24h High
                        <span className="text-align-end">${low_24h?.toLocaleString()} / ${high_24h?.toLocaleString()}</span></p>

                    <p className="d-flex justify-content-between border-bottom p-2">52w Low / 52w High
                        <span className="text-align-end">${yearLow?.toFixed(2)?.toLocaleString()} / ${yearHigh?.toFixed(2).toLocaleString()}</span></p>

                    <p className="d-flex justify-content-between border-bottom p-2">Trading Volume
                        <span className="text-align-end">${total_volume?.toLocaleString()}</span></p>

                    <p className="d-flex justify-content-between border-bottom p-2">All-Time High
                        <span className='d-flex flex-column text-end'>
                            <span className='text-align-end'>
                                ${ath?.toLocaleString()}{' '}
                                <span className="text-red">
                                    -{((1 - current_price / ath) * 100)?.toFixed(1)}%
                                </span>
                            </span>
                            <span style={{ fontSize: '0.8rem' }}>{(new Date(ath_date)).toUTCString()}</span>
                        </span>
                    </p>
                </div>

                <div className='col-md-6 col-12'>
                    <p className='d-flex justify-content-between border-bottom p-2'>Market Cap
                        <span className="text-align-end">${market_cap?.toLocaleString()}</span></p>

                    <p className="d-flex justify-content-between border-bottom p-2">Market Cap Dominance
                        <span className="text-align-end">{price_change_percentage_24h?.toFixed(2)}%</span></p>

                    <p className="d-flex justify-content-between border-bottom p-2">Volume / Market Cap
                        <span className="text-align-end">{(total_volume / market_cap)?.toFixed(4)}</span></p>
                    <p className="d-flex justify-content-between border-bottom p-2">Market Cap Rank
                        <span className="text-align-end ">#{market_cap_rank ?? ''}</span></p>
                    <p className="d-flex justify-content-between text-align-end border-bottom p-2">All-Time Low
                        <span className='d-flex flex-column text-end'>
                            <span className='font-semibold'>
                                ${atl?.toLocaleString()}{' '}
                                <span className="text-green">
                                    +{((current_price / atl - 1) * 100)?.toFixed(1)}%
                                </span>
                            </span>

                            <span style={{ fontSize: '0.8rem' }} className=''>{(new Date(atl_date)).toUTCString()}</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OverViewTab