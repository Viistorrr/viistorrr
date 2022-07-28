import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
