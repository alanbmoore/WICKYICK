import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Loader from "./loader";
import { Container } from "react-bootstrap";
import AppNavbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ToastContainer hideProgressBar={true} />
        <Head>
          <title>WickYick</title>
          <meta name="description" content="WickYick" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <AppNavbar />
        <Component {...pageProps} />
        {/*<AppFooter />*/}
      </Provider>
    </>
  );
}

export default MyApp;
