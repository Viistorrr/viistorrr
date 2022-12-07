import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import MainList from "@components/concepts/MainList";
import Details from "@components/concepts/Details";
import Head from "next/head";

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
      <div>
        <div className="flex justify-center py-4 my-4">
          <h1>
            just another frontend concepts and code snippets site Powered by{" "}
            <span className="font-bold">@viistorrr</span>
          </h1>
        </div>
        <div className="flex p-2 m-2">
          <div className="w-1/2 m-2">
            <MainList />
          </div>
          <div className="w-1/2 m-2">
            <Details />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
