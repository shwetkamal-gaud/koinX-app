import React from "react";
import Image from "next/image";
import ETH from '../assets/Ethereum (ETH).svg'
import BTC from '../assets/Bitcoin (BTC).svg'
import USDT from '../assets/Tether (USDT).svg'
import POL from '../assets/Polygon (MATIC).svg'
import XRP from '../assets/XRP (XRP).svg'
import AAVE from '../assets/Aave (AAVE).svg'
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="hero-container">
        <div className="floating-icons">
          <Image loading="lazy" src={ETH}  alt="Ethereum" className="icon icon2" />
          <Image loading="lazy" src={BTC} alt="Bitcoin" className="icon icon1" />
          <Image loading="lazy" src={USDT} alt="Tether" className="icon icon3" />
          <Image loading="lazy" src={POL} alt="Ethereum" className="icon icon4" />
          <Image loading="lazy" src={XRP} alt="Ethereum" className="icon icon5" />
          <Image loading="lazy" src={AAVE} alt="Ethereum" className="icon icon6" />
        </div>
        <div className="hero-content">
          <h1>Your All-in-One Crypto Portfolio Tracker</h1>
          <p>Explore real-time crypto details, interactive graphs, and a profit calculator to manage your investments like a pro.</p>
          <Link href={'/cryptocurrency'} className="cta-button" >Get Started for FREE →</Link>
        </div>
      </div>
    </>
  );
}
