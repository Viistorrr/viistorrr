import Layout from "../components/Layout";
import Timeline from "../components/Timeline";

//SSR implementation
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}

const Home = ({ todos }) => {
  return (
    <Layout>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Software Engineer</span>
            {" - "}
            <span className="block text-indigo-600 xl:inline">
              IT Consultant
            </span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg">
            Senior Frontend Developer
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
