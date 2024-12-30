"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Form content centered on the page */}
      <main className="flex-grow flex items-center justify-center  pb-16 mt-11">
        <div className="max-w-2xl bg-white shadow-lg rounded-lg p-8">
          <div className="flex flex-col gap-4">
            <h1 className=" uppercase text-sm text-blue font-semibold  text-center tracking-[3px] ">
              Contact Us
            </h1>
            <h1 className="font-sen text-4xl font-extrabold text-blue text-center">
              Let’s Start a Conversation
            </h1>
            <p className="text-medium_grey-0 text-sm  mb-6 text-center">
              Have any questions or feedback? We&apos;d love to hear from you.
              Fill out the form below to get in touch!
            </p>
          </div>
          {/* 
          <div className="bg-purple py-10  flex items-center justify-center gap-x-16">
            <div className="flex flex-col gap-4">
              <p className="text-white font-inter text-xs opacity-40 ">Working hours </p>
              <div className="flex flex-col ">
                <div className="w-full mx-auto h-[1px] bg-white opacity-35"></div>

                <p className="text-white font-bold text-lg font-sen">
                  Monday To Friday{" "}
                </p>
                <p className="text-white font-bold text-lg font-sen">
                  9:00 to 8:00 PM
                </p>
                <p className="text-white opacity-35 font-sen text-sm">
                  Our Support Team is available 24/7
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white font-inter text-xs opacity-35 ">Working hours </p>
              <div className="flex flex-col gap-1">
                <div className="w-full mx-auto h-[1px] bg-white opacity-35"></div>

                
                <p className="text-white font-bold text-lg font-sen">
                020 7993 2905
                </p>
                <p className="text-white opacity-35 text-sm font-sen">
                hello@finsweet.com
                </p>
              </div>
            </div>
          </div> */}

          <div className="bg-purple py-10 flex flex-col lg:flex-row items-center justify-center md:gap-24 gap-10">
            {/* First Section: Working Hours */}
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <p className="text-white font-inter text-xs opacity-40">
                Working hours
              </p>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-full h-[1px] bg-white opacity-35 mb-4"></div>
                <p className="text-white font-bold text-lg font-sen">
                  Monday To Friday
                </p>
                <p className="text-white font-bold text-lg font-sen">
                  9:00 to 8:00 PM
                </p>
                <p className="text-white opacity-35 font-sen text-sm">
                  Our Support Team is available 24/7
                </p>
              </div>
            </div>

            {/* Second Section: Contact Info */}
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <p className="text-white font-inter text-xs opacity-40">
                Contact Info
              </p>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-full h-[1px] bg-white opacity-35 mb-4"></div>
                <p className="text-white font-bold text-lg font-sen">
                  020 7993 2905
                </p>
                <p className="text-white opacity-35 text-sm font-sen">
                  hello@finsweet.com
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-5">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Message"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow text-[16px] font-sen text-blue font-bold py-2 px-4 rounded-md hover:bg-[#645323] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {/* Fixed Footer at the bottom */}
    </div>
  );
};

export default ContactPage;
// import { useState } from 'react';

// function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [query, setQuery] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event : Event) => {
//     event.preventDefault();

//     // Handle form submission here, e.g., send data to an API
//     console.log('Form submitted with data:', { name, email, query, message });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Let's Start a Conversation</h2>
//       <p className="text-gray-600 mb-8">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
//       </p>

//       <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
//         <div className="flex justify-between">
//           <div>
//             <p className="font-bold">Working Hours</p>
//             <p>Monday To Friday</p>
//             <p>9:00 AM to 8:00 PM</p>
//             <p className="text-sm">Our Support Team is available 24/7</p>
//           </div>
//           <div>
//             <p className="font-bold">Contact Us</p>
//             <p>020 7993 2905</p>
//             <p>hello@finsweet.com</p>
//           </div>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="mt-8">
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline- none focus:shadow-outline"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="query" className="block text-gray-700 font-bold mb-2">
//             Query Type
//           </label>
//           <select
//             id="query"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             required
//           >
//             <option value="">Select a query type</option>
//             <option value="general">General Inquiry</option>
//             <option value="support">Support</option>
//             <option value="feedback">Feedback</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
