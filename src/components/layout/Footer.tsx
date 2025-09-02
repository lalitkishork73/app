'use client'
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "@/lib/SmoothScrollProvider";
import { ArrowRight, ArrowUp } from 'lucide-react';

type FooterProps = {
  showContactCTA?: boolean; // controls Footer Top visibility
};

// Shared footer data
const footerData = {
  infoBlocks: [
    {
      title: "Hello",
      order: 1,
      className: "md:px-5 py-5",
      content: (
        <>
          <Link
            href="mailto:hello@weareinertia.com"
            className=" block mb-2 lowercase font-semibold break-words"
          >
            hello@weareinertia.com
          </Link>
          <p className="font-semibold ">
            17 Willow Street, <br /> London, EC2A 4BH
          </p>
        </>
      ),
    },

    {
      title: "Social",
      className: "md:px-5 py-5",
      order: 2,
      links: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/inertia_studio/",
          target: "_blank",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/weareinertia/",
          target: "_blank",
        },
        {
          label: "Behance",
          href: "https://www.behance.net/inertiastudio",
          target: "_blank",
        },
      ],
    },
    {
      title: "Other",
      order: 3,
      className: "lg:pl-16 2xl:pl-42 font-semibold py-5",
      links: [
        { label: "Supplier T&C's", href: "/supplier-terms-and-conditions" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Opening Hours",
      className: "md:px-5 py-5",
      order: 4,
      content: (
        <p className="font-semibold">
          Monday to Friday <br /> 9AM – 6PM
        </p>
      ),
    },
  ],
  logo: {
    src: "https://inertia-website.cdn.prismic.io/inertia-website/Z2RC1ZbqstJ98sBQ_logo.svg",
    alt: "logo Inertia",
  },
  credits: {
    text: "All content ©",
    text1: "Inertia Studios Ltd 2025",
    websiteBy: { text: "Okey Studio", href: "https://okeystudio.com" },
  },
};

const Footer = ({ showContactCTA = false }: FooterProps) => {
  const { scrollTo } = useLenis();

  return (
    <footer id="main-footer" className="flex flex-col px-6 py-12 md:px-8 lg:px-10 bg-black text-white md:bg-white md:text-black">
      {/* ===== Footer Top ===== */}
      <div
        className={`footer-top flex flex-col md:flex-row justify-between items-start gap-6 mb-12 transition-all duration-500 ${!showContactCTA ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="footer-contact-text w-full flex flex-col">
          <div className="uppercase font-bold">(Contact)</div>
          <div className="text-transparent">|</div>
          <h2 className=" text-[7vw] sm:text-[8vw] md:text-[5vw] font-medium  uppercase">
            <div className="flex leading-tight">
              Ready to discuss
            </div>
            <div className="flex md:justify-evenly leading-tight">
              your next project?
            </div>
          </h2>
        </div>
        <Link
          href="/contact"
          className=" w-[10vw] max-w-[9vw] md:max-w-[10vw] "
        >
          <div className="relative aspect-square w-[8vw] h-[8vw]">
            <Image
              src="https://www.weareinertia.com/img/border.svg"
              alt="square border"
              fill
              className="object-contain pointer-events-none invert md:invert-0"
              sizes="(max-width: 768px)"
            />
            <Image
              src="https://www.weareinertia.com/img/arrow.svg"
              alt="arrow"
              fill
              className="object-contain pointer-events-none invert md:invert-0 rotate-45"
              sizes="(max-width: 768px)"
            />
            {/* <ArrowRight className="absolute inset-0 w-full h-full font-light rotate-45 transition-transform group-hover:scale-110" /> */}
          </div>
        </Link>

      </div>

      <div className="border-b mb-8"></div>

      {/* ===== Footer Center ===== */}
      <div className="footer-flex flex-wrap justify-start center flex flex-col gap-12 mb-12">
        {/* Work With Us CTA + Info Blocks */}
        <div className="flex  flex-col md:flex-row">
          <div className="w-full">
            <Link href="/contact" className="flex items-center  gap-3 group">
              <div className="relative w-7 h-7 flex items-center justify-center">

                <Image
                  src="https://www.weareinertia.com/img/border.svg"
                  alt="square border"
                  fill={true}
                  className="object-contain pointer-events-none invert md:invert-0 w-7 h-7"
                  sizes="(max-width: 768px)"
                />
                <ArrowRight className="absolute w-6 h-6 inset-0 " />

              </div>
              <span className="uppercase font-semibold text-lg tracking-tighter ">
                Work with us
              </span>
            </Link>
          </div>

          <div className="flex md:flex-wrap flex-col md:flex-row justify-center md:justify-start mb-3 w-full text-sm uppercase">
            {footerData.infoBlocks.map(({ title, links, content, className, order }) => (
              <div key={order} className={`block md:w-[33.3%] ${className} `}>
                <p className="font-bold text-lg mb-2">{title}</p>
                {links ? (
                  <ul className="space-y-1 font-semibold">
                    {links.map(({ label, href, }) => (
                      <li key={label}>
                        <Link
                          href={href}
                          // target={target}
                          className="transition "
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  content
                )}
              </div>
            ))}
          </div>
        </div>



        {/* Empty column to balance grid */}
        <div></div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="footer-bottom flex flex-col flx-wrap md:flex-row justify-between items-start md:items-center gap-6">
        {/* Logo Left (on mobile already above, keep for layout consistency) */}
        <div className="w-full md:block">
          <Image
            width={167}
            height={35}
            src={footerData.logo.src}
            alt={footerData.logo.alt}
            className="hover:opacity-80 transition invert md:invert-0"
          />
        </div>

        {/* Right Side */}
        <div className=" flex flex-row justify-between items-start  md:items-end w-full font-semibold">
          <div className="flex flex-col md:flex-row md:items-end md:w-[66.6%]">

            <p className=" md:px-2 md:w-1/2 word-break">{footerData.credits.text} {footerData.credits.text1}</p>
            <p className=" md:w-1/2 md:px-2 hidden md:block">
              Website by{" "}
              <Link
                href={footerData.credits.websiteBy.href}
                target="_blank"
                className=" hover:underline"
              >
                {footerData.credits.websiteBy.text}
              </Link>
            </p>
          </div>
          <div className="flex md:items-center gap-3 cursor-pointer group md:w-[33.3%] md:px-2">
            <div className="w-full"></div>
            <div className="w-full flex  justify-end"
              onClick={() => {
                scrollTo(0)
              }}>

              <span className="uppercase tracking-wide hidden md:block "
              >
                Back to top
              </span>
              <ArrowUp className="transform bg-white text-black md:rotate-90 group-hover:translate-y-[-3px] transition-transform duration-300" />

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
