import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>viistorrr - Software Engineer - IT Consultant</title>
        <meta name="description" content="frontend | dev | Software Engineer" />
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3769837006415356"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Header />
        <div className="flex overflow-hidden bg-white py-8 px-4 sm:px-2 lg:px-4 lg:py-6 justify-center">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
