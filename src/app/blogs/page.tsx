
import BlogCard from "../@components/postcard";
import { blogPosts } from "@/data/BlogPost";




function BlogPost() {
  return (
    <div>
      
      <div className="min-h-screen py-4 px-12">
      <h2 className="text-black mb-4 lg:text-6xl lg:leading-normal text-4xl sm:text-5xl font-extrabold text-center">
        {" "}
        Blog Post&apos;s
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2  py-6">
        <button
          className={`rounded-full border-2  px-6 py-3 text-xl cursor-pointer hover:border-blue-600`}
        >
          All
        </button>
      </div>

      <div>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <BlogCard
                
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
