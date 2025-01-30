import { getData, SET_SYMBOL } from '@/redux/actions/actions'
import { RootState } from '@/redux/store'
import { CoinMarket } from '@/type'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const CryptoCoins = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { data } = useSelector((state: RootState) => state.api);
    const [coinData, setCoinData] = useState(data)
    const handleOnclick = (e: React.MouseEvent<HTMLTableRowElement>, id?: string, symbol?: string) => {
        router.push(`/cryptocurrency/${id}`)
        dispatch({ type: SET_SYMBOL, payload: symbol })
    }
    useEffect(() => {
        setCoinData(data)

    }, [data])
    useEffect(() => {
        dispatch(getData())
    }, [router, dispatch])

    return (
        <div className='d-flex flex-column gap-3 p-3'>
            <h3>Cryptocurrency prices and market caps</h3>
            <div className='table-responsive table-wrapper shadow'>
                <table className="table table-bordered-less overflow-auto  table-hovers">
                    <thead className='p-2'>
                        <tr >
                            <th scope="col"># Name</th>
                            <th scope="col">Price</th>

                            <th scope="col">24H</th>
                            <th scope="col">Total Valume</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Circulating Supply</th>
                        </tr>
                    </thead>
                    <tbody className='overflow-auto'>
                        {coinData.map((item: CoinMarket, index: number) => {
                            return (
                                <tr key={index} className="border-b text-align-end" onClick={(e) => handleOnclick(e, item?.id, item?.symbol)}>
                                    <td className="px-6 d-flex align-items-center gap-2">
                                        <span className='text-secondary'>{item.market_cap_rank}</span>
                                        <Image src={item?.image ?? ''} alt={item?.name ?? ''} width={30} height={30} />
                                        <span className='d-flex flex-column'>
                                            <span style={{ fontWeight: '500' }}>{item?.name}</span>
                                            <span className='text-secondary'>{item?.symbol?.toLocaleUpperCase()}</span>
                                        </span>
                                    </td>
                                    <td className="px-6">
                                        {item?.current_price}
                                    </td>
                                    <td className={`px-6 ${item?.price_change_percentage_24h && item?.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}`}>
                                        {item?.price_change_percentage_24h?.toFixed(2)}
                                    </td>
                                    <td className="px-6">
                                        {item?.total_volume}
                                    </td>
                                    <td className="px-6 ">
                                        {item?.market_cap}
                                    </td>
                                    <td className="px-6 ">
                                        {item?.circulating_supply}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* <table className="table table-bordered-less overflow-auto w-100  table-hover">
                    <thead className='p-2'>
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Coin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                1H
                            </th>
                            <th scope="col" className="px-6 py-3">
                                24H
                            </th>
                            <th scope="col" className="px-6 py-3">
                                7D
                            </th>
                            <th scope="col" className="px-6 py-3">
                                24h Volume
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Market Cap
                            </th>
                        </tr>
                    </thead>
                    <tbody className="overflow-auto">
                        {coinData.map((item: CoinMarket, index: number) => {
                            return (
                                <tr key={index} className="border-b" onClick={(e) => handleOnclick(e, item?.id, item?.symbol)}>
                                    <td className="px-6 d-flex align-items-center gap-2">
                                        <Image src={item?.image ?? ''} alt={item?.name ?? ''} width={30} height={30} />
                                        <span className='d-flex flex-column'>
                                            <span style={{ fontWeight: '500' }}>{item?.name}</span>
                                            <span className='text-secondary'>{item?.symbol?.toLocaleUpperCase()}</span>
                                        </span>
                                    </td>
                                    <td className="px-6 ">
                                        {item?.current_price}
                                    </td>
                                    <td className="px-6  bg-gray-50 dark:bg-gray-800">
                                        {item?.total_volume}
                                    </td>
                                    <td className="px-6 ">
                                        {item?.market_cap}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}

export default CryptoCoins