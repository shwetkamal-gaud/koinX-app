import GetStarted from '@/Components/GetStarted'
import Tabs from '@/Components/Tabs'
import TraidingWidget from '@/Components/TraidingWidget'
import TrendingCoins from '@/Components/TrendingCoins'
import { getData, getDataByDays, getTrades, getSingleCoins, getSingleData, getTrending } from '@/redux/actions/actions'
import { RootState } from '@/redux/store'

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'

const CryptoCoins = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { coins } = router.query
  const { singleCoin } = useSelector((state: RootState) => state.api)
  useEffect(() => {
    if (coins) {
      dispatch(getSingleData(`${coins}`))
      dispatch(getTrending())
      dispatch(getDataByDays({ days: 1, coins }))
      dispatch(getDataByDays({ days: 365, coins }))
      dispatch(getDataByDays({ days: 7, coins }))
      dispatch(getData())
      dispatch(getSingleCoins(`${coins}`))
    }
  }, [router])

  useEffect(() => {
    if (singleCoin?.symbol) {
      dispatch(getTrades(`${singleCoin?.symbol?.toUpperCase()}USDT`))
    }
  }, [singleCoin, router])



  return (
    <div className='px-2 row mx-0'>
      <div className='col-12 col-md-9 pb-1 d-flex flex-column gap-3'>
        <div className='height p-2 bg-white border d-flex flex-column align-items-center gap-3  rounded text-align-center shadow'>
          <TraidingWidget />
        </div>
        <Tabs />
      </div>
      <div className='col-12 col-md-3 d-flex flex-column gap-3'>
        <GetStarted />
        <TrendingCoins />
      </div>
    </div>
  )
}

export default CryptoCoins