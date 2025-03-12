import Hero from "@/components/Hero";
import Navbar from "../components/Navbar"; // ✅ Fixed typo
import Cursor from "@/components/Cursor";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="min-h-screen dark:bg-[#fff] bg-[#0A1A2F]">
      <Navbar />
      <Hero/>
      <Cursor/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </main>
  );
}