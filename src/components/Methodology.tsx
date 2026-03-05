"use client";

import { motion } from "framer-motion";
import { Database, Cpu, DollarSign } from "lucide-react";

const methodologyData = [
    {
        icon: Database,
        title: "Aquisição de Dados",
        description: "Google & Meta Ads geridos com scripts de automação.",
        delay: 0.2
    },
    {
        icon: Cpu,
        title: "Inteligência Proprietária",
        description: "Aplicações em Next.js e Agentes de IA que qualificam leads 24/7.",
        delay: 0.4
    },
    {
        icon: DollarSign,
        title: "Engenharia de PNL",
        description: "Copywriting neuro-linguístico focado em fechamento.",
        delay: 0.6
    }
];

export default function Methodology() {
    return (
        <section id="metodologia" className="py-32 px-6 bg-flow-dark relative flex flex-col items-center">
            {/* Container */}
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-reachfly text-4xl md:text-5xl text-flow-text tracking-widest uppercase mb-4">
                        A Engenharia do Crescimento
                    </h2>
                    <div className="w-24 h-[1px] bg-flow-wine mx-auto opacity-50" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full">
                    {methodologyData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-[#0A0A0A] border border-[#1a1a1a] p-10 rounded-lg flex flex-col items-center text-center transition-all duration-500 hover:border-flow-wine hover:-translate-y-2 h-full flex-grow overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: item.delay }}
                        >
                            {/* Subtle Wine Glow Background on Hover */}
                            <div className="absolute inset-0 bg-flow-wine/0 group-hover:bg-flow-wine/5 transition-colors duration-500 mix-blend-screen pointer-events-none" />

                            {/* Bottom line accent */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-flow-wine opacity-0 group-hover:opacity-100 to-transparent transition-opacity duration-500" />


                            <div className="flex-grow flex flex-col items-center justify-start h-full">
                                <div className="w-16 h-16 rounded-full bg-[#111] border border-[#222] flex items-center justify-center mb-8 group-hover:border-flow-wine/50 group-hover:shadow-[0_0_20px_rgba(121,0,40,0.3)] transition-all duration-500 mt-auto">
                                    <item.icon className="w-8 h-8 text-flow-text-secondary group-hover:text-flow-wine transition-colors duration-500" />
                                </div>

                                <h3 className="font-reachfly text-xl md:text-2xl text-flow-text uppercase tracking-wider mb-4 group-hover:text-white transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="font-gilroy text-flow-text-secondary text-lg leading-relaxed font-light mt-auto">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
