import Layout from "@components/Layout";

const Home = () => {
  return (
    <Layout pageTitle="">
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
