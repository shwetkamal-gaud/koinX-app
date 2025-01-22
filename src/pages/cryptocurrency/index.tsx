import { getData, SET_SYMBOL } from '@/redux/actions/actions'
import { RootState } from '@/redux/store'
import { CoinMarket } from '@/type'
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
    }, [router])

    return (
        <div className='table-responsive table-wrapper rounded'>
            <table className="table overflow-auto w-100  table-hover">
                <thead className='p-2 position-sticky top-0'>
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Coin
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
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
                            <tr key={index} className="border-b border-gray-200 dark:border-gray-700" onClick={(e) => handleOnclick(e, item?.id, item?.symbol)}>
                                <th className="px-6 py-4 font-medium text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {item?.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item?.current_price}
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    {item?.total_volume}
                                </td>
                                <td className="px-6 py-4">
                                    {item?.market_cap}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CryptoCoins