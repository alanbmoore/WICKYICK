import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";
import AppIndex from "../components/app-index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <AppIndex Component={Component} {...pageProps}></AppIndex>
      </Provider>
    </>
  );
}

export default MyApp;
