/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@components/Layout";
import { VImage } from "@components/image/VImage";
import Head from "next/head";

const Tags = (tags) => {
  return tags.tags.map((tag) => (
    <strong key={tag} className="text-xs text-primary">
      #{tag}{" "}
    </strong>
  ));
};

const categories = [
  {
    name: "productividad",
  },
  {
    name: "programming",
  },
];

const Blog = ({ posts }) => {
  /* const [posts, setPosts] = useState([]);
  //console.log({ categories });
  const url = `https://dev.to/api/articles?username=${process.env.NEXT_PUBLIC_DEVTO_USERNAME}&per_page=100`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(url); */
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {posts ? (
            posts.map((post) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={post.id}>
                <Link href={`/blog/posts/${encodeURIComponent(post.slug)}`}>
                  <a>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <VImage
                        src={post.social_image}
                        alt={post.title}
                        width={500}
                        height={200}
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-primary">
                          {post.title}
                        </h3>
                        <Tags tags={post.tag_list} />
                        <p className="text-secondary text-sm mt-1">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))
          ) : (
            <h1>No hay posts publicados</h1>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const posts = await fetch(
    `https://dev.to/api/articles?username=${process.env.NEXT_PUBLIC_DEVTO_USERNAME}`
  );

  const res = await posts.json();

  return {
    props: {
      posts: res,
      url: `https://dev.to/api/articles?username=${process.env.NEXT_PUBLIC_DEVTO_USERNAME}`,
    },
  };
};

export default Blog;
