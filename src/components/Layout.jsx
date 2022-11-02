import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>viistorrr - Software Engineer - IT Consultant</title>
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
