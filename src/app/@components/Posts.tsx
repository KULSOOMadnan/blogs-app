
import { blogPosts } from "@/data/BlogPost";
import Link from "next/link";
import { slugify } from "@/utils/slufy";

function Posts() {
  const filteredPosts = blogPosts.slice(0, 5);
  return (
    <div className="grid grid-cols-1 gap-4 px-5  max-w-4xl mx-auto">
      {filteredPosts.map((post) => (
        <div
          key={post.id}
          className="max-w-lg px-5 py-7 hover:bg-[#FBF6EA] cursor-pointer transition-all duration-300"
        >
          <Link href={`/blogs/${slugify(post.title)}`}>
            <p className="text-dark_grey font-inter text-xs font-medium">
              By <span className="text-purple font-medium">{post.author}</span>{" "}
              | {post.date}
            </p>
            <h2 className="text-xl font-bold text-blue font-sen mt-2 ">
              {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;

// const posts: Post[] = [
//   {
//     id: 1,
//     author: "John Doe",
//     date: "Aug 23, 2021",
//     title: "8 Figma design systems that you can download for free today.",
//   },
//   {
//     id: 2,
//     author: "Jane Smith",
//     date: "Sep 10, 2021",
//     title: "The ultimate guide to prototyping in Figma.",
//   },
//   {
//     id: 3,
//     author: "Mike Johnson",
//     date: "Oct 5, 2021",
//     title: "How to create responsive design layouts in Figma.",
//   },
//   {
//     id: 4,
//     author: "Emily Brown",
//     date: "Nov 15, 2021",
//     title: "Top Figma plugins for improving your workflow.",
//   },

// ];
