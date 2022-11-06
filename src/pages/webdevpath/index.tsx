import React from "react";
import Layout from "../../components/Layout";
import ContactForm from "./Contactform";

const WebDevPath = () => {
  return (
    <>
      <Layout pageTitle="Mentorship">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center italic">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">hola...</span>{" "}
              <span className="block text-sky-800 xl:inline">
                bienvenido! 👋
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              💻 Esta mentoría es para guiarte en lo que podría ser tu carrera
              como Desarrollador Frontend con ReactJS y NextJS. 🚀
            </p>
          </div>

          <>
            <ContactForm />
          </>
        </main>
      </Layout>
    </>
  );
};

export default WebDevPath;
