"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const cases = [
    {
        id: 1,
        title: "Fintech Pessoal via WhatsApp",
        stack: "Node.js | Oracle Cloud | WhatsApp API",
        challenge: "O cliente tinha dados financeiros descentralizados e perdia controle de fluxo de caixa.",
        solution: "Desenvolvemos uma arquitetura serverless que processa linguagem natural via WhatsApp, categorizando gastos automaticamente em tempo real.",
        result: "Retenção de usuários aumentada em 40% e automação de 100% da entrada de dados.",
        mediaType: "video",
        // Temporary placeholder public video loop
        mediaSrc: "https://cdn.dribbble.com/users/1568450/screenshots/11267807/media/58000787e97d192bcab08ec8bb6e28fe.mp4"
    },
    {
        id: 2,
        title: "Client Peças Hidráulicas",
        stack: "Next.js | Stripe | Meta Ads API",
        challenge: "Lançamentos de produtos com alto tráfego derrubavam o servidor e perdiam vendas por demora no checkout.",
        solution: "Gestão de tráfego integrada a estoque. Otimização de campanhas via script, resultando em ROI maximizado para nichos industriais.",
        result: "Tempo de carregamento reduzido em 85%. Receita recuperada em campanhas subiu 3x.",
        mediaType: "image",
        // Temporary placeholder image 
        mediaSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Advocacia Previdenciária B2B",
        stack: "Next.js | SEO Técnico | Framer Motion",
        challenge: "O time comercial gastava 70% do tempo filtrando leads frios que não tinham o orçamento necessário.",
        solution: "Design focado em autoridade B2B. SEO técnico para captação de leads qualificados no setor jurídico.",
        result: "Taxa de conversão de reunião para venda aumentou 60%. Custo de Aquisição (CAC) caiu pela metade.",
        mediaType: "image",
        // Temporary placeholder image
        mediaSrc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop"
    }
];

export default function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const activeIndex = useTransform(scrollYProgress,
        [0, 0.4, 0.5, 0.8, 0.9, 1],
        [0, 0, 1, 1, 2, 2]
    );

    const [currentRenderedIndex, setCurrentRenderedIndex] = useState(0);

    activeIndex.on("change", (v) => setCurrentRenderedIndex(Math.round(v)));

    return (
        <section id="cases" className="relative bg-[#020202] py-32" ref={containerRef}>
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    className="text-center md:text-left mb-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-reachfly text-4xl md:text-5xl text-flow-text tracking-widest uppercase mb-4">
                        Estudos de Caso
                    </h2>
                    <div className="w-24 h-[1px] bg-flow-wine opacity-50 md:ml-0 mx-auto" />
                    <p className="font-gilroy text-flow-text-secondary mt-6 max-w-2xl text-lg font-light">
                        Soluções corporativas construídas com arquitetura de ponta.
                    </p>
                </motion.div>

                {/* 50/50 Layout */}
                <div className="flex flex-col md:flex-row relative">

                    {/* Left Side: Scrolling Content */}
                    <div className="w-full md:w-1/2 md:pr-12 md:pb-[30vh]">
                        {cases.map((cs, i) => (
                            <div
                                key={cs.id}
                                className="min-h-[70vh] flex flex-col justify-center border-l-2 border-[#1a1a1a] pl-8 md:pl-16 relative"
                            >
                                {/* Active Indicator Timeline */}
                                <motion.div
                                    className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-flow-wine origin-top"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: false, margin: "-40%" }}
                                    transition={{ duration: 0.5 }}
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h3 className="font-reachfly text-3xl md:text-4xl text-flow-text mb-2 tracking-wide uppercase leading-tight">
                                        {cs.title}
                                    </h3>

                                    <div className="font-mono text-xs md:text-sm text-gray-500 bg-[#0A0A0A] inline-block px-3 py-1 rounded-sm border border-[#222] mb-8">
                                        <span className="text-flow-wine mr-2">{">"}</span>{`Stack: ${cs.stack}`}
                                    </div>

                                    <div className="space-y-6 font-gilroy text-lg max-w-lg">
                                        <div>
                                            <h4 className="text-white font-medium mb-1">O Desafio</h4>
                                            <p className="text-flow-text-secondary font-light">{cs.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-flow-wine font-medium mb-1 drop-shadow-[0_0_10px_rgba(121,0,40,0.5)]">A Solução Flow</h4>
                                            <p className="text-flow-text-secondary font-light">{cs.solution}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-green-500 font-medium mb-1">O Resultado</h4>
                                            <p className="text-flow-text-secondary font-light">{cs.result}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Sticky Interactive Media */}
                    <div className="w-full md:w-1/2 hidden md:block relative">
                        <div className="sticky top-1/2 -translate-y-1/2 h-[500px] w-full flex items-center justify-center pt-24 pb-24">

                            <motion.div
                                key={currentRenderedIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative w-[90%] md:w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#222] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            >
                                {cases[currentRenderedIndex]?.mediaType === 'video' ? (
                                    <video
                                        src={cases[currentRenderedIndex].mediaSrc}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={cases[currentRenderedIndex]?.mediaSrc}
                                        alt={cases[currentRenderedIndex]?.title}
                                        className="object-cover w-full h-full"
                                    />
                                )}

                                {/* Elegant overlay to maintain dark style consistency */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent opacity-80 pointer-events-none" />

                                {/* Subtle Glow inside the device frame */}
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-flow-wine/20 rounded-full blur-[40px] pointer-events-none" />
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
