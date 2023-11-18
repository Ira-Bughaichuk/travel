import About from '../sections/About';
import Career from '../sections/Career';
import Contacts from '../sections/Contacts';
import Gallery from '../sections/Gallery';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
// import dynamic from 'next/dynamic';

// const Hero = dynamic(() => import('@/sections/Hero'));
// const About = dynamic(() => import('@/sections/About'));
// const Services = dynamic(() => import('@/sections/Services'));
// const Career = dynamic(() => import('@/sections/Career'));
// const Gallery = dynamic(() => import('@/sections/Gallery'));
// const Contacts = dynamic(() => import('@/sections/Contacts'));

export default function Home() {
  return (
    <>
      <main>
          <Hero />
          <About />
          <Services />
          <Career />
          <Gallery />
          <Contacts />
      </main>
    </>
  );
}
