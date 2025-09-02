'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
    id: string
    href: string
    title: string
    subtitle: string
    nb: string
    img: string
    video?: string
}

const projects: Project[] = [
    {
        id: '01',
        href: '/work/puma-fast-rb',
        title: 'Puma Running',
        subtitle: 'Fast RB',
        nb: '01',
        img: 'https://images.prismic.io/inertia-website/Z8RlyxsAHJWomB5O_01_Extended.png?auto=format,compress&rect=0,375,3200,2450&w=640&h=490',
        video: 'https://player.vimeo.com/progressive_redirect/playback/1044635683/rendition/1080p/file.mp4',
    },
    {
        id: '02',
        href: '/work/jw-levels-of-liason',
        title: 'Johnnie Walker',
        subtitle: 'Levels of Liason',
        nb: '02',
        img: 'https://images.prismic.io/inertia-website/Z8ruwhsAHJWomOsK_TP_ThirdFloor_JW_R%26D_07_0191.png?auto=format,compress&rect=0,252,1040,796&w=640&h=490',
        video: 'https://player.vimeo.com/progressive_redirect/playback/1047200435/rendition/1080p/file.mp4',
    },
    {
        id: '03',
        href: '/work/tiffany-with-love',
        title: 'Tiffany & Co',
        subtitle: 'With love, since 1837',
        nb: '03',
        img: 'https://images.prismic.io/inertia-website/Z8sb6BsAHJWomPMg_Tiffany2.png?auto=format,compress&rect=255,0,1411,1080&w=640&h=490',
        video: 'https://player.vimeo.com/progressive_redirect/playback/1063615745/rendition/1080p/file.mp4',
    },
    {
        id: '04',
        href: '/work/lv-x-nike',
        title: 'LV X NIKE',
        subtitle: 'Dream now',
        nb: '04',
        img: 'https://images.prismic.io/inertia-website/Z8sSWhsAHJWomPHn_Header-image_LouisVuittonxNike_InertiaStudios.jpg?auto=format,compress&rect=255,0,1411,1080&w=640&h=490',
        video: 'https://player.vimeo.com/progressive_redirect/playback/782894191/rendition/1080p/file.mp4',
    },
]

export default function Projects () {
    const sectionRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.project-card',
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.25,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="home-projects relative w-full py-24 px-6 md:px-12"
        >
            {/* Banner Text (looped span style) */}
            <div className="overflow-hidden whitespace-nowrap text-3xl md:text-5xl font-bold text-gray-300 mb-12">
                <div className="animate-marquee flex gap-8">
                    <span>Case studies</span>
                    <span>Featured Projects</span>
                    <span>Case studies</span>
                    <span>Featured Projects</span>
                    <span>Case studies</span>
                    <span>Featured Projects</span>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj) => (
                    <Link
                        key={proj.id}
                        href={proj.href}
                        className="project-card group relative block overflow-hidden rounded-2xl shadow-lg"
                    >
                        {/* Media */}
                        <div className="relative w-full h-72 md:h-96 overflow-hidden">
                            <Image
                                src={proj.img}
                                alt={proj.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {proj.video && (
                                <video
                                    playsInline
                                    loop
                                    muted
                                    autoPlay
                                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    src={proj.video}
                                />
                            )}
                        </div>

                        {/* Info */}
                        <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
                            <div className="text-sm opacity-70">#{proj.nb}</div>
                            <div className="text-2xl font-bold">{proj.title}</div>
                            <div className="text-lg">{proj.subtitle}</div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}
