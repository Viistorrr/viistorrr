import Layout from "@components/Layout";
import Head from "next/head";

const Home = () => {
  return (
    <Layout pageTitle="viistorrr | frontend | dev | Software Engineer">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-primary xl:inline">dev</span>
            <span className="block xl:inline ">{" | "}</span>
            <span className="block xl:inline">Ingeniero</span>
            {" | "}
            <span className="block text-primary xl:inline">Software</span>
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
