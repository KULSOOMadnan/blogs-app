import Image from "next/image";
import Navbar from "./@components/Navbar";
import Footer from "./@components/Footer";
import HeroSection from "./@components/HroSetion";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="h-[100vh] w-full">
        <HeroSection/>
      </main> 
      <Footer/>
    </div>
  );
}
