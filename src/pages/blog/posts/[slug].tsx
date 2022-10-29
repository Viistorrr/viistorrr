import Head from "next/head";
import Link from "next/link";
import { VImage } from "@components/image/VImage";
import Layout from "@components/Layout";

export default function Post({ devDotToPost }) {
  console.log({ devDotToPost });
  const {
    title,
    published_at,
    social_image,
    body_html,
    user,
    type_of,
    description,
    canonical_url,
  } = devDotToPost;
  const date = new Date(published_at);
  /* const formatedDate = `${date.getDate()}/${
    parseInt(date.getMonth(), 10) + 1
  }/${date.getFullYear()}`; */

  return (
    <Layout>
      <Head>
        <meta property="og:type" content={type_of} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={social_image} />
        <meta property="og:url" content={canonical_url} />
      </Head>
      <div className="flex justify-center">
        <article className="text-lg w-full md:w-3/4 text-justify">
          <div className="my-12 border-2 text-secondary bg-white md:rounded-lg overflow-hidden">
            <div className="p-4 md:p-32">
              <h1 className="text-3xl font-bold text-primary">{title}</h1>
              <div className="flex items-center text-secondary rounded-lg py-6">
                <VImage
                  className="rounded-full"
                  src={user.profile_image_90}
                  alt={user.name}
                  width={50}
                  height={50}
                />
                <span className="mx-4 font-bold">{user.name}</span>
              </div>
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: body_html }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/blog">
              <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer text-base pb-8">
                <svg
                  className="w-6 h-6 mr-2"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Volver
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`
  );
  const posts = await devDotToPosts.json();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const devDotToPost = await fetch(
    `https://dev.to/api/articles/${process.env.DEV_USERNAME}/${params.slug}`
  );
  const res = await devDotToPost.json();

  return {
    props: {
      devDotToPost: res,
    },
  };
};