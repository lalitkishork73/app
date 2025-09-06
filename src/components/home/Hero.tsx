'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from "@/lib/SmoothScrollProvider";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollTo } = useLenis(heroRef)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.home-page-hero-word-top',
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1.2,
                    ease: 'power4.out',
                }
            )
            gsap.fromTo(
                '.home-page-hero-word-bottom',
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1.2,
                    ease: 'power4.out',
                }
            )

            gsap.fromTo(
                '.home-hero-bottom-line',
                { x: 400, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    delay: 0.8,
                    stagger: 0.25,
                    duration: 1,
                    ease: 'power3.out',
                }
            )


            if (window.innerWidth >= 780) {
                gsap.fromTo(
                    ".hero-video",
                    {
                        scale: 0.3, // smaller at start
                        y: 0, // initial position
                    },
                    {
                        scale: 1, // fits to screen
                        y: 30, // moves down after fitting
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: heroRef.current,
                            start: "0%", // when hero starts
                            end: "+=100%", // until hero scrolls out
                            scrub: true, // smooth scroll link
                            pin: true,
                            // markers: true, // for debugging, remove later
                        },
                    }
                );


                gsap.fromTo(
                    ".home-page-hero-word-top",
                    {x:0},
                    {
                        x:250,
                        ease: "power2.out",
                        scrollTrigger:{
                            trigger: heroRef.current,
                            start: "0%", // when hero starts
                            end: "+=100%", // until hero scrolls out
                            scrub: true, // smooth scroll link

                        }
                    }
                )
                gsap.fromTo(
                    ".home-page-hero-word-bottom",
                    {x:0},
                    {
                        x:-200,
                        ease: "power2.out",
                        scrollTrigger:{
                            trigger: heroRef.current,
                            start: "0%", // when hero starts
                            end: "+=100%", // until hero scrolls out
                            scrub: true, // smooth scroll link

                        }
                    }
                )

            }


        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            className="relative px-10 mx-auto my-[0.5px] h-screen flex justify-between items-center overflow-hidden "
        >
            {/* Hero Top */}

            {/* Background Video Layer */}


            {/* Text Layer */}
            <div className=" flex flex-col  w-full text-center justify-center items-center ">


                {/* Top Text */}
                <span className="md:-translate-x-0 md:-translate-y-3/4 home-page-hero-word-top md:mx-28 text-6xl sm:text-[12vw] font-medium md:text-left md:self-start  mix-blend-multiply">
                    INERTIA
                </span>

                <div className=" z-10 flex  justify-center items-center ">
                    <video
                        src="https://player.vimeo.com/progressive_redirect/playback/1081760237/rendition/1080p/file.mp4?loc=external&log_user=0&signature=741bda2d968294df1e81eb1c5a920f1df0d2562573fde7bd94a28cf97ef1177e"
                        playsInline
                        muted
                        loop
                        autoPlay
                        className="hero-video md:absolute md:top-1/2 md:left-1/2 
               w-auto min-w-full h-auto min-h-full 
               md:-translate-x-1/2 md:-translate-y-1/2 
               md:object-cover  mix-blend-multiply"
                    />
                </div>
                {/* Spacer pushes STUDIOS to bottom */}
                {/* <div className="flex-grow " /> */}

                {/* Bottom Text */}
                <span className="md:-translate-x-0 md:translate-y-3/4 home-page-hero-word-bottom md:mx-28 text-6xl sm:text-[12vw] font-medium md:text-right md:self-end">
                    STUDIOS
                </span>

                {/* Hero Bottom */}
                <div className="md:absolute md:bottom-1/2 md:z-9 w-full px-10">
                    <h1 className="flex w-full flex-col md:flex-row text-md md:text-md font-medium uppercase">
                        <div className="w-full text-center md:text-left home-hero-bottom-line ">
                            A creative <strong>CGI studio</strong>
                        </div>
                        <div className="w-full text-center md:text-right home-hero-bottom-line">
                            Setting brands <strong>in motion</strong>
                        </div>
                    </h1>
                </div>
            </div>





        </section>
    )
}

export default Hero
