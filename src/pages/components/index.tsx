import Head from "next/head";
import Link from "next/link";
import Layout from "@components/Layout";
import Steps from "@components/library/Steps";

const Home = () => {
  return (
    <Layout pageTitle="vComponents">
      <Head>
        <meta name="description" content="vComponents | snippets" />
        <meta property="og:title" content="vComponents | snippets"></meta>
        <meta
          property="og:url"
          content="https://www.viistorrr.com/components"
        />
        <meta property="og:type" content="website" />

        <meta property="og:description" content="vComponents | snippets" />
        <meta
          property="og:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.viistorrr.com" />
        <meta
          property="twitter:url"
          content="https://www.viistorrr.com/components"
        />
        <meta property="twitter:title" content="vConcepts" />
        <meta property="twitter:description" content="vComponents | snippets" />
        <meta
          property="twitter:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />
      </Head>
      <div className="flex flex-col justify-center p-2 m-2">
        <div className="flex flex-col w-full justify-center py-4 my-4 sm:flex-col md:flex-row lg:flex-row">
          <h1>
            <strong>BETA:</strong> componentes random que he utilizado y a vos
            también te podrían servir. Powered by{" "}
            <Link href="https://twitter.com/viistorrr">
              <a className="font-bold" target="_blank">
                @viistorrr
              </a>
            </Link>
          </h1>
        </div>
        <div className="flex w-full flex-col lg:p-2 lg:m-2 lg:flex-row">
          <div className="flex flex-col w-full p-2 m-2 lg:w-2/3">
            <Steps />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
