import '@/css/global.css';
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'




function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
        <Head>
          <title>{siteMetadata.author}</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
