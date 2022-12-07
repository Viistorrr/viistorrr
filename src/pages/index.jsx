import Layout from "@components/Layout";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <Layout pageTitle="viistorrr | frontend | dev | Software Engineer">
      <NextSeo
        title="viistorrr | frontend | dev | Software Engineer"
        description="Víctor Meza | frontend, dev, Software Engineer"
        canonical="https://www.viistorrr.com"
        openGraph={{
          url: "https://www.viistorrr.com",
          title: "Víctor Meza | frontend, dev, Software Engineer",
          description: "Shorts devs concepts descriptions",
          images: [
            {
              url: "https://www.viistorrr.com/assets/imgs/webdevpath/working.jpg",
              width: 800,
              height: 600,
              alt: "dev",
              type: "image/jpeg",
            },
          ],
          site_name: "Víctor Meza | frontend, dev, Software Engineer",
        }}
        twitter={{
          handle: "@viistorrr",
          site: "www.viistorrr.com",
          cardType: "summary_large_image",
        }}
      />
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
