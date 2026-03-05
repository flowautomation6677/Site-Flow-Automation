"use client";

import { motion } from "framer-motion";

const businessPowers = [
    {
        title: "Velocidade",
        stack: "Next.js + Vercel",
        description: "Interfaces com tempo de resposta em milissegundos. Seu site carrega antes do cliente piscar, garantindo que nenhum lead vaze por lentidão."
    },
    {
        title: "Inteligência",
        stack: "OpenAI + Python",
        description: "Agentes cognitivos e automações rodando em background. Seus leads são atendidos, qualificados e educados enquanto você dorme."
    },
    {
        title: "Escala",
        stack: "Oracle Cloud + Docker",
        description: "Infraestrutura corporativa resiliente. Campanhas de alto tráfego não derrubam seu sistema durante lançamentos agressivos."
    }
];

export default function TechStack() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-reachfly text-4xl md:text-5xl text-flow-text tracking-widest uppercase mb-4">
                        Poder de Negócio
                    </h2>
                    <div className="w-24 h-[1px] bg-flow-wine mx-auto opacity-50" />
                    <p className="font-gilroy text-flow-text-secondary mt-6 max-w-2xl mx-auto text-lg font-light">
                        Não colecionamos linguagens de programação. Operamos tecnologias que injetam força motriz direta no seu caixa.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
                    {businessPowers.map((power, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-[#020202] border border-[#1a1a1a] p-10 flex flex-col items-start transition-all duration-500 hover:border-flow-wine/50 h-full flex-grow overflow-hidden shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Internal subtle glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-flow-wine/0 group-hover:bg-flow-wine/10 rounded-bl-[100px] transition-colors duration-700 pointer-events-none" />

                            <h3 className="font-reachfly text-2xl text-flow-text uppercase tracking-wider mb-2 group-hover:text-white transition-colors duration-300">
                                {power.title}
                            </h3>

                            <div className="font-mono text-xs text-flow-wine mb-6 bg-flow-wine/10 py-1 px-3 border border-flow-wine/20">
                                Stack: {power.stack}
                            </div>

                            <p className="font-gilroy text-flow-text-secondary text-base leading-relaxed font-light mt-auto border-t border-white/5 pt-6">
                                {power.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
