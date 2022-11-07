import "../styles/globals.css";
import { MentorshipContextProvider } from "@context/MentorshipContext";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-3769837006415356"
        crossOrigin="anonymous"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3769837006415356"
      />
      <MentorshipContextProvider>
        <Component {...pageProps} />
      </MentorshipContextProvider>
    </>
  );
}

export default MyApp;
