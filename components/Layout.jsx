import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>viistorrr - Software Engineer - IT Consultant</title>
        <meta name="description" content="Software Engineer - IT Consultant" />
        <meta name="keywords" content="Software Engineer, IT Consultant" />
        <meta name="author" content="Software Engineer - IT Consultant" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
