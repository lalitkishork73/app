"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type LenisContextType = {
    scrollTo: (target: string | number | HTMLElement) => void;
};

const LenisContext = createContext<LenisContextType | null>(null);

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smooth: true,
            smoothTouch: false,
        });
        lenisRef.current = lenis;

        function raf (time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        return () => {
            lenis.destroy();
            gsap.ticker.remove(() => { });
        };
    }, []);

    const scrollTo = (target: string | number | HTMLElement) => {
        lenisRef.current?.scrollTo(target);
    };

    return (
        <LenisContext.Provider value={{ scrollTo }}>
            {children}
        </LenisContext.Provider>
    );
};

export const useLenis = () => {
    const context = useContext(LenisContext);
    if (!context) throw new Error("useLenis must be used within SmoothScrollProvider");
    return context;
};
