import React from 'react';
import Head from 'next/head';

// Skip importing globals.css since that's in the app directory
// and we want to avoid any dependency on the app directory

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 