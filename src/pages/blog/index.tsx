import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@components/Layout";
import { VImage } from "@components/image/VImage";

const Tags = (tags) => {
  return tags.tags.map((tag) => (
    <strong key={tag} className="text-xs text-primary">
      #{tag}{" "}
    </strong>
  ));
};

const Blog = ({ devDotToPosts }) => {
  const [posts, setPosts] = useState([]);
  const url = `https://dev.to/api/articles?username=viistorrr`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {posts &&
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
                        <Tags tags={post.tag_list} />
                        <p className="text-secondary text-sm mt-1">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

/* export const getServerSideProps = async () => {
  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=viistorrr`
  );

  const res = await devDotToPosts.json();

  return {
    props: {
      devDotToPosts: res,
      url: `https://dev.to/api/articles?username=viistorrr`,
    },
  };
}; */

export default Blog;
