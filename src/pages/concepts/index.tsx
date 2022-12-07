import Head from "next/head";
import Layout from "@components/Layout";
import MainList from "@components/concepts/MainList";
import Details from "@components/concepts/Details";

const Home = () => {
  return (
    <Layout pageTitle="vFrontend Concepts">
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="www.viistorrr.com" />
        <meta name="twitter:creator" content="@viistorrr" />
        <meta property="og:url" content="https://www.viistorrr.com/concepts/" />
        <meta property="og:title" content="Shorts devs concepts descriptions" />
        <meta
          property="og:description"
          content="Shorts devs concepts descriptions"
        />
        <meta
          property="og:image"
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
