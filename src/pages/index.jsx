import Layout from "@components/Layout";

const Home = () => {
  return (
    <Layout pageTitle="Víctor Meza | dev | Ingeniero">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900">
            <span className="block xl:inline text-primary hover:text-orange-400">
              Víctor Meza
            </span>
            <span className="block text-gray-900 xl:inline hover:text-orange-400">
              {" "}
              |{" "}
            </span>
            <span className="block xl:inline hover:text-orange-400">dev</span>
            <span className="block text-gray-900 xl:inline hover:text-orange-400">
              {" "}
              |{" "}
            </span>
            <span className="block text-gray-900 xl:inline hover:text-orange-400">
              Ingeniero
            </span>
            <span className="block text-gray-900 xl:inline hover:text-orange-400">
              {" "}
              |{" "}
            </span>
            <span className="block text-gray-900 xl:inline hover:text-orange-400">
              Emprendedor 🚀
            </span>
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
