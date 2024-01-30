import Navbar from '@shared/components/navbar'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SRMKZILLA</title>
        <meta name="title" content="SRMKZILLA" />
        <meta property="og:title" content="SRMKZILLA" />
        <meta property="twitter:title" content="SRMKZILLA" />
        <meta httpEquiv="refresh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="SRMKZILLA, MOZILLA, SRM UNIVERSITY, Technical Club, Mozilla Campus Club"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="SRMKZILLA" />
        <meta name="copyright" content="All rights reserved,2024. SRMKZILLA" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="application-name" content="SRMKZILLA" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srmkzilla.net/" />
        <meta
          property="og:description"
          content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srmkzilla.net/" />
        <meta property="twitter:site" content="@SRMKZILLA_Club" />

        <meta
          property="twitter:description"
          content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
        />
        <link
          rel="icon preload canonical"
          href="./images/kzillalogo.png"
          as="image"
        />

        {/* <link
            rel="mask-icon preload canonical"
            href="/safari-pinned-tab.svg"
            color="#5bbad5"
            as="image"
          /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TE58NDE4QW"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TE58NDE4QW');`,
          }}
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
