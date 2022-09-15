import type { NextPage } from "next";
import Layout from "../../../components/Layout";
import Modules from "../../../components/people/Modules";
import Timeline from "../../../components/people/Timeline";

const People: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="flex overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-xl w-full">
            <Timeline />
          </div>
          <div className="relative mx-auto max-w-xl w-full">
            <Modules />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default People;
