
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/app/sections/Hero'));
const About = dynamic(() => import('@/app/sections/About'));
const Services = dynamic(() => import('@/app/sections/Services'));
const Career = dynamic(() => import('@/app/sections/Career'));
const Gallery = dynamic(() => import('@/app/sections/Gallery'));
const Contacts = dynamic(() => import('@/app/sections/Contacts'));

export default function Home() {
  return (
      <main>
          <Hero />
          <About />
          <Services />
          <Career />
          <Gallery />
          <Contacts />
      </main>
  );
}
