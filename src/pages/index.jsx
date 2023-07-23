import Layout from "@components/Layout";

const Home = () => {
  return (
    <Layout pageTitle="Víctor Meza | dev | Ingeniero">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-primary">Víctor Meza</span>
            {" | "}
            <span className="block xl:inline">dev</span>
            {" | "}
            <span className="block text-gray-900 xl:inline">Ingeniero</span>
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
