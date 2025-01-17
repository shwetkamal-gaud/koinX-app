import ArrowUp from '@/assets/svgs/ArroUp'
import ArrowDown from '@/assets/svgs/ArrowDown'
import { RootState } from '@/redux/store'
import { Coins } from '@/type'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'



const TrendingCoins = () => {
    const { trending } = useSelector((state: RootState) => state.api)

    return (
        <div className="p-3 bg-white border d-flex flex-column  gap-2  rounded  shadow ">
            <h3>Trending Coins (24h)</h3>
            {trending?.coins && trending?.coins?.slice(0, 3)?.map((items: Coins, index: number) => {
                return (
                    <div key={index} className='d-flex justify-content-between'>
                        <div className='d-flex gap-1 align-items-center'>
                            <Image src={items?.item?.thumb ?? ''} alt='sybmol' width={20} height={20} />
                            <span>{(items?.item?.name?.slice(0, 1)?.toUpperCase() ?? '') + (items?.item?.name?.slice(1) ?? '')} ({items?.item?.symbol})</span>
                        </div>
                        {items?.item?.data?.price_change_percentage_24h?.btc && <span className={`justify-content-center flex-wrap ${items?.item?.data?.price_change_percentage_24h?.btc > 0 ? 'green text-green' : 'red text-red'}`}>
                            {items?.item?.data?.price_change_percentage_24h?.btc > 0 ? <ArrowUp color='green' /> : <ArrowDown color='red' />}
                            {items.item.data.price_change_percentage_24h.btc.toFixed(2) + '%'}
                        </span>}
                    </div>)
            })}
        </div>
    )
}

export default TrendingCoins