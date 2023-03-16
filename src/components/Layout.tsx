import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle }: LayoutProps) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Víctor Meza | dev, Ingeniero, Software, IT| Curioso, apasionado y siempre aprendiendo"
        />
        <meta property="og:title" content={pageTitle}></meta>
        <meta
          property="og:url"
          content={`https://www.viistorrr.com${asPath}`}
        />
        <meta property="og:type" content="website" />

        <meta
          property="twitter:url"
          content={`https://www.viistorrr.com${asPath}`}
        />
        <meta property="twitter:title" content={pageTitle} />
      </Head>
      <div className="relative pt-6 pb-16 sm:pb-24 font-monserrat">
        <Header />
        <div className="flex overflow-hidden bg-white py-8 px-4 sm:px-2 lg:px-4 lg:py-6 justify-center">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
