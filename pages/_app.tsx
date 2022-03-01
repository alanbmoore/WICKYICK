import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Loader from "./app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Loader />
        <ToastContainer hideProgressBar={true} />
        <Head>
          <title>WickYick</title>
          <meta name="description" content="WickYick" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}

export default MyApp;
