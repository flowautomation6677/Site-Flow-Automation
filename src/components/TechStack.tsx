import React from "react";

const technologies = [
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "OpenAI",
    "Google Cloud",
    "Meta Ads",
];

export default function TechStack() {
    return (
        <section className="py-24 bg-flow-dark border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="font-reachfly text-2xl md:text-3xl text-flow-text text-center uppercase tracking-widest">
                    Nossa Infraestrutura
                </h2>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative flex overflow-x-hidden group">

                {/* Left/Right Fade Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-flow-dark to-transparent pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-flow-dark to-transparent pointer-events-none" />

                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
                    {/* Duplicate the list twice for seamless infinite scrolling */}
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <span
                            key={index}
                            className="font-gilroy text-2xl md:text-4xl font-bold text-[#333] hover:text-white transition-colors duration-300 cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Ensure you have added the keyframes and animation in tailwind.config.ts or globals.css:
// @theme {
//   --animate-marquee: marquee 25s linear infinite;
//   @keyframes marquee {
//     0% { transform: translateX(0%); }
//     100% { transform: translateX(-33.33%); }
//   }
// }
