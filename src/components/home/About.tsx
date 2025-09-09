"use client";
import { useRef, useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

interface AboutImage {
  src: string;
  alt: string;
}

const aboutImages: AboutImage[] = [
  {
    src: "https://images.prismic.io/inertia-website/Z3Zh9JbqstJ98-Gm_01.png?auto=format,compress&rect=16,0,1249,720&w=565&h=325",
    alt: "3D shoes Puma Running",
  },
  {
    src: "https://images.prismic.io/inertia-website/Z-blZndAxsiBwEoa_Corona_Extra_SH300_V002_rgb_0096.png?auto=format,compress&rect=23,0,1873,1080&w=565&h=325",
    alt: "Corona Extra CGI",
  },
  {
    src: "https://images.prismic.io/inertia-website/Z8pIjxsAHJWomNYX_23013_K18_HairFlower_001_004_2_0073_2.png?auto=format,compress&rect=23,0,1873,1080&w=565&h=325",
    alt: "K18 Expression",
  },
  {
    src: "https://images.prismic.io/inertia-website/Z8sa9hsAHJWomPMI_Tiffany_Lock_R%26D_EH_v052_v2-00200-.png?auto=format,compress&rect=0,375,2560,1476&w=565&h=325",
    alt: "Tiffany & Co",
  },
  {
    src: "https://images.prismic.io/inertia-website/Z8oPqxsAHJWomNGd_DeviateNitro3_EH_v007.jpg?auto=format,compress&rect=16,0,1249,720&w=565&h=325",
    alt: "Puma Nitro",
  },
  {
    src: "https://images.prismic.io/inertia-website/Z8o7rxsAHJWomNVi_Inertia-Studios_PS5_Featured-02.jpg?auto=format,compress&rect=23,0,1873,1080&w=565&h=325",
    alt: "Sony Playstation PS5",
  },
];

export default function About () {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const tl = useMemo(() => gsap.timeline({ paused: true }), []);
  const [suffledImages, setSuffledImages] = useState(0);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-image", {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".about-tagline div", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    // gsap.to(imageRef.current, {
    //   scale: 1.2, // Scale up the image by 20%
    //   duration: 0.5,
    //   paused: true, // Don't play on load
    // });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e: any) => {
    console.log(e.clientX, e.clientY, "Enter")
  };

  const handleMouseLeave = (e: any) => {
    console.log(e.clientX, e.clientY, "Leave")
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    const image = imageRef.current;
    if (!image) return;

    const rect = image.getBoundingClientRect();
    const offsetX = e.clientX - rect.width / 2;
    const offsetY = e.clientY - rect.height / 2;
    setSuffledImages(Math.floor(Math.random() * aboutImages.length));
    const newIndex = Math.floor(Math.random() * aboutImages.length);


    const imgEl = image.querySelector("img");
    if (!imgEl) return;


    gsap.to(image, {
      left: offsetX,
      top: offsetY,
      duration: 0.2,
      ease: "bounce.inOut"
    });

    gsap.to(imgEl, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        imgEl.setAttribute("src", aboutImages[newIndex].src);
        imgEl.setAttribute("alt", aboutImages[newIndex].alt);

        gsap.to(imgEl, {
          opacity: 1,
          scale: 1.1,
          duration: 0.6,
          ease: "power3.out",
        });
      },
    });


  };


  return (
    <section
      ref={sectionRef}
      className=" flex flex-col justify-center items-center md:pb-[19.08svw] md:pt-[25.44svw]  px-6 md:px-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="w-full md:relative  flex flex-col justify-center items-center  " >
        {/* Headings */}
        <div className="md:absolute  md:top-0 text-center h-auto about-heading">
          <p className=" inline-block pb-24 m-auto text-sm uppercase tracking-widest ">
            we are <strong>inertia</strong>
          </p>
          <div className=" w-full block md:relative text-center text-3xl md:text-9xl font-medium tracking-tight overflow-hidden ">
            <h1>HELPING BRANDS</h1>
            <h1>MOVE THE WORLD</h1>
            <h1>FORWARD</h1>
          </div>
        </div>

        {/* Images Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {aboutImages.map((img, i) => (
            <div
              key={i}
              className="md:relative w-full h-48 md:h-64 overflow-hidden rounded-xl about-image"
            >
              <img
               
                
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className=" md:absolute md:inset-0 mt-10 w-full flex flex-col md:flex-row justify-center items-center md:justify-between font-semibold  about-tagline">
          <div className="text-center md:text-left w-full">
            <p>
              <strong>CULTURE</strong> IN MOTION
            </p>
          </div>
          <div className="w-full text-center md:text-right my-6 md:my-0">
            <p>
              <strong>IMPACT</strong> BY DESIGN
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center inline-block md:absolute md:bottom-0 w-full ">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-lg font-medium group"
          >
            <span className="relative">
              Let’s make something unforgettable
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
      </div>
      <div
        className="w-[200px] h-[150px]  rounded-full fixed"
        ref={imageRef}
      >
        {/* {aboutImages.map((img, i) => ( */}
        <div
          // key={i}
          className="md:relative w-full h-full overflow-hidden about-image"
        >
          <img
            // src={aboutImages[suffledImages].src}
            // alt={aboutImages[suffledImages].alt}

            
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        {/* ))} */}
      </div>
    </section>
  );
}
