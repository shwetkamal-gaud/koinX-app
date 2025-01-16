// import { RootState } from '@/redux/store'
// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'

// const Sentiments = () => {
//     const { trades } = useSelector((state: RootState) => state.api)
//     let buyVolume = 0;
//     let sellVolume = 0;
//     useEffect(() => {
//         if (trades.bids && trades.asks) {

//             trades?.bids?.forEach((trade: string[]) => {
//         
//                 buyVolume += parseInt(trade[-1])
//             })
//             trades?.asks?.forEach((trade: string[]) => {

//                 sellVolume += parseInt(trade[-1])
//             });
//         }
//     }, [trades])

//     const totalVolume = buyVolume + sellVolume;
//     const buyPercentage = (buyVolume / totalVolume) * 100;
//     const sellPercentage = (sellVolume / totalVolume) * 100;
//    
//     return (
//         <div className=' flex items-center justify-center'>
//             <div className="relative gradient-bar">
//                 <div className='absolute flex flex-col items-center' style={{ marginTop: '0.4em' }}>
//                     {`${buyPercentage.toFixed(2)}`}
//                     <br />
//                     {`${sellPercentage.toFixed(2)}`}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Sentiments