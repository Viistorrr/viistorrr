import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import MainList from "@components/concepts/MainList";
import Details from "@components/concepts/Details";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <Layout pageTitle="vConcepts">
      <Head>
        <meta
          name="description"
          content="vConcepts | Shorts devs concepts descriptions"
        />
        <meta
          property="og:title"
          content="vConcepts | Shorts devs concepts descriptions"
        ></meta>
        <meta property="og:url" content="https://www.viistorrr.com/concepts" />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="vConcepts | Shorts devs concepts descriptions"
        />
        <meta
          property="og:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.viistorrr.com" />
        <meta property="twitter:url" content="https://www.viistorrr.com" />
        <meta property="twitter:title" content="vConcepts" />
        <meta
          property="twitter:description"
          content="vConcepts | Shorts devs concepts descriptions"
        />
        <meta
          property="twitter:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />
      </Head>
      <div className="flex flex-col justify-center p-2 m-2">
        <div className="flex flex-col w-full justify-center py-4 my-4 sm:flex-col md:flex-row lg:flex-row">
          <h1>
            <strong>BETA:</strong> just another frontend concepts and code
            snippets site Powered by{" "}
            <Link href="https://twitter.com/viistorrr">
              <a className="font-bold" target="_blank">
                @viistorrr
              </a>
            </Link>
          </h1>
        </div>
        <div className="flex w-full flex-col lg:p-2 lg:m-2 lg:flex-row">
          <div className="w-full py-2 lg:m-2 lg:w-1/2">
            <MainList />
          </div>
          <div className="w-full py-2 lg:m-2 lg:w-1/2">
            <Details />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
