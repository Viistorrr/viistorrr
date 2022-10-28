import BlogLayout from "@components/bloglayout/BlogLayout";
import { VImage } from "@components/image/VImage";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
    <div>
      <Head>
        <meta property="og:type" content={type_of} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={social_image} />
        <meta property="og:url" content={canonical_url} />
      </Head>
      <div className="flex justify-center">
        <article className="text-xs w-full md:w-3/4 ">
          <div className="border-2 text-black bg-white md:rounded-lg overflow-hidden">
            <VImage src={social_image} alt={title} width={500} height={300} />
            <div className="p-4 md:p-32">
              <h1>{title}</h1>
              <div className="flex items-center text-gray-600">
                <VImage
                  src={user.profile_image_90}
                  alt={user.name}
                  width={100}
                  height={100}
                />
                <span className="mx-4">{user.name}</span>
                <span className="text-sm">23/10/2022</span>
              </div>
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: body_html }}
              />
            </div>
          </div>
          <Link href="/blog">
            <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer text-base pb-8">
              <svg
                className="w-4 h-4 mr-2"
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
        </article>
      </div>
    </div>
  );
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
