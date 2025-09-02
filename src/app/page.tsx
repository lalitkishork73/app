import Image from "next/image";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Project";
import About from "@/components/home/About";
import Clients from "@/components/home/Clients";
import Showreel from "@/components/home/Showreel";
import LatestInsights from "@/components/home/LatestInsights";
export default function Home () {
  return (
    <div className="">
      <Hero />
      <Projects />
      <About />
      <Clients />
      <Showreel />
      <LatestInsights/>
    </div>
  );
}
