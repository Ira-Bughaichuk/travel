import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Career from "@/components/Career";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <header className="absolute left-0 top-0 bg-transparent w-full">
        <Header />
      </header>
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
