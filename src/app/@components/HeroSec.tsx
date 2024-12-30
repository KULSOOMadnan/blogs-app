import { slugify } from "@/utils/slufy";
import Link from "next/link";

export default function HeroSection() {
    return (
      <section className="relative lg:min-h-screen h-[50vh]  bg-[url(/hero.png)] bg-cover bg-center bg-no-repeat text-white">
        {/* Blackout div with gradient effect */}
        <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black opacity-60 w-full h-full"></div>
  
        {/* Content container */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            {/* Posted on text */}
            <p className="uppercase text-sm font-extralight font-inter tracking-[4px]">
              Posted on <span className="font-bold">Startup</span>
            </p>
  
            {/* Main heading */}
            <h1 className="text-4xl font-bold font-sen leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Step-by-step guide to choosing great font pairs
            </h1>
  
            {/* Author and date */}
            <div className="flex items-center space-x-4 text-sm font-inter justify-center md:justify-start">
              <p>
                By <span className="text-yellow">James West</span> | May 23, 2022
              </p>
            </div>
  
            {/* Description text */}
            <p className="text-gray-300 text-sm font-inter text-center md:text-left">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
  
            {/* Button */}
            <Link href={`/blogs/${slugify('Step-by-step guide to choosing great font pairs')}`}>
            <button className="bg-yellow text-gray-900 px-8 py-3 text-sm font-sen font-bold mt-8 hover:bg-light_yellow">
              Read More &gt;
            </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  

// export default function HeroSection() {
//     return (
//       <section className="relative h-[110vh] bg-[url(/hero.png)] bg-contain bg-no-repeat text-white ">
//         {/* Blackout div with fixed height */}
//         <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black opacity-60 w-full h-full"></div>
  
//         {/* Content container */}
//         <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row md:py-16">
//           <div className="md:w-1/2 space-y-6 text-center md:text-left">
//             {/* Posted on text */}
//             <p className="uppercase text-sm font-extralight font-inter tracking-[4px]">
//               Posted on <span className="font-bold">Startup</span>
//             </p>
  
//             {/* Main heading */}
//             <h1 className="text-4xl font-bold font-sen leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
//               Step-by-step guide to choosing great font pairs
//             </h1>
  
//             {/* Author and date */}
//             <div className="flex items-center space-x-4 text-sm font-inter justify-center md:justify-start">
//               <p>
//                 By <span className="text-yellow">James West</span> | May 23, 2022
//               </p>
//             </div>
  
//             {/* Description text */}
//             <p className="text-gray-300 text-sm font-inter text-center md:text-left">
//               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident.
//             </p>
  
//             {/* Button */}
//             <button className="bg-yellow text-gray-900 px-8 py-3 text-sm font-sen font-bold mt-8 hover:bg-yellow-400">
//               Read More &gt;
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }
  
   {/* <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <p className="uppercase text-sm font-extralight font-inter tracking-[4px]">Posted on <span className="font-bold">Startup</span></p>
            <h1 className="text-4xl font-bold font-sen leading-tight">
              Step-by-step guide to choosing great font pairs
            </h1>
            <div className="flex items-center space-x-4 text-sm font-inter">
              <p>
              By <span className="text-yellow"> James West</span> | May 23, 2022
              </p>
            </div>
            <p className="text-gray-300 text-sm font-inter">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button className="bg-yellow text-gray-900 px-8 py-3 text-blue text-sm font-sen font-bold mt-8">
              Read More &gt;
            </button>
          </div>
          
        </div> */}


        
// export default function HeroSection() {
//     return (
//       <section className="relative h-[130vh]  bg-[url(/hero.png)] bg-contain bg-no-repeat text-white w-full" >
//         <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black w-full"></div>
       
//         {/* Content container */}
//         <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row md:py-16">
//           <div className="md:w-1/2 space-y-6 text-center md:text-left">
//             {/* Posted on text */}
//             <p className="uppercase text-sm font-extralight font-inter tracking-[4px]">
//               Posted on <span className="font-bold">Startup</span>
//             </p>
            
//             {/* Main heading */}
//             <h1 className="text-4xl font-bold font-sen leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
//               Step-by-step guide to choosing great font pairs
//             </h1>
            
//             {/* Author and date */}
//             <div className="flex items-center space-x-4 text-sm font-inter justify-center md:justify-start">
//               <p>
//                 By <span className="text-yellow">James West</span> | May 23, 2022
//               </p>
//             </div>
  
//             {/* Description text */}
//             <p className="text-gray-300 text-sm font-inter text-center md:text-left">
//               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident.
//             </p>
  
//             {/* Button */}
//             <button className="bg-yellow text-gray-900 px-8 py-3 text-sm font-sen font-bold mt-8 hover:bg-yellow-400">
//               Read More &gt;
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }
