import type { NextPage } from "next";
import Layout from "../../../components/Layout";
import Modules from "../../../components/people/Modules";
import Timeline from "../../../components/people/Timeline";

const People: NextPage = () => {
  return (
    <>
      <Layout>
        <Timeline />
        <Modules />
      </Layout>
    </>
  );
};

export default People;
