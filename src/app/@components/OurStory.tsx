import React from "react";

function OurStory() {
  return (
    <div className="w-full pb-14">
      <section className="relative lg:min-h-screen h-[50vh] z-10 bg-[url(/close.png)] lg:w-[70%] w-[100%]  bg-contain bg-center bg-no-repeat text-white lg:mx-16">
        <div className="absolute bg-white lg:w-[600px] lg:h-[500px] w-[350px] h-[250px] md:h-[300px] md:w-[500px]  lg:top-[20%] top-[40%] sm:left-[25%] sm:top-[30%] left-[20%] lg:left-[70%] lg:-translate-x-[20%] shadow-lg lg:p-20 p-5">
          <div className=" md:space-y-5 space-y-3  text-center lg:text-left text-blue">
            {/* Posted on text */}
            <p className="uppercase text-sm font-extralight font-inter tracking-[4px]">
              Why we <span className="font-bold">started </span>
            </p>

            {/* Main heading */}
            <h1 className="text-xl font-bold font-sen leading-tight  lg:text-3xl">
              It started out as a simple idea and evolved into our passion
            </h1>

            {/* Description text */}
            <p className="text-medium_grey-0 md:text-sm text-xs font-inter text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            {/* Button */}
            {/* <button className="bg-yellow text-gray-900 px-8 py-3 text-sm font-sen font-bold mt-8 hover:bg-yellow-400">
              Discover our story &gt;
            </button> */}
            <div className="flex justify-center ">
    <button className="bg-yellow text-gray-900 px-6 py-2 md:px-8 md:py-3 text-sm lg:text-base font-sen font-bold lg:mt-6 hover:bg-yellow-400 transition-all duration-200">
      Discover our story &gt;
    </button>
  </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;
<div className="p-4 md:p-8 space space-y-5 text-center md:text-left text-blue">
  {/* Posted on text */}
  <p className="uppercase text-sm font-extralight font-inter tracking-widest">
    Why we <span className="font-bold">started</span>
  </p>

  {/* Main heading */}
  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-sen leading-snug">
    It started out as a simple idea and evolved into our passion
  </h1>

  {/* Description text */}
  <p className="text-medium_grey-0 text-xs md:text-sm lg:text-base font-inter text-center md:text-left leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip.
  </p>

  {/* Button */}
  
</div>;
