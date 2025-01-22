import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "@/Components/Layout";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (document !== undefined) {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
