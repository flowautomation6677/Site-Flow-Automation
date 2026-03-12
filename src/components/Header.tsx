"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? "bg-flow-dark/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Left */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-reachfly text-2xl text-flow-text tracking-widest uppercase">
                            FLOW
                        </span>
                        <span className="w-2 h-2 rounded-full bg-flow-wine animate-pulse" />
                    </Link>
                </div>

                {/* Nav Center/Right */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Metodologia", "Cases", "Contato"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-gilroy text-flow-text-secondary hover:text-flow-text transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA Right */}
                <div className="flex items-center">
                    <a href="https://wa.me/5521990149660?text=Olá! Vim pelo site e gostaria de agendar um diagnóstico." target="_blank" rel="noopener noreferrer">
                        <button className="relative px-6 py-2.5 bg-transparent border border-flow-wine/50 text-flow-text rounded-sm overflow-hidden group transition-all duration-300 font-gilroy text-sm font-medium">
                            <span className="relative z-10 transition-colors group-hover:text-white">Agendar Diagnóstico</span>
                            <div className="absolute inset-0 bg-flow-wine/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                        </button>
                    </a>
                </div>
            </div>
        </motion.header>
    );
}
