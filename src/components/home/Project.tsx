"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
// import Johnywalker from '@/assets/videos/'

interface Project {
  id: string;
  href: string;
  title: string;
  subtitle: string;
  nb: string;
  img: string;
  video?: string;
  style?: string;
}

const projects: Project[] = [
  {
    id: "01",
    href: "/work/puma-fast-rb",
    title: "Puma Running",
    subtitle: "Fast RB",
    nb: "01",
    img: "https://images.prismic.io/inertia-website/Z8RlyxsAHJWomB5O_01_Extended.png?auto=format,compress&rect=0,375,3200,2450&w=640&h=490",
    video: "/videos/PUMA.mp4",
    style: ``,
  },
  {
    id: "02",
    href: "/work/jw-levels-of-liason",
    title: "Johnnie Walker",
    subtitle: "Levels of Liason",
    nb: "02",
    img: "https://images.prismic.io/inertia-website/Z8ruwhsAHJWomOsK_TP_ThirdFloor_JW_R%26D_07_0191.png?auto=format,compress&rect=0,252,1040,796&w=640&h=490",
    video: "/videos/JOHNYWALKER.mp4",
  },
  {
    id: "03",
    href: "/work/tiffany-with-love",
    title: "Tiffany & Co",
    subtitle: "With love, since 1837",
    nb: "03",
    img: "https://images.prismic.io/inertia-website/Z8sb6BsAHJWomPMg_Tiffany2.png?auto=format,compress&rect=255,0,1411,1080&w=640&h=490",
    video: "/videos/TIFFANY.mp4",
  },
  {
    id: "04",
    href: "/work/lv-x-nike",
    title: "LV X NIKE",
    subtitle: "Dream now",
    nb: "04",
    img: "https://images.prismic.io/inertia-website/Z8sSWhsAHJWomPHn_Header-image_LouisVuittonxNike_InertiaStudios.jpg?auto=format,compress&rect=255,0,1411,1080&w=640&h=490",
    video: "/videos/LVXNIKE.mp4",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      const boxes = gsap.utils.toArray(".box");

      boxes.forEach((element) => {
        gsap.fromTo(
          element,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    const marquee = marqueeRef.current;

    if (marquee) {
      const distance = marquee.scrollWidth / 2; // Half width because of duplicate

      gsap.to(marquee, {
        x: -distance,
        duration: 30, // speed
        ease: "power1",
        repeat: -1, // infinite
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % distance), // loop seamlessly
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="home-projects relative w-full  h-full">
      {/* Leading Brand Parteners */}
      <div className="flex flex-col md:flex-row  justify-between items-start px-4 md:px-16 md:mb-[10%]">
        <div className="text-xl font-medium md:text-4xl  mb-6 md:mb-0  md:text-left md:w-1/3 block uppercase tracking-tight">
          <h2 className="">WHY leading brands</h2>
          <h2 className="text-right px-16">partner with inertia.</h2>
        </div>
        <div className="max-w-md  md:text-left flex flex-col gap-4 tracking-tight">
          <span className=" font font-normal md:text-xl">
            From CGI product films to viral 3D billboards, we are pioneering 3D
            Imagery & Motion Design that redefines visual storytelling. See how
            we help brands make a mark.
          </span>
          <div>
            <Link href="/work">
              <span className="uppercase font-semibold">
                Discover more work
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Banner Text (looped span style) */}
      <div className="marquee-container overflow-hidden whitespace-nowrap text-4xl md:text-6xl font-semibold text-gray-300 border border-gray-300  md:border-black py-5" >
        <div className="marquee-content flex gap-16 uppercase text-black" ref={marqueeRef}>
          <span>Case studies</span>
          <span>Featured Projects</span>
          <span>Case studies</span>
          <span>Featured Projects</span>
          <span>Case studies</span>
          <span>Featured Projects</span>
          {/* Duplicate for smooth loop */}
          <span>Case studies</span>
          <span>Featured Projects</span>
          <span>Case studies</span>
          <span>Featured Projects</span>
          <span>Case studies</span>
          <span>Featured Projects</span>
        </div>
      </div>

      {/* Projects Grid */}

      {/* Projects top Grid */}
      <div className="flex flex-col md:grid md:grid-cols-3 h-full w-full">

        {/* Projects top left Grid */}
        <div className="col-span-1  md:col-span-2 md:row-span-2 h-full w-full">
          <div className="">
            <Link
              key={projects[0].id}
              href={projects[0].href}
              className={`project-card group relative block shadow-lg  ${projects[0].style}`}
            >
              {/* Media */}
              <div className="relative w-full h-72 md:h-96 overflow-hidden">
                <Image
                  src={projects[0].img}
                  alt={projects[0].title}
                  fill
                  className="object-cover  "
                />
                {projects[0].video && (
                  <video
                    playsInline
                    loop
                    muted
                    autoPlay
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    src={projects[0].video}
                  />
                )}
              </div>

              {/* Info */}
              <div className="md:absolute top-[100%] text-black p-6">
                <div className="text-sm opacity-70">{projects[0].nb}</div>
                <div className="text-2xl font-bold">{projects[0].title}</div>
                <div className="text-lg">{projects[0].subtitle}</div>
              </div>
            </Link>
          </div>

          <div className=" flex ">
            <div className="w-o md:w-full"></div>
            <Link
              key={projects[2].id}
              href={projects[2].href}
              className={`project-card group relative block w-full  ${projects[2].style}`}
            >
              {/* Media */}
              <div className="relative w-full h-72 md:h-96 overflow-hidden">
                <Image
                  src={projects[2].img}
                  alt={projects[2].title}
                  fill
                  className="object-cover "
                />
                {projects[2].video && (
                  <video
                    playsInline
                    loop
                    muted
                    autoPlay
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    src={projects[2].video}
                  />
                )}
              </div>

              {/* Info */}
              <div className="md:absolute top-[100%] text-black p-6 md:py-6">
                <div className="text-sm opacity-70">{projects[2].nb}</div>
                <div className="text-2xl font-bold">{projects[2].title}</div>
                <div className="text-lg">{projects[2].subtitle}</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Projects top right Grid */}
        <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-2 h-full w-full">
          <div className="h-full w-full">
            <Link
              key={projects[1].id}
              href={projects[1].href}
              className={`project-card  w-full h-auto flex   md:h-[70%]   ${projects[1].style}`}
            >
              {/* Media */}
              <div className="overflow-hidden">
                <Image
                  src={projects[1].img}
                  alt={projects[1].title}
                  fill
                  className="object-cover h-auto w-full  "
                />
                {projects[1].video && (
                  <video
                    playsInline
                    loop
                    muted
                    autoPlay
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    src={projects[1].video}
                  />
                )}
              </div>

              {/* Info */}
              <div className="md:absolute top-[100%] text-black p-6">
                <div className="text-sm opacity-70">{projects[1].nb}</div>
                <div className="text-2xl font-bold">{projects[1].title}</div>
                <div className="text-lg">{projects[1].subtitle}</div>
              </div>
            </Link>
          </div>
          {/* Projects bottom Grid */}
        </div>
      </div>

      {/* Projects bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-start-3  h-full w-full">
          <Link
            key={projects[3].id}
            href={projects[3].href}
            className={`project-card group relative block w-full h-full ${projects[3].style}`}
          >
            {/* Media */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden">
              <Image
                src={projects[3].img}
                alt={projects[3].title}
                fill
                className="object-cover"
              />
              {projects[3].video && (
                <video
                  playsInline
                  loop
                  muted
                  autoPlay
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  src={projects[3].video}
                />
              )}
            </div>

            {/* Info */}
            <div className="md:absolute top-[100%] text-black p-6 md:py-6">
              <div className="text-sm opacity-70">{projects[3].nb}</div>
              <div className="text-2xl font-bold">{projects[3].title}</div>
              <div className="text-lg">{projects[3].subtitle}</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom CTA */}

      <div className="absolute mt-16 px-4 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-3 text-lg font-medium group"
        >
          <span className="relative">
            Explore more
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all"></span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
