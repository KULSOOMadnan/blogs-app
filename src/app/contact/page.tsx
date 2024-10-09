'use client'

import React, { useState } from 'react';
import Navbar from '@/app/@components/Navbar'; // Assuming you have a Navbar component
import Footer from '../@components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message submitted!');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar at the top */}
      <header className="w-full fixed top-0">
        <Navbar />
      </header>

      {/* Form content centered on the page */}
      <main className="flex-grow flex items-center justify-center pt-16 pb-16 mt-11">
        <div className="max-w-2xl bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-6 text-center">
            Have any questions or feedback? We'd love to hear from you. Fill out the form below to get in touch!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Message"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {/* Fixed Footer at the bottom */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default ContactPage;
