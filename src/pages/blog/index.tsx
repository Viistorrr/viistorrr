import { VImage } from "@components/image/vImage";
import Layout from "@components/Layout";
import Link from "next/link";

const Blog = ({ devDotToPosts }) => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {devDotToPosts.map((post) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={post.id}>
              <Link
                prefetch={true}
                href={`/blog/posts/${encodeURIComponent(post.slug)}`}
              >
                <a>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <VImage
                      src={post.social_image}
                      alt={post.title}
                      width={500}
                      height={200}
                    />
                    <div className="p-4">
                      <h3 className="text-gray-700 font-medium text-lg">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
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
