'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'

interface AboutImage {
    src: string
    alt: string
}

const aboutImages: AboutImage[] = [
    {
        src: 'https://images.prismic.io/inertia-website/Z3Zh9JbqstJ98-Gm_01.png?auto=format,compress&rect=16,0,1249,720&w=565&h=325',
        alt: '3D shoes Puma Running',
    },
    {
        src: 'https://images.prismic.io/inertia-website/Z-blZndAxsiBwEoa_Corona_Extra_SH300_V002_rgb_0096.png?auto=format,compress&rect=23,0,1873,1080&w=565&h=325',
        alt: 'Corona Extra CGI',
    },
    {
        src: 'https://images.prismic.io/inertia-website/Z8pIjxsAHJWomNYX_23013_K18_HairFlower_001_004_2_0073_2.png?auto=format,compress&rect=23,0,1873,1080&w=565&h=325',
        alt: 'K18 Expression',
    },
    {
        src: 'https://images.prismic.io/inertia-website/Z8sa9hsAHJWomPMI_Tiffany_Lock_R%26D_EH_v052_v2-00200-.png?auto=format,compress&rect=0,375,2560,1476&w=565&h=325',
        alt: 'Tiffany & Co',
    },
    {
        src: 'https://images.prismic.io/inertia-website/Z8oPqxsAHJWomNGd_DeviateNitro3_EH_v007.jpg?auto=format,compress&rect=16,0,1249,720&w=565&h=325',
        alt: 'Puma Nitro',
    },
    {
        src: 'https://images.prismic.io/inertia-website/Z8o7rxsAHJWomNVi_Inertia-Studios_PS5_Featured-02.jpg?auto=format,compress&rect=23,0,1873,1080&w=565&h=325',
        alt: 'Sony Playstation PS5',
    },
]

export default function About () {
    const sectionRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-heading', {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            })

            gsap.from('.about-image', {
                opacity: 0,
                y: 80,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            })

            gsap.from('.about-tagline div', {
                opacity: 0,
                y: 20,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 px-6 md:px-12"
        >
            {/* Headings */}
            <div className="text-center mb-12 about-heading">
                <p className="text-sm uppercase tracking-widest mb-2">
                    we are <strong>inertia</strong>
                </p>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    HELPING BRANDS <br />
                    MOVE THE WORLD <br />
                    FORWARD
                </h2>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {aboutImages.map((img, i) => (
                    <div key={i} className="relative w-full h-48 md:h-64 overflow-hidden rounded-xl about-image">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Tagline */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xl md:text-2xl font-semibold mb-12 about-tagline">
                <div>
                    <p>
                        <strong>CULTURE</strong> IN MOTION
                    </p>
                </div>
                <div>
                    <p>
                        <strong>IMPACT</strong> BY DESIGN
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}
