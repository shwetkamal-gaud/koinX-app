import React from "react";
import Image from "next/image";
import ETH from '../assets/Ethereum (ETH).svg'
import BTC from '../assets/Bitcoin (BTC).svg'
import USDT from '../assets/Tether (USDT).svg'
import POL from '../assets/Polygon (MATIC).svg'
import XRP from '../assets/XRP (XRP).svg'
import AAVE from '../assets/Aave (AAVE).svg'


export default function Home() {
  return (
    <>
      <div className="hero-container">
        {/* Floating Icons */}
        <div className="floating-icons">
          <Image src={ETH} alt="Ethereum" className="icon icon2" />
          <Image src={BTC} alt="Bitcoin" className="icon icon1" />
          <Image src={USDT} alt="Tether" className="icon icon3" />
          <Image src={POL} alt="Ethereum" className="icon icon4" />
          <Image src={XRP} alt="Ethereum" className="icon icon5" />
          <Image src={AAVE} alt="Ethereum" className="icon icon6" />
        </div>
        <div className="hero-content">
          <h1>Your All-in-One Crypto Portfolio Tracker</h1>
          <p>Explore real-time crypto details, interactive graphs, and a profit calculator to manage your investments like a pro.</p>
          <button className="cta-button">Get Started for FREE →</button>
        </div>
      </div>
    </>
  );
}
