import React from "react";
import styles from "../styles/Carousel.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import ArrowUp from "@/assets/svgs/ArroUp";
import ArrowDown from "@/assets/svgs/ArrowDown";
import Link from "next/link";

export default function Carousel() {
    const { trending } = useSelector((state: RootState) => state.api)

    return (
        <div className="py-2">
            <h2 className="px-3">You May Also Like</h2>
            <div className={styles.slider}>
                <div className={`${styles.slidetrack} gap-2`}>
                    {trending.coins?.map((items) => {
                        return (
                            <Link href={`/cryptocurrency/${items.item?.id}`} key={items.item?.id} className={`${styles.slide} card d-flex flex-column p-2 flex-wrap text-decoration-none`}>
                                <div className="d-flex align-items-center gap-1 text-decoration-none">
                                    <Image loading="lazy" src={items.item?.small ?? ''} width={15} height={15} alt="coin_symbol" />
                                    <span>{items.item?.symbol}</span>
                                    {items?.item?.data?.price_change_percentage_24h?.btc && <span style={{ fontSize: '0.6em', padding: '0.1rem' }} className={`d-flex justify-content-center   flex-wrap ${items?.item?.data?.price_change_percentage_24h?.btc > 0 ? 'green text-green' : 'red text-red'}`}>
                                        {items?.item?.data?.price_change_percentage_24h?.btc > 0 ? <ArrowUp color='green' /> : <ArrowDown color='red' />}
                                        {items.item.data.price_change_percentage_24h.btc.toFixed(2) + '%'}
                                    </span>}
                                </div>
                                <h6>${items.item?.data.price.toFixed(2)}</h6>
                                <Image loading="lazy" className="align-self-center" src={items.item?.data?.sparkline ?? ''} width={100} height={100} alt="sparkline" />
                            </Link>
                        )
                    })}

                </div>
            </div>
            <div className={styles.sliderLeft}>
                <div className={`${styles.slidetrackLeft} gap-2`}>
                    {trending.coins?.map((items) => {
                        return (
                            <Link href={`/cryptocurrency/${items.item?.id}`} key={items.item?.id} className={`${styles.slide} card d-flex flex-column p-2 flex-wrap text-decoration-none`}>
                                <a className="d-flex align-items-center gap-1 text-decoration-none">
                                    <Image loading="lazy" src={items.item?.small ?? ''} width={15} height={15} alt="coin_symbol" />
                                    <span>{items.item?.symbol}</span>
                                    {items?.item?.data?.price_change_percentage_24h?.btc && <span style={{ fontSize: '0.6em', padding: '0.1rem' }} className={`d-flex justify-content-center   flex-wrap ${items?.item?.data?.price_change_percentage_24h?.btc > 0 ? 'green text-green' : 'red text-red'}`}>
                                        {items?.item?.data?.price_change_percentage_24h?.btc > 0 ? <ArrowUp color='green' /> : <ArrowDown color='red' />}
                                        {items.item.data.price_change_percentage_24h.btc.toFixed(2) + '%'}
                                    </span>}
                                </a>
                                <h6>${items.item?.data.price.toFixed(2)}</h6>
                                <Image loading="lazy"  className="align-self-center" src={items.item?.data?.sparkline ?? ''} width={100} height={100} alt="sparkline" />
                            </Link>
                        )
                    }).reverse()}
                </div>
            </div>
        </div>
    );
}
