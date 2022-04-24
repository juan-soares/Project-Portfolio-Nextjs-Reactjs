import GlobalStyle from '../styles/globals';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JC Portfólio</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
