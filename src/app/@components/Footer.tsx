import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div>
      
      <footer className="p-3 text-center text-white bg-blue-600 ">
        
        <div className="w-full flex justify-between">
        <span className='text-brown-400 text-xs md:text-xl font-[Ballet] '>Blog</span>
          <p className='text-brown-400 text-xs md:text-xl font-[Ballet] '>&copy; {new Date().getFullYear()} My Blog App. All Rights Reserves.</p>
          <ul className="flex justify-end gap-3 ">
            <li>
              <Link href="https://www.github.com"><p className="fa-brands fa-github"></p></Link>
            </li>
            <li><Link href="https://www.instagram.com"> <p className="fa-brands fa-instagram"></p></Link>
            </li>
            <li><Link href="https://www.facebook.com"><p className="fa-brands fa-facebook"></p></Link>
            </li>
            <li><Link href="https://www.linkedin.com"><p className="fa-brands fa-linkedin"></p></Link>
            </li>
            <li><Link href="https://www.linkedin.com"><p className="fa-regular fa-envelope"></p></Link>
            </li>
          </ul>
        </div>
        
        
      </footer>
    </div>
  );
}

export default Footer;
