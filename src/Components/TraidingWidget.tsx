import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, memo, } from 'react';
import { useSelector } from 'react-redux';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);
  const { singleCoin } = useSelector((state: RootState) => state.api)
  const router = useRouter()
  useEffect(
    () => {
      container.current ? container.current.innerHTML = "" : null;
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BYBIT:${(singleCoin?.symbol)?.toUpperCase()}USDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(0, 0, 0, 0)",
          "allow_symbol_change": true,
          "hide_top_toolbar": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current ? container.current.appendChild(script) : null;
    },
    [singleCoin, router]
  );

  return (
    <div className="tradingview-widget-container border-0" ref={container} style={{ height: "100%", width: "100%" }}>
    </div>
  );
}

export default memo(TradingViewWidget);
