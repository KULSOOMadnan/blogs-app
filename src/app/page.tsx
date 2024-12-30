
import Category from "./@components/Category";
import FeaturedPost from "./@components/FeaturedPost";
import HeroSec from "./@components/HeroSec";
import HeroSection from "./@components/HroSetion";
import Join from "./@components/Join";
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
