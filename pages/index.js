import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Software Engineer</span>
            {" - "}
            <span className="block text-indigo-600 xl:inline">
              TI Consultant
            </span>
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
