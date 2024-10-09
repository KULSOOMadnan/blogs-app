'use client'
import { usePathname } from 'next/navigation';
import { blogPosts ,blogContents } from '@/data/BlogPost';
import { slugify } from '@/utils/slufy';    // Slugify utility function
import Navbar from '@/app/@components/Navbar';
import CommentSection from '@/app/@components/CommentSetion';
import React from 'react'
import Footer from '@/app/@components/Footer';

const BlogPostPage = () => {
  const pathname = usePathname(); // Get the current path
  const slug = pathname.split("/").pop(); // Extract the slug from the URL

  // Find the post based on the slugified title
  const post : any   = blogPosts.find((post) => slugify(post.title) === slug);
  
  // Get the content for this blog post
  const content = blogContents[post.id] || [];

  if (!post) {
    return <p>Blog post not found</p>;

  }

    return (
      <div className=''>
      <Navbar/>
      <div className="px-0 py-6 md:px-52">
        <h1 className="text-4xl  md:text-5xl font-bold mb-4 text-center">{post.title}</h1>
        <div className='flex justify-center flex-col px-10 md:20'>
        <p className="text-gray-600 mb-4 text-center">
              By <span className="font-semibold">{post.author}</span> on {post.date}
        </p>
        <img src={post.imgUrl} alt={post.title} className="mb-6 md:h-[600px] w-full h-[400px]" />
        <p className='text-2xl text-centerc'>{post.content}</p>
        {/* Render the blog content */}
        {content.map((item, index) => {
            if (item.type === "paragraph") {
              return <p key={index} className='mt-4  text-xl text-justify '>{item.content}</p>;
            } else if (item.type === "image") {
              return <img key={index} src={item.src} alt={item.alt} className="my-8 w-full h-auto " />;
            } else if (item.type === "heading") {
              const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
              return React.createElement(HeadingTag, { key: index, className: `mt-16 md:text-${item.level === 1 ? '5xl' : '4xl'} text-${item.level === 1 ? '3xl' : '2xl'} font-bold` }, item.content);
            }else if (item.type === "code") {
              return (
                <pre key={index} className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <code className="whitespace-pre-wrap">{item.content}</code>
                </pre>
              );
            }
          
            return null; // Return null for unrecognized types
          })}
        </div>
        
        {/* comment section  */}
        <CommentSection/>
      </div>
      <Footer/>
      </div>
    //   <div >
    //   <Navbar />
    //   <div className="py-6 container mx-auto px-4 md:px-30">
    //     <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{post.title}</h1>
    //     <div className='flex justify-center flex-col'>
    //       <p className="text-gray-600 mb-4 text-center">
    //         By <span className="font-semibold">{post.author}</span> on {post.date}
    //       </p>
    //       <img src={post.imgUrl} alt={post.title} className="mb-6 h-[600px] w-full" />
    //       <p className='text-xl md:text-2xl text-center'>{post.content}</p>
    //       {/* Render the blog content */}
    //       {content.map((item, index) => {
    //         if (item.type === 'paragraph') {
    //           return <p key={index} className='mt-4 text-xl md:text-2xl text-justify'>{item.content}</p>;
    //         } else if (item.type === 'image') {
    //           return <img key={index} src={item.src} alt={item.alt} className="my-8 w-full h-auto" />;
    //         } else if (item.type === 'heading') {
    //           const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
    //           return React.createElement(HeadingTag, {
    //             key: index,
    //             className: `mt-16 text-${item.level === 1 ? '3xl md:text-5xl' : '2xl md:text-4xl'} font-bold`
    //           }, item.content);
    //         }
    //         return null; // Return null for unrecognized types
    //       })}
    //     </div>

    //     {/* Comment section */}
    //     <CommentSection />
    //   </div>
    //   <Footer/>
    // </div>
    
        
    );
  }



export default BlogPostPage;

