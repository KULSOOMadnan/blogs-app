import Link from "next/link";
import { slugify } from "@/utils/slufy";
interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  imgUrl: string;
}

function BlogCard({ id, title, description, date, author, imgUrl }: Post) {
  return (
    <div>
      <Link href={`/blogs/${slugify(title)}`}>
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="overlay items-center  justify-center absolute top-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex rounded-t-xl group-hover:bg-opacity-80 transition-all duration-500"></div>
        </div>
      </Link>

      <div className="text-black mt-2 rounded-b-xl bg-[#fefefe] px-4 py-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[gray]">{description}</p>
        <div className="flex justify-between">
          <p className="text-black">{author}</p>
          <p className="text-[gray] ">{date}</p>
        </div>
        <Link href={`/blogs/${slugify(title)}`}>
          <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md ">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
