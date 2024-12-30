import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div>
      
      <footer className="p-3 text-center text-white bg-blue-600 ">
        
        <div className="w-full flex justify-between">
        <span className='text-brown-400 text-xs md:text-xl font-[Ballet] '>Blog</span>
          <p className='text-brown-400 text-xs md:text-xl font-[Ballet] '>&copy; {new Date().getFullYear()} My Blog App. All Rights Reserves.</p>
         
        </div>
        
        
      </footer>
    </div>
  );
}

export default Footer;
