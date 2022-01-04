import { Layout } from 'antd'
import { Global } from '@emotion/react'
import { GoogleFonts } from 'next-google-fonts'
import { DefaultSeo } from 'next-seo'

import 'antd/dist/antd.css'

const App = ({ Component, pageProps}) => {
  return (
    <Layout id='__next'>
      <DefaultSeo
        title="FanCheer"
        description="FanCheer Version 2 With TypeScript, Next.js"
        openGraph={{
          type: 'website',
          url: 'https://koremp.github.io/fancheer-ts-2',
          // images: [{
          //     url: `https://koremp.github.io/fancheer-ts-2`,
          //     alt: '이상한 나라의 성범죄 사건들. 당신의 판결은?'
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
          },
          '#__next': {
            position: 'absolute',
            height: '100vh',
            width: '100vw',
          }
        }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default App