

import Link from "next/link";
import { slugify } from "@/utils/slufy";
import Image from "next/image";

interface Post {
  title: string;
  description: string;
  author: string;
  date: string;
  imgUrl: string;
  Category: string;
}

function BlogCard({
  title,
  description,
  date,
  author,
  imgUrl,
  Category,
}: Post) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full bg-white  overflow-hidden">
      {/* Blog Image */}
      <Link href={`/blogs/${slugify(title)}`} className="block w-full md:w-1/3">
        <div className="relative h-48 md:h-full">
          <Image
            src={imgUrl}
            alt="blog image"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover h-full w-full"
          />
        </div>
      </Link>

      {/* Blog Content */}

      <Link href={`/blogs/${slugify(title)}`} className="flex flex-col justify-between gap-3 p-4 md:w-2/3">
    
        {/* Category */}
        <p className="text-purple font-inter font-semibold text-xs tracking-[3px] uppercase">
          {Category}
        </p>

        {/* Title */}
        <h5 className="text-xl md:text-2xl text-blue font-sen font-bold leading-snug">
          {title}
        </h5>

        {/* Description */}
        <p className="text-medium_grey-0 text-sm md:text-base">{description}</p>

        {/* Author and Date */}
        <div className="flex items-center text-xs md:text-sm text-medium_grey-0 mt-2">
          <p>
            By <span className="text-purple font-medium">{author}</span> |{" "}
            <span className="text-medium_grey-0">{date}</span>
          </p>
        </div>
       
      </Link>
    </div>
  );
}

export default BlogCard;


// import Link from "next/link";
// import { slugify } from "@/utils/slufy";
// import Image from "next/image";
// interface Post {
//   title: string;
//   description: string;
//   author: string;
//   date: string;
//   imgUrl: string;
//   Category : string
// }

// function BlogCard({ title, description, date, author, imgUrl ,  Category}: Post) {
//   return (
//     <div className="flex gap-10 h-[200px]  w-full  ">
//       <Link href={`/blogs/${slugify(title)}`}>
//         <Image
//           src={imgUrl}
//           width={400}
//           height={400}
//           alt="blog imag"
//           className="h-32 md:h-60  relative group"
//           style={{
//             background: `url(${imgUrl})`,
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//           }}
//         />
//       </Link>

//       <div className="text-black mt-2 rounded-b-xl flex flex-col gap-2 bg-[#fefefe] px-4 py-6">
//         <p className="text-purple font-inter font-semibold text-sx tracking-[3px]">{Category}</p>
//         <h5 className="text-2xl text-blue font-sen font-bold mb-2">{title}</h5>
//         <p className="text-medium_grey-0">{description}</p>
//         <div className=" flex  mt-3">
//           <p className=" text-blue text-xs font-sen"> By <span className="text-purple">{author}</span> | <span  className="text-medium_grey-0 text-xs  "> {date}</span> </p>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default BlogCard;
// {
//   /* <div

//         >
//           <div className="overlay items-center  justify-center absolute top-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex rounded-t-xl group-hover:bg-opacity-80 transition-all duration-500"></div>
//         </div> */
// }