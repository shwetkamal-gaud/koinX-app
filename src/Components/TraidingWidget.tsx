import { RootState } from '@/redux/store';
import { CoinDetails } from '@/type';
import React, { useEffect, useRef, memo, useState } from 'react';
import { useSelector } from 'react-redux';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);
  const { singleCoin, simplePrice } = useSelector((state: RootState) => state.api)
  const [currCoin, setCurrCoin] = useState<CoinDetails>()
  useEffect(() => {
    setCurrCoin(singleCoin)
  }, [singleCoin])

  useEffect(
    () => {
      if (!simplePrice || !container.current) return;
      const coinName = Object.keys(simplePrice)[0];
      if (!coinName) return;

      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BYBIT:${(currCoin?.symbol)?.toUpperCase()}USDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "white",
          "style": "2",
          "locale": "en",
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(0, 0, 0, 0)",
          "allow_symbol_change": true,
          "hide_top_toolbar": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    [simplePrice, currCoin, singleCoin]
  );

  return (
    <div className="tradingview-widget-container border-0" ref={container} style={{ height: "100%", width: "100%" }}>
    </div>
  );
}

export default memo(TradingViewWidget);
