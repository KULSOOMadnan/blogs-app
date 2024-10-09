"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

function navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav
          className={`bg-blue-700 flex items-center p-2 justify-between md:p-4 sticky z-10  backdrop-blur-md   font-satisfy fixed`}
        >
          {/* Logo  */}
          <div className="flex text-white text-3xl ">
            <Image
              src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
              className="text-white md:text-3xl text-2xl cursor-pointer mx-2 md:mx-0 h-10 w-10 rounded-full"
              width={32}
              height={32}
              alt="logo"
            />
            <Link href='/blogs'>Blog</Link>
            
          </div>

          {/* Show/Hide menu based on isOpen state */}
          <ul
            className={`text-white md:text-xl space-x-7 cursor-pointer text-xl hidden md:flex`}
          >
            <li className=" hover:text-gray-400">
              <Link href="/">Home</Link>
            </li>
            <li className=" hover:text-gray-400">
              <Link href="/blogs">blogs</Link>
            </li>
            <li className=" hover:text-gray-400">
              <Link href="/contact">Contact</Link>
            </li>
            
            
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

export default navbar;
