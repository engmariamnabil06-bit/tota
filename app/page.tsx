import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Stats from "@/components/Stats/Stats";
import Skills from "@/components/Skills/Skills";
import FadeIn from "@/components/ui/FadeIn";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <FadeIn>
  <About />
</FadeIn>

<FadeIn>
  <Stats />
</FadeIn>

<FadeIn>
  <Skills />
</FadeIn>

<FadeIn>
  <Experience />
</FadeIn>

<FadeIn>
  <Projects />
</FadeIn>

<FadeIn>
   <Contact />
</FadeIn>

<FadeIn>
   <Footer />
</FadeIn>

<FadeIn>
   <BackToTop />
</FadeIn>

    </main>
  );
}