import Head from "next/head";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Syntac</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
