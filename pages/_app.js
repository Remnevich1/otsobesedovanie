import '../scss/style.scss';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return <>
  <Head>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  </Head>
  <Component {...pageProps} />
  </>
}