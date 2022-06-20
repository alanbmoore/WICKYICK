import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Loader from "../../pages/loader";
import AppNavbar from "../navbar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase-client";

function AppIndex({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {});
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Loader />
      <ToastContainer hideProgressBar={true} />
      <Head>
        <title>WickYick</title>
        <meta name="description" content="WickYick" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <AppNavbar />
      <Component {...pageProps} />

      {/*<AppFooter />*/}
    </>
  );
}

export default AppIndex;
