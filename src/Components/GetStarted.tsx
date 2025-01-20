import React from 'react'
import GetStartedSVG from '../assets/getStarted.png'
import Image from 'next/image'
import Link from 'next/link'
const GetStarted = () => {
  return (
    <div className="p-4  border bg-primary rounded  d-flex flex-column align-items-center gap-3  text-align-center shadow">
      <Link href="#">
        <h5 style={{ color: 'white' }}>
          Hurrah! You've embarked on your digital currency journey with us.
        </h5>
      </Link>
      <p className="mb-1 justify-content-center" style={{ color: '#e2e8f0' }}>With our range of free features, KoinX empowers you to stay informed and better understand your tax reports.</p>
      <Image src={GetStartedSVG} alt='GetStartedSVG' width={150} height={150} />
      <Link href="#" className="d-inline-flex mx-auto align-items-center px-3 py-2  text-align-center text-black bg-white btn ">
        Get Staretd For Free
        <svg width={10} className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
    </div>

  )
}

export default GetStarted