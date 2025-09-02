'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.home-page-hero-word',
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1.2,
                    ease: 'power4.out',
                }
            )

            gsap.fromTo(
                '.home-hero-bottom-line',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.8,
                    stagger: 0.25,
                    duration: 1,
                    ease: 'power3.out',
                }
            )
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            className="relative w-full h-screen flex flex-col justify-between items-center overflow-hidden mt-22 "
        >
            {/* Hero Top */}
            <div className="relative z-10 flex flex-col items-center justify-center h-2/3">
                <div className="text-center space-y-2">
                    <div>
                        <span className="home-page-hero-word block text-6xl md:text-8xl font-bold">
                            INERTIA
                        </span>
                    </div>
                    <div>
                        <span className="home-page-hero-word block text-6xl md:text-8xl font-bold">
                            STUDIOS
                        </span>
                    </div>
                </div>

                {/* Background Video */}
                <div className="absolute  top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    <video
                        src="https://player.vimeo.com/progressive_redirect/playback/1081760237/rendition/1080p/file.mp4?loc=external&log_user=0&signature=741bda2d968294df1e81eb1c5a920f1df0d2562573fde7bd94a28cf97ef1177e"
                        playsInline
                        muted
                        loop
                        autoPlay
                        className="w-[35vw] object-cover"
                    />
                </div>
            </div>

            {/* Hero Bottom */}
            <div className="text-center pb-16 z-10">
                <h1 className="flex text-2xl md:text-4xl font-medium space-y-2">
                    <div className="home-hero-bottom-line">
                        A creative <strong>CGI studio</strong>
                    </div>
                    <div className="home-hero-bottom-line">
                        Setting brands <strong>in motion</strong>
                    </div>
                </h1>
            </div>
        </section>
    )
}

export default Hero
