import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Script from "next/script";
import { useRouter } from "next/router";

const Layout = ({ children, pageTitle }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content="Víctor Meza | frontend, dev, Software Engineer, IT Consultant"
        />
        <meta property="og:title" content={pageTitle}></meta>
        <meta
          property="og:url"
          content={`https://www.viistorrr.com${asPath}`}
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="Víctor Meza | frontend, dev, Software Engineer"
        />
        <meta
          property="og:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.viistorrr.com" />
        <meta
          property="twitter:url"
          content={`https://www.viistorrr.com${asPath}`}
        />
        <meta name="twitter:title" content={pageTitle} />
        <meta
          name="twitter:description"
          content="Víctor Meza | frontend, dev, Software Engineer"
        />
        <meta
          name="twitter:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />
      </Head>
      <div className="relative pt-6 pb-16 sm:pb-24 font-monserrat">
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
