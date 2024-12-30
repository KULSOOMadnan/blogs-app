import Blog from "../@components/Blog";
import BlogCard from "../@components/Blogcard";
import { blogPosts } from "@/data/BlogPost";

function BlogPost() {
  return (
    <div>
      <Blog />
      <div className="h-auto  flex flex-col gap-4 py-10 px-12">
        <h2 className="text-blue mb-4 lg:text-5xl lg:leading-normal text-4xl sm:text-5xl font-bold text-left font-sen ">
          {" "}
          All post&apos;s
        </h2>

        <div className="py-10">
          <ul className="flex flex-col gap-20 ">
            {blogPosts.map((post) => (
              <li key={post.id}>
                <BlogCard
                Category={post.category}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  imgUrl={post.imgUrl}
                  author={post.author}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
