import { Global } from '@emotion/react'
import { GoogleFonts } from 'next-google-fonts'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import 'antd/dist/antd.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title="FanCheer"
        description="FanCheer Version 2 With TypeScript, Next.js"
        openGraph={{
          type: 'website',
          url: 'https://koremp.github.io/fancheer-ts-2',
          // images: [{
          //     url: `https://koremp.github.io/fancheer-ts-2`,
          // }]
        }}
      />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" />
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          html: {
            padding: 0,
            fontFamily: 'sans-serif',
          },
          'body, ol, ul, li': {
            margin: 0,
            padding: 0,
          },
          'ol, ul, li': {
            listStyle: 'none'
          }
        }}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App