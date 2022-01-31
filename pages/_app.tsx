import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WickYick</title>
        <meta name="description" content="WickYick" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
