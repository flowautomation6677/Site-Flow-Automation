"use client";

import { motion } from "framer-motion";
import {
    Target, // Represent Ads/Tráfego
    Network, // Represent Node/AI
    CheckCircle2 // Represent Venda/Agendamento
} from "lucide-react";

export default function Methodology() {
    return (
        <section id="metodologia" className="py-32 px-6 bg-[#020202] relative flex flex-col items-center overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    className="text-center mb-28"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-reachfly text-4xl md:text-5xl text-flow-text tracking-widest uppercase mb-4">
                        A Engenharia do Crescimento
                    </h2>
                    <div className="w-24 h-[1px] bg-flow-wine mx-auto opacity-50" />
                    <p className="font-gilroy text-flow-text-secondary mt-6 max-w-2xl mx-auto text-lg font-light">
                        Não fazemos apenas sites. Construímos ecossistemas onde o tráfego entra e a receita sai, de forma previsível e automatizada por IA.
                    </p>
                </motion.div>

                {/* Interactive Horizontal Flow Diagram */}
                <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-12 md:gap-4">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[80px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0">
                        <motion.div
                            className="h-full bg-flow-wine shadow-[0_0_15px_rgba(121,0,40,0.8)]"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        />
                    </div>

                    {/* Node 1: Input (Ads/Tráfego) */}
                    <motion.div
                        className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#050505] border-2 border-[#1a1a1a] flex items-center justify-center mb-6 shadow-xl relative group">
                            <div className="absolute inset-0 rounded-full bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300" />
                            <Target className="w-12 h-12 text-flow-text-secondary group-hover:text-white transition-colors duration-300" />

                            {/* Animated Data Pulses sending outward */}
                            <motion.div
                                className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-flow-text z-20 shadow-[0_0_10px_white]"
                                animate={{ x: [0, 80], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0 }}
                            />
                        </div>
                        <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-lg w-full max-w-[280px]">
                            <h3 className="font-reachfly text-xl text-flow-text uppercase tracking-wider mb-2">Input</h3>
                            <p className="font-mono text-xs text-flow-wine mb-3 bg-flow-wine/10 py-1 px-2 rounded inline-block">Google_Ads() | Meta_Ads()</p>
                            <p className="font-gilroy text-flow-text-secondary text-sm font-light leading-relaxed">
                                Gestão de tráfego ultra-segmentada focada no perfil do seu ICP ideal.
                            </p>
                        </div>
                    </motion.div>

                    {/* Node 2: Processing (IA Agent) */}
                    <motion.div
                        className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#0A0A0A] border-2 border-flow-wine flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(121,0,40,0.3)] relative group">
                            {/* Pulsing rings */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-flow-wine/50"
                                animate={{ scale: [1, 1.4], opacity: [1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                            />
                            <motion.div
                                className="absolute inset-0 rounded-full border border-flow-wine/30"
                                animate={{ scale: [1, 1.8], opacity: [1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                            />
                            <Network className="w-12 h-12 text-flow-wine group-hover:scale-110 transition-transform duration-300" />

                            {/* Animated Data Pulses sending outward */}
                            <motion.div
                                className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-flow-wine z-20 shadow-[0_0_15px_#790028]"
                                animate={{ x: [0, 80], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                            />
                        </div>
                        <div className="bg-[#050505] border border-flow-wine/30 p-6 rounded-lg w-full max-w-[280px] shadow-[0_10px_30px_rgba(121,0,40,0.1)]">
                            <h3 className="font-reachfly text-xl text-flow-text uppercase tracking-wider mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">O Core</h3>
                            <p className="font-mono text-xs text-white mb-3 bg-flow-dark border border-white/20 py-1 px-2 rounded inline-block">Neural_Agent.process()</p>
                            <p className="font-gilroy text-flow-text-secondary text-sm font-light leading-relaxed">
                                Agente proprietário (Next.js + LLM) atuando 24/7 para qualificar, filtrar e educar o lead de forma humanizada.
                            </p>
                        </div>
                    </motion.div>

                    {/* Node 3: Output (Venda/Agendamento) */}
                    <motion.div
                        className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#050505] border-2 border-[#1a1a1a] flex items-center justify-center mb-6 shadow-xl relative group hover:border-green-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 rounded-full bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-500" />
                            <CheckCircle2 className="w-12 h-12 text-flow-text-secondary group-hover:text-green-500 transition-colors duration-500" />
                        </div>
                        <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-lg w-full max-w-[280px]">
                            <h3 className="font-reachfly text-xl text-flow-text uppercase tracking-wider mb-2 group-hover:text-green-500 transition-colors">Output</h3>
                            <p className="font-mono text-xs text-green-500 mb-3 bg-green-500/10 py-1 px-2 rounded inline-block">return Deal.close()</p>
                            <p className="font-gilroy text-flow-text-secondary text-sm font-light leading-relaxed">
                                Apenas leads qualificados agendam visitas ou realizam compras. Desperdício de tempo do comercial = 0.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
