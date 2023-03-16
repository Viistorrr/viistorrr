import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8XLJF2LSLS"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8XLJF2LSLS');
            `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3769837006415356"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Víctor Meza | dev, Ingeniero, Software, IT| Curioso, apasionado y siempre aprendiendo"
        />
        <meta property="og:title" content="viistorrr.com"></meta>
        <meta property="og:url" content="https://www.viistorrr.com" />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="Víctor Meza | dev, Ingeniero, Software, IT| Curioso, apasionado y siempre aprendiendo"
        />
        <meta
          property="og:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.viistorrr.com" />
        <meta property="twitter:url" content="https://www.viistorrr.com" />
        <meta property="twitter:title" content="https://www.viistorrr.com" />
        <meta
          property="twitter:description"
          content="Víctor Meza | dev, Ingeniero, Software, IT| Curioso, apasionado y siempre aprendiendo"
        />
        <meta
          property="twitter:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
