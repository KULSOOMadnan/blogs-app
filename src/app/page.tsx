
import FeaturedPost from "./@components/FeaturedPost";
import HeroSec from "./@components/HeroSec";

import OurStory from "./@components/OurStory";
export default function Home() {
  return (
    <div>
      
      <main className="w-full">
        {/* <HeroSection/> */}
        <HeroSec/>
        <FeaturedPost/>
        <OurStory/>
       
      </main> 
     
    </div>
  );
}
