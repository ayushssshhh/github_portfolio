import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import StickyNav from "./Components/Navbar/StickyNav";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Projects/Project";
import Globe from "./Components/Footer/Globe";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div className=' '>
      <div className='relative z-50'>
        <div className='absolute'>
          <Navbar />
        </div>
      </div>
      <div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <img className='absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image' width='4377' src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" alt="" />
          </div>
          <div className='hero-section px-3 '>
            <Hero />
          </div>
          <StickyNav />
          <div id='aboutme' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <AboutMe />
          </div>
          <div id='skills' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Skills/>
          </div>
          <Globe/>
        </div>

      </div>
      <Footer />
    </div>
  );
}
