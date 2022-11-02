import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        {/* <meta name="description" content="frontend | dev | Software Engineer" />
        <meta
          name="keywords"
          content="frontend, dev, Software Engineer, IT Consultant, js, typescript, html5, css3, developer, javascript, tsx, tailwind"
        />
        <meta
          name="author"
          content="Victor Meza | frontend | dev |Software Engineer"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://www.viistorrr.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="frontend, dev, Software Engineer, IT Consultant, js, typescript, html5, css3, developer, javascript, tsx, tailwind"
        />
        <meta
          property="og:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />
        <meta property="og:site_name" content="@viistorrr" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@viistorrr.com" />
        <meta name="twitter:creator" content="@viistorrr" />
        <meta
          name="twitter:title"
          content="Victor Meza | frontend | dev |Software Engineer"
        /> */}

        <meta
          name="description"
          content="frontend, dev, Software Engineer, IT Consultant, js, typescript, html5, css3, developer, javascript, tsx, tailwind"
        />
        <meta property="og:url" content="https://www.viistorrr.com" />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="frontend, dev, Software Engineer, IT Consultant, js, typescript, html5, css3, developer, javascript, tsx, tailwind"
        />
        <meta
          property="og:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="viistorrr.com" />
        <meta property="twitter:url" content="https://www.viistorrr.com" />
        <meta name="twitter:title" content="viistorrr.com" />
        <meta
          name="twitter:description"
          content="frontend, dev, Software Engineer, IT Consultant, js, typescript, html5, css3, developer, javascript, tsx, tailwind"
        />
        <meta
          name="twitter:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />

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
        ></Script>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
