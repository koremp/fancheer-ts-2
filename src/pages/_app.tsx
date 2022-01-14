import { Global } from '@emotion/react'
import Head from 'next/head'

import 'antd/dist/antd.css'

import '../styles.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="FanCheer Version 2" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App