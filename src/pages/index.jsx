import Layout from "@components/Layout";
import Head from "next/head";

const Home = () => {
  return (
    <Layout pageTitle="viistorrr | frontend | dev | Software Engineer">
      <Head>
        <meta
          name="description"
          content="Víctor Meza | frontend, dev, Software Engineer, IT Consultant"
        />
        <meta property="og:title" content="viistorrr.com"></meta>
        <meta property="og:url" content="https://www.viistorrr.com" />
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
        <meta property="twitter:url" content="https://www.viistorrr.com" />
        <meta name="twitter:title" content="https://www.viistorrr.com" />
        <meta
          name="twitter:description"
          content="Víctor Meza | frontend, dev, Software Engineer"
        />
        <meta
          name="twitter:image"
          content="https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg"
        />
      </Head>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">frontend</span>
            <span className="block xl:inline ">{" | "}</span>
            <span className="block xl:inline">dev</span>
            {" | "}
            <span className="block text-primary xl:inline">IT Consultant</span>
          </h1>

          <p className="mt-6 text-secondary text-lg">Software Engineer</p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
