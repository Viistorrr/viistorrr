import Head from "next/head";
import Layout from "@components/Layout";
import MainList from "@components/concepts/MainList";
import Details from "@components/concepts/Details";

const Home = () => {
  return (
    <Layout pageTitle="vConcepts">
      <Head>
        <meta
          key="og-url"
          property="og:url"
          content="https://www.viistorrr.com/concepts/"
        />
        <meta key="og-type" property="og:type" content="website" />
        <meta
          key="og-title"
          property="og:title"
          content="Shorts devs concepts descriptions"
        />
        <meta
          key="og-desc"
          property="og:description"
          content="Shorts devs concepts descriptions"
        />
        <meta
          key="og-img"
          property="og:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />
        <meta key="tw-card" name="twitter:card" content="summary_large_image" />
        <meta
          key="tw-domain"
          property="twitter:domain"
          content="viistorrr.com"
        />
        <meta key="tw-title" name="twitter:title" content="vConcepts" />
        <meta
          key="tw-site"
          name="twitter:site"
          content="https://www.viistorrr.com/concepts/"
        />
        <meta
          key="tw-url"
          property="twitter:url"
          content="https://www.viistorrr.com/concepts/"
        />
        <meta key="tw-creator" name="twitter:creator" content="@viistorrr" />
        <meta
          key="tw-desc"
          name="twitter:description"
          content="Shorts devs concepts descriptions"
        />
        <meta
          key="tw-img"
          name="twitter:image"
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
