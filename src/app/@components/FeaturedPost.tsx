"use client";
import Image from "next/image";
import React from "react";
import Posts from "./Posts";
import Link from "next/link";



function FeaturedPost() {
  return (
    <div className="w-full h-max flex flex-col justify-center lg:flex-row px-10 py-14  lg:py-24">
      <div className="flex flex-col w-full lg:w-3/5 ">
        <h1 className="text-blue text-3xl font-bold font-sen tracking-tighter">
          Featured Post
        </h1>
        <div className="flex flex-col gap-4 px-5 py-5 mt-8">
          <Image src="/feas.png" alt="imag" width={650} height={600}  className="w-full h-auto " />
          <p className="text-sm text-dark_grey font-medium">
            by <span className="text-purple ">Jhon Doe</span> | May 23, 2024
          </p>
          <h1 className="text-blue font-sen font-bold lg:text-[28px] sm:text-2xl text-[24px] tracking-tighter ">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod tempor.
          </h1>
          <p className="text-medium_grey-0 w-full lg:w-3/4 ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Link href="/blogs" className="bg-yellow text-gray-900 px-8 py-3 w-max text-sm font-sen font-bold  hover:bg-light_yellow">
            Read More &gt;
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-2/5 col-span-1  gap-7  mt-10 lg:mt-0">
        <div className="flex items-center justify-between px-3">
          <h1 className="text-blue text-3xl font-bold font-sen tracking-tighter  sm:text-3xl">
            All Posts
          </h1>
          <Link href="/blogs" className="text-purple  text-xs font-light">
            View All
          </Link>
        </div>
        <div className="flex items-center flex-col min-h-screen mt-3 ">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;


// function FeaturedPost() {
//   return (
//   //   <div className="w-full flex flex-col  justify-center px-4 sm:px-6 lg:px-10 py-10">
//   //     {/* Left Section */}
//   //     <div className="flex flex-col w-full">
//   //       <h1 className="text-blue text-2xl sm:text-3xl font-bold tracking-tighter">
//   //         Featured Post
//   //       </h1>
//   //       <div className="flex flex-col gap-4 mt-8">
//   //         <Image
//   //           src="/feas.png"
//   //           alt="Featured Post"
//   //           width={650}
//   //           height={600}
//   //          
//   //         />
//   //         <p className="text-sm text-dark_grey font-medium">
//   //           By <span className="text-purple">John Doe</span> | May 23, 2024
//   //         </p>
//   //         <h1 className="text-blue font-bold text-xl  tracking-tighter">
//   //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//   //           eiusmod tempor.
//   //         </h1>
//   //         <p className="text-medium_grey ">
//   //           Duis aute irure dolor in reprehenderit in voluptate velit esse
//   //           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//   //           cupidatat non proident.
//   //         </p>
//   //         <button className="bg-yellow text-gray-900 px-8 py-3 text-sm font-bold rounded-lg hover:bg-yellow-400">
//   //           Read More &gt;
//   //         </button>
//   //       </div>
//   //     </div>

//   //     {/* Right Section */}
//   //     <div className="flex flex-col  gap-7">
//   //       <div className="flex items-center justify-between px-3">
//   //         <h1 className=" tracking-tighter">
//   //           All Posts
//   //         </h1>
//   //         <Link href="/blogs" className="text-purple text-sm font-light">
//   //           View All
//   //         </Link>
//   //       </div>
//   //       <div className="flex items-center flex-col mt-3">
//   //         <Posts />
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
// }

// export default FeaturedPost;
