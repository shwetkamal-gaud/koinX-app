import Carousel from '@/Components/Carousel'
import GetStarted from '@/Components/GetStarted'
import Tabs from '@/Components/Tabs'
import TraidingWidget from '@/Components/TraidingWidget'
import TrendingCoins from '@/Components/TrendingCoins'
import { getDataByDays, getSingleCoins, getTrending } from '@/redux/actions/actions'
import { RootState } from '@/redux/store'

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'

const CryptoCoins = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { coins } = router.query
  useEffect(() => {
    if (coins) {
      dispatch(getTrending())
      dispatch(getDataByDays(`${coins}`))
      dispatch(getSingleCoins(`${coins}`))
    }
  }, [coins, dispatch])





  return (
    <div className=' d-flex flex-column gap-2'>
      <div className='px-2 gap-md-0 gap-2 mt-1 row mx-0'>
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
      <Carousel />
    </div>
  )
}

export default CryptoCoins