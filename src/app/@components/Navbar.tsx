"use client";

import Link from "next/link";

import React, { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav
          className={`bg-blue flex items-center p-2 justify-between md:p-4 z-10  backdrop-blur-md   font-satisfy sticky`}
        >
          {/* Logo  */}
          <div className="flex text-white text-3xl font-sen font-extrabold ">
            <Link href="/">FinSweet</Link>
          </div>

          {/* Show/Hide menu based on isOpen state */}
          <ul
            className={`text-white md:text-xl space-x-7 cursor-pointer text-xl hidden  md:flex items-center font-sen `}
          >
            <li className=" hover:text-gray-400 ">
              <Link href="/" className="text-sm">
                Home
              </Link>
            </li>
            <li className=" hover:text-gray-400 font-extralight">
              <Link href="/blogs" className="text-sm">
                blogs
              </Link>
            </li>
            <li className=" hover:text-gray-400 font-extralight">
              <Link href="/contact" className="text-sm">
                Contact us{" "}
              </Link>
            </li>

            <li className=" hover:text-gray-400 font-extralight">
              <Link href="/contact" className="text-sm">
                About us{" "}
              </Link>
            </li>

            <button className=" bg-white min-w-[178px] px-[34px] py-2 text-[15px] font-sen font-bold sm:px-5 text-blue">
              Subscribe
            </button>
          </ul>

          {/* Hamburger button to toggle menu */}
          <button
            className="text-white text-5xl md:hidden flex place-items-center"
            onClick={() => setOpen(!isOpen)}
          >
            {!isOpen ? (
              <p className="text-5xl ">&#119064; </p>
            ) : (
              <p className="text-4xl">&#10005;</p>
            )}
          </button>
        </nav>

        {isOpen ? (
          <div className="bg-white p-8 font-satisfy">
            <ul
              className={`text-gray-600 md:text-2xl  cursor-pointer text-xl md:hidden flex flex-col items-center justify-center space-y-6  `}
            >
              <li className=" text-center pb-3 text-2xl hover:text-blue-700">
                <Link href="/">Home</Link>
              </li>
              <li className=" text-center pb-3 text-2xl hover:text-blue-700">
                <Link href="/blogs">Blog</Link>
              </li>
              <li className=" text-center pb-3 text-2xl hover:text-blue-700 ">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
