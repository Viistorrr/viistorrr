import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import MainList from "@components/concepts/MainList";
import Details from "@components/concepts/Details";

const Home = () => {
  return (
    <Layout pageTitle="vConcepts">
      <NextSeo
        title="vConcepts"
        description="Shorts devs concepts descriptions"
        canonical="https://www.viistorrr.com/concepts"
        openGraph={{
          url: "https://www.viistorrr.com",
          title: "vConcepts",
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
      <div>
        <div className="flex justify-center py-4 my-4">
          <h1>
            just another frontend concepts and code snippets site Powered by{" "}
            <span className="font-bold">@viistorrr</span>
          </h1>
        </div>
        <div className="flex p-2 m-2">
          <div className="w-1/2 m-2">
            <MainList />
          </div>
          <div className="w-1/2 m-2">
            <Details />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
