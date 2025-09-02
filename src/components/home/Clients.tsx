'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const clientLogos = [
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6Y8D5bqstJ9-YAP_Activision.svg',
        alt: 'Activision',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6Y8oJbqstJ9-YA4_AxelArigato.svg',
        alt: 'Axel Arigato',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6Y9aZbqstJ9-YBZ_Playstation.svg',
        alt: 'Playstation',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6ZBSZbqstJ9-YD6_Tiffany.svg',
        alt: 'Tiffany & Co.',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6ZRQZbqstJ9-YKd_Puma.svg',
        alt: 'Puma',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6ZACJbqstJ9-YDa_Rayban.svg',
        alt: 'Ray-Ban',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6ZEhpbqstJ9-YFX_Specialized.svg',
        alt: 'Specialized',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6Y-OZbqstJ9-YBr_LouisVuitton.svg',
        alt: 'Louis Vuitton',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6ZQrpbqstJ9-YKZ_JohnnieWalker-09.svg',
        alt: 'Johnnie Walker',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6Y-eZbqstJ9-YCN_Nike.svg',
        alt: 'Nike',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6Y-rJbqstJ9-YCX_Paramount.svg',
        alt: 'Paramount',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6ZBo5bqstJ9-YER_Zegna.svg',
        alt: 'Zegna',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6ZFUJbqstJ9-YFq_Moet%26Chandon.svg',
        alt: 'Moët & Chandon',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6Y5bJbqstJ9-X-C_Spotify.svg',
        alt: 'Spotify',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6ZB4ZbqstJ9-YEU_Meta.svg',
        alt: 'Meta',
    },
    {
        src: 'https://inertia-website.cdn.prismic.io/inertia-website/Z6ZEIZbqstJ9-YFO_Lego.svg',
        alt: 'Lego',
    },
]

export default function Clients () {
    const marqueeRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!marqueeRef.current) return

        const ctx = gsap.context(() => {
            gsap.to('.client-logo-row', {
                xPercent: -50,
                ease: 'none',
                repeat: -1,
                duration: 30,
            })
        }, marqueeRef)

        return () => ctx.revert()
    }, [])

    // Duplicate logos to make infinite loop effect
    const logos = [...clientLogos, ...clientLogos]

    return (
        <section className="relative w-full py-16 overflow-hidden bg-white">
            <div ref={marqueeRef} className="flex w-[200%] client-logo-row">
                {logos.map((logo, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center w-48 h-28 mx-6 flex-shrink-0"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={180}
                            height={100}
                            className="object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
