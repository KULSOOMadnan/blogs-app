// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function HeroSection() {
//   return (
//     <section className="min-h-screen px-12 py-4"> 
//     <div className="grid grid-cols-1 lg:grid-cols-12">
//       <div className="col-span-6 place-self-center sm:text-left justify-self-start">
//         <h1 className="text-blue-500 mb-4 lg:text-6xl lg:leading-normal text-3xl sm:text-5xl font-extrabold">
//           Welcome to My Blog App
//         </h1>
//         <p className="text-[grey] text-base sm:text-lg lg:text-xl mb-6">
//           Discover insightful articles, personal stories, and tutorials on web development, coding practices,
//            and the latest tech trends. Whether you're a developer, tech enthusiast, or someone looking to learn, 
//            my blog offers a wide range of content designed to inspire and educate. Stay updated with the most relevant industry news, coding tips, and project showcases, all in one place.
//         </p>
//         <div>
//           <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-blue-700 text-white  hover:bg-blue-500'><Link href='/blogs'>Blogs</Link> </button>
//         </div>
//       </div>
//       <div className="col-span-6 place-self-center mt-4 lg:mt-0">
//         <Image
//           src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1728052813~exp=1728056413~hmac=fa34f9d45a212e350f99301adfb37a28e0db5641d1b5d3ab1b79f2cf87c86066&w=900"
//           alt="hero section"
//           height={550}
//           width={500}
//           className="rounded-full"
//         />
//       </div>
//     </div>
//   </section>
  
//   );
// }

// export default HeroSection;
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section className="min-h-screen px-12 py-4"> 
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left side: Text content */}
        <div className="col-span-6 place-self-center sm:text-left justify-self-start">
          <h1 className="text-blue-400 mb-4 lg:text-6xl lg:leading-normal text-4xl sm:text-5xl font-extrabold">
            Welcome to My Blog
          </h1>
          <p className="text-[grey] text-base sm:text-lg lg:text-xl mb-6">
            As a passionate developer, I created this blog to share my learning journey in the tech world. 
            From web development to coding practices, you’ll find everything here to help you grow as a developer.
          </p>

          <p className="text-[grey] text-base sm:text-lg lg:text-xl mb-6">
            Whether you're a beginner or an experienced coder, this blog makes complex topics simple and approachable. 
            You'll find step-by-step tutorials, practical advice, and real-world coding insights.
          </p>

          <p className="text-[grey] text-base sm:text-lg lg:text-xl mb-6">
            Start exploring, and take your skills to the next level with hands-on projects and coding tips.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-blue-700 text-white hover:bg-blue-500'>
              <Link href='/blogs'>Explore Blogs</Link>
            </button>
            
          </div>
        </div>

        {/* Right side: Image */}
        <div className="col-span-6 place-self-center mt-4 lg:mt-0">
          <Image
            src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg"
            alt="hero section"
            height={550}
            width={500}
            className="rounded-full"
          />
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;
