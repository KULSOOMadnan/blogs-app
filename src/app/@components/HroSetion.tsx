
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section className="lg:min-h-screen h-[70vh] px-12 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Right side: Image (Will appear first on small screens, second on larger screens) */}
        <div className="col-span-1 lg:col-span-6 lg:order-2 order-1 place-self-center">
          <Image
            src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg"
            alt="hero section"
            height={550}
            width={500}
            className="rounded-full md:h-[200px]"
          />
        </div>

        {/* Left side: Text content */}
        <div className="col-span-1 lg:col-span-6 lg:order-1 order-2 place-self-center sm:text-left justify-self-start">
          <h1 className="text-blue-400 mb-4 lg:text-6xl lg:leading-normal text-4xl sm:text-5xl font-extrabold">
            Welcome to My Blog
          </h1>
          <p className="text-[grey] text-base sm:text-lg lg:text-xl mb-6">
            As a passionate developer, I created this blog to share my learning journey in the tech world. 
            From web development to coding practices, you&apos;ll find everything here to help you grow as a developer.
          </p>

          <p className="text-[grey] text-base sm:text-lg lg:text-xl mb-6">
            Whether you&apos;re a beginner or an experienced coder, this blog makes complex topics simple and approachable. 
            You&apos;ll find step-by-step tutorials, practical advice, and real-world coding insights.
          </p>

          <p className="text-[grey] text-base sm:text-lg lg:text-xl mb-6">
            Start exploring, and take your skills to the next level with hands-on projects and coding tips.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <button className='px-6 py-3 w-full sm:w-fit rounded-full  bg-blue-700 text-white hover:bg-blue-500'>
              <Link href='/blogs'>Explore Blogs</Link>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;



