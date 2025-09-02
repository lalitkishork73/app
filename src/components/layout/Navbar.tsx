'use client'
import Image from "next/image";
import Link from "next/link";
import { AlignJustify, ArrowRight, X } from 'lucide-react';
import { useState, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Navigation items object
const navItems = [
  { label: "work", href: "/work" },
  { label: "about", href: "/about" },
  { label: "capabilities", href: "/capabilities" },
  { label: "insights", href: "/insights" },
  { label: "contact", href: "/contact", isCTA: true },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const listRefs = useRef<HTMLLIElement[]>([]);

  gsap.registerPlugin(useGSAP);

  // Scoped GSAP animation
  useGSAP(
    () => {
      if (toggle) {
        // Slide overlay in from right
        gsap.to(menuRef.current, { x: 0, duration: 0.6, ease: "power3.out" });

        // Reset + stagger list items
        gsap.set(listRefs.current, { opacity: 0, x: 50 });
        gsap.to(listRefs.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          delay: 0.6,
          ease: "power3.out",
        });
      } else {
        // Slide overlay out
        gsap.to(menuRef.current, { x: "100%", duration: 0.6, ease: "power3.in" });
      }
    },
    { dependencies: [toggle], scope: menuRef } // optimized re-run
  );

  const openMenu = () => setToggle((prev) => !prev);

  return (
    <header className="w-full px-12 pt-12 flex justify-between fixed top-0 left-0 z-50">
      {/* Left Logo */}
      <div className="flex items-end z-50 mix-blend-difference">
        <Link href="/" passHref>
          <Image
            width={142}
            height={30}
            alt="logo Inertia"
            src="https://inertia-website.cdn.prismic.io/inertia-website/Z2RC1ZbqstJ98sBQ_logo.svg"
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* Right Navigation */}
      <div className="flex items-end gap-8">
        {/* Desktop Nav */}
        <nav className="hidden md:block mix-blend-difference">
          <ul className="flex items-end gap-6 text-sm font-semibold uppercase tracking-wide">
            {navItems.map(({ label, href, isCTA }) => (
              <li key={label}>
                {isCTA ? (
                  <Link
                    href={href}
                    className="relative flex items-center gap-2 rounded-full border border-white/30 md:ml-10 md:pl-10 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 rotate-45" />
                    <span className="uppercase text-sm tracking-wider font-bold">
                      {label}
                    </span>
                  </Link>
                ) : (
                  <Link href={href}>
                    <span className="relative group cursor-pointer border-b border-transparent hover:border-white transition-all">
                      {label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden cursor-pointer ml-4">
          {toggle ? (
            <>
              <X onClick={openMenu} className="relative z-50" />
              <Image
                src="https://www.weareinertia.com/img/border.svg"
                alt="square border"
                fill
                className="absolute inset-0 w-5 h-5 "
                sizes="(max-width: 768px)"
              />
            </>
          ) : (
            <AlignJustify onClick={openMenu} className=" " />
          )}

          {/* Mobile Menu Overlay */}
          <div
            ref={menuRef}
            className="fixed top-0 right-0 w-screen h-screen bg-[#e7e7e7] z-40 p-12 transform translate-x-full flex flex-col justify-between"
          >
            <ul className="flex flex-col gap-6 text-3xl pt-36 font-semibold uppercase tracking-wide">
              {navItems.map(({ label, href, isCTA }, i) => (
                <li
                  key={label}
                  ref={(el) => (listRefs.current[i] = el!)}
                  className="border-b-2"
                >
                  <Link href={href}>
                    <span className="uppercase tracking-wider font-bold">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p><strong>Hello</strong></p>
              <p>
                <a href="mailto:hello@weareinertia.com">hello@weareinertia.com</a>
              </p>
              <p>17 Willow Street, London, EC2A 4BH</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
