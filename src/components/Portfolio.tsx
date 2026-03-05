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
        result: "Retenção de usuários aumentada em 40% e automação de 100% da entrada de dados."
    },
    {
        id: 2,
        title: "Eco-commerce Automação de Drops",
        stack: "Next.js | Stripe | Meta Ads API",
        challenge: "Lançamentos de produtos com alto tráfego derrubavam o servidor e perdiam vendas por demora no checkout.",
        solution: "Refatoramos a infraestrutura para Edge Computing e automatizamos o remarketing via Webhooks instantes após o abandono de carrinho.",
        result: "Tempo de carregamento reduzido em 85%. Receita recuperada em campanhas subiu 3x."
    },
    {
        id: 3,
        title: "Agente B2B Qualificador",
        stack: "Python | OpenAI | HubSpot API",
        challenge: "O time comercial gastava 70% do tempo filtrando leads frios que não tinham o orçamento necessário.",
        solution: "Implementamos um agente de IA no site que entrevista, qualifica e agenda reuniões no calendário do vendedor apenas com MQLs aprovados.",
        result: "Taxa de conversão de reunião para venda aumentou 60%. Custo de Aquisição (CAC) caiu pela metade."
    }
];

export default function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Simple state to track which case is currently in view (approximate via scroll progress or IntersectionObserver)
    // For a pure sticky effect, we can just map the scroll progress to change the right-side UI.
    // Translating scroll to active index (e.g. 0 to 0.33 -> case 1, etc)
    const activeIndex = useTransform(scrollYProgress,
        [0, 0.4, 0.5, 0.8, 0.9, 1],
        [0, 0, 1, 1, 2, 2]
    );

    const [currentRenderedIndex, setCurrentRenderedIndex] = useState(0);

    // Sync motion value to state for rendering React components conditionally on the right side
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
                                    <h3 className="font-reachfly text-3xl md:text-4xl text-flow-text mb-2 tracking-wide uppercase">
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

                    {/* Right Side: Sticky Interactive Mockup */}
                    <div className="w-full md:w-1/2 hidden md:block relative">
                        <div className="sticky top-1/2 -translate-y-1/2 h-[500px] w-full flex items-center justify-center">

                            {/* Fake Mockup Container */}
                            <motion.div
                                className="w-[80%] max-w-[400px] aspect-[9/16] bg-[#0A0A0A] rounded-[2.5rem] border-[8px] border-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Dynamic Screen Content based on active case */}
                                <div className="absolute inset-0 bg-flow-dark p-6 pt-12 flex flex-col relative transition-colors duration-500">
                                    {/* Dynamic Header */}
                                    <div className="w-full h-8 bg-black/40 rounded-full mb-6 border border-white/5 flex items-center px-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>

                                    <motion.div
                                        key={currentRenderedIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex-grow flex flex-col justify-center gap-4"
                                    >
                                        {/* Abstract placeholders for UI that represent the stack */}
                                        {currentRenderedIndex === 0 && (
                                            <div className="space-y-4">
                                                <div className="h-12 w-3/4 bg-[#1a1a1a] rounded-xl self-end ml-auto flex items-center justify-end px-4 border border-green-900/30">
                                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                                </div>
                                                <div className="h-24 w-4/5 bg-[#111] rounded-xl flex flex-col justify-center px-4 border border-flow-wine/20">
                                                    <div className="h-2 w-1/2 bg-gray-700 rounded-full mb-2" />
                                                    <div className="h-2 w-3/4 bg-gray-600 rounded-full" />
                                                </div>
                                                <div className="h-12 w-3/4 bg-[#1a1a1a] rounded-xl self-end ml-auto" />
                                            </div>
                                        )}

                                        {currentRenderedIndex === 1 && (
                                            <div className="space-y-4">
                                                <div className="h-40 w-full bg-gradient-to-br from-[#111] to-[#1a1a1a] rounded-2xl p-4 flex flex-col justify-between border border-blue-900/20">
                                                    <div className="flex justify-between w-full">
                                                        <div className="w-10 h-10 rounded-full bg-blue-900/40" />
                                                        <div className="w-16 h-4 bg-gray-700/50 rounded-full" />
                                                    </div>
                                                    <div className="h-8 w-1/2 bg-flow-wine/20 rounded border border-flow-wine/40" />
                                                </div>
                                                <div className="h-16 w-full bg-[#111] rounded-xl border border-gray-800" />
                                            </div>
                                        )}

                                        {currentRenderedIndex === 2 && (
                                            <div className="space-y-4 flex flex-col items-center justify-center h-full pb-10">
                                                <div className="w-24 h-24 rounded-full border-4 border-[#222] border-t-flow-wine animate-spin" />
                                                <div className="mt-8 space-y-2 w-full flex flex-col items-center">
                                                    <div className="h-2 w-3/4 bg-gray-700/50 rounded-full" />
                                                    <div className="h-2 w-1/2 bg-gray-700/50 rounded-full" />
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Subtle Glow inside the device */}
                                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-flow-wine/20 rounded-full blur-[40px] pointer-events-none" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
