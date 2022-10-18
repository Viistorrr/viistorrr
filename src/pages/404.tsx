import Layout from "@components/Layout";
import Link from "next/link";

const Custom404 = () => {
  return (
    <Layout>
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <a href="#" className="inline-flex">
            <span className="sr-only">Your Company</span>
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-base font-semibold text-primary">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              En construcción...
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, ya estoy trabajando en ésta sección.
            </p>
            <div className="mt-6">
              <Link href="/">
                <a className="text-base font-medium text-gray-700 hover:text-primary">
                  Inicio
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Custom404;
