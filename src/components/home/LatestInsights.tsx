"use client";
import Image from "next/image";
import Link from "next/link";

type Insight = {
    category: string;
    date: string;
    title: string;
    href: string;
    image: string;
    alt: string;
};

const insights: Insight[] = [
    {
        category: "Awards",
        date: "7 Apr 25",
        title: "Toblerone (Platinum Award) - A New Dimension of Storytelling",
        href: "/insights/toblerone-platinum",
        image:
            "https://images.prismic.io/inertia-website/aCIVjCdWJ-7kR8rY_Toblerone-3D-Billboard-MUSE-AWARDScopy.jpg?auto=format,compress&rect=134,0,1173,810&w=637&h=440",
        alt: "Toblerone 3D Billboard",
    },
    {
        category: "Awards",
        date: "4 Apr 25",
        title: "Our Marin Bikes Product Film wins x2 Gold at the MUSE Awards",
        href: "/insights/marin-bikes-muse-awards",
        image:
            "https://images.prismic.io/inertia-website/aCICBydWJ-7kR8UO_Marin-Bikes-by-Inertia-Studios_MUSE.jpg?auto=format,compress&rect=0,3,2000,1381&w=637&h=440",
        alt: "Marin Bikes Muse Awards",
    },
    {
        category: "News",
        date: "14 Mar 25",
        title: "Gemma Garman Steps Up as Executive Producer at Inertia Studios",
        href: "/insights/meet-gemma-garman-exec-producer-inertia",
        image:
            "https://images.prismic.io/inertia-website/aCH9fidWJ-7kR8Od_Gemma-Garman-Inertia-Studios-Exec.jpg?auto=format,compress&rect=0,126,2000,1381&w=637&h=440",
        alt: "Gemma Garman",
    },
];

export default function LatestInsights () {
    return (
        <section className="insights grid-padding py-16">
            {/* Top Section */}
            <div className="insights-top flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-bold">
                        <span className="inline-block">Ideas</span>{" "}
                        <span className="inline-block">in</span>{" "}
                        <span className="inline-block">motion</span>
                    </h2>
                    <p className="mt-2 text-gray-500">
                        Explore our latest research, creative experiments, and studio news.
                    </p>
                </div>
                <div className="uppercase tracking-widest text-sm text-gray-400">
                    studio insights
                </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left – big items */}
                <div className="space-y-12">
                    {insights.map((item, i) => (
                        <div key={i} className="perception-item">
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>{item.category}</span>
                                <span>{item.date}</span>
                            </div>
                            <div className="relative overflow-hidden rounded-xl">
                                <Link href={item.href}>
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={637}
                                        height={440}
                                        className="w-full h-auto object-cover transform transition duration-700 hover:scale-110"
                                    />
                                </Link>
                            </div>
                            <div className="mt-2">
                                <Link
                                    href={item.href}
                                    className="text-lg font-semibold hover:underline"
                                >
                                    {item.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right – inline links */}
                <div className="flex flex-col gap-6 justify-between">
                    {insights.map((item, i) => (
                        <div key={i} className="inline-project">
                            <div className="uppercase text-xs text-gray-500 mb-1">
                                {item.category}
                            </div>
                            <Link
                                href={item.href}
                                className="text-base font-medium hover:underline"
                            >
                                {item.title}
                            </Link>
                        </div>
                    ))}

                    {/* See all insights */}
                    <Link
                        href="/insights"
                        className="inline-flex items-center gap-2 text-blue-600 hover:underline mt-6"
                    >
                        <span>See all Insights</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
