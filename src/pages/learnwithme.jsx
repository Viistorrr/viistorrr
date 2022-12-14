import React from "react";
import Layout from "../components/Layout";

const learnwithme = () => {
  return (
    <Layout pageTitle="">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">working in</span>{" "}
            <span className="block text-indigo-600 xl:inline">progress</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            to grow up your professional web development skills.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default learnwithme;
