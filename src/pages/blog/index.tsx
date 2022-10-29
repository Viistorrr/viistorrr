import Link from "next/link";
import { VImage } from "@components/image/VImage";
import Layout from "@components/Layout";

const Tags = (tags) => {
  return tags.tags.map((tag) => (
    <strong key={tag} className="text-xs text-primary">
      #{tag}{" "}
    </strong>
  ));
};

const Blog = ({ devDotToPosts }) => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {devDotToPosts &&
            devDotToPosts.map((post) => (
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

export const getServerSideProps = async () => {
  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`
  );

  const res = await devDotToPosts.json();

  return {
    props: {
      devDotToPosts: res,
    },
  };
};

export default Blog;
