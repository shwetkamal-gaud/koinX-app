import React, { useState } from "react";
import styles from "../styles/Carousel.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Item } from "@/type";
import Image from "next/image";
import ArrowUp from "@/assets/svgs/ArroUp";
import ArrowDown from "@/assets/svgs/ArrowDown";

export default function Carousel() {
    const { trending } = useSelector((state: RootState) => state.api)

    return (
        <div className={styles.slider}>
            <div className={`${styles.slidetrack} gap-2`}>
                {trending.coins?.map((items) => {
                    console.log("itesm", items)
                    return (
                        <div className={`${styles.slide} card d-flex flex-column p-2 flex-wrap`}>
                            <div className="d-flex align-items-center gap-1">
                                <Image src={items.item?.small ?? ''} width={15} height={15} alt="coin_symbol" />
                                <span>{items.item?.symbol}</span>
                                {items?.item?.data?.price_change_percentage_24h?.btc && <span style={{ fontSize: '0.6em', padding: '0.1rem' }} className={`d-flex justify-content-center   flex-wrap ${items?.item?.data?.price_change_percentage_24h?.btc > 0 ? 'green text-green' : 'red text-red'}`}>
                                    {items?.item?.data?.price_change_percentage_24h?.btc > 0 ? <ArrowUp color='green' /> : <ArrowDown color='red' />}
                                    {items.item.data.price_change_percentage_24h.btc.toFixed(2) + '%'}
                                </span>}
                            </div>
                            <h6>${items.item?.data.price.toFixed(2)}</h6>
                            <Image className="align-self-center" src={items.item?.data?.sparkline ?? ''} width={100} height={100} alt="sparkline" />
                        </div>
                    )
                })}

            </div>
        </div>
    );
}
