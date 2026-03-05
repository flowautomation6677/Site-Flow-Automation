"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-flow-dark pt-32 pb-20 px-6">
            {/* Abstract Animated Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-flow-wine/10 rounded-full blur-[100px] mix-blend-screen"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-flow-wine/5 rounded-full blur-[80px] mix-blend-screen"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                />
                {/* Subtle grid/lines to simulate data connections */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center">
                {/* Main Headline */}
                <motion.h1
                    className="font-reachfly text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-white tracking-tighter mb-8 max-w-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    O ESTADO DA ARTE EM <br />
                    <span className="text-flow-wine opacity-90 drop-shadow-[0_0_25px_rgba(121,0,40,0.4)]">AUTOMAÇÃO & VENDAS</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    className="font-gilroy text-xl md:text-2xl text-flow-text-secondary max-w-3xl mb-16 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    Transformamos tráfego bruto em ecossistemas de receita previsível.
                    A união definitiva entre Engenharia de Dados e Marketing.
                </motion.p>

                {/* Dashboard "Glassmorphism" Effect - The Visual Argument */}
                <motion.div
                    className="w-full max-w-5xl relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center p-8"
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                >
                    {/* Glass background */}
                    <div className="absolute inset-0 bg-[#0A0A0A]/60 backdrop-blur-xl z-0" />

                    {/* Simulated Code Layer in Background */}
                    <div className="absolute inset-0 z-0 p-6 overflow-hidden hidden md:block opacity-20 font-mono text-xs text-flow-wine/60 text-left whitespace-pre">
                        {`import { Pipeline } from '@flow/core';
import { NeuralAgent } from '@flow/ai';

export async function processTraffic(source: TrafficSource) {
  const agent = new NeuralAgent({ model: 'gpt-4-turbo' });
  const rawData = await source.extractAndClean();
  
  if (rawData.qualityScore < 0.7) {
    return agent.nurtureSequence(rawData);
  }
  
  return Pipeline.executeClosingSequence({
    target: rawData.lead,
    strategy: 'high-ticket-conversion',
    // Revenue generation node active
    onSuccess: (profit) => Metrics.push(profit)
  });
}`}
                    </div>

                    {/* SVG Animated Revenue Chart */}
                    <div className="relative z-10 w-full h-full flex flex-col justify-end">
                        <svg viewBox="0 0 1000 400" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(121,0,40,0.8)]">
                            {/* Grid lines */}
                            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />

                            {/* Path Data for ascending chart line */}
                            <motion.path
                                d="M0 350 L100 320 L200 340 L300 280 L400 300 L500 200 L600 230 L700 150 L800 120 L900 60 L1000 0"
                                fill="none"
                                stroke="#790028"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                            />

                            {/* Fill under the path */}
                            <motion.path
                                d="M0 350 L100 320 L200 340 L300 280 L400 300 L500 200 L600 230 L700 150 L800 120 L900 60 L1000 0 L1000 400 L0 400 Z"
                                fill="url(#gradient)"
                                opacity="0.3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                transition={{ duration: 1, delay: 2.5 }}
                            />

                            {/* Data points (dots) */}
                            {[
                                { cx: 100, cy: 320 }, { cx: 300, cy: 280 },
                                { cx: 500, cy: 200 }, { cx: 700, cy: 150 },
                                { cx: 900, cy: 60 }, { cx: 1000, cy: 0 }
                            ].map((point, index) => (
                                <motion.circle
                                    key={index}
                                    cx={point.cx}
                                    cy={point.cy}
                                    r="6"
                                    fill="#fff"
                                    stroke="#790028"
                                    strokeWidth="3"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1.5 + (index * 0.1), type: "spring" }}
                                />
                            ))}

                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#790028" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#790028" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Overlay Metric Text */}
                        <motion.div
                            className="absolute top-4 left-6 text-left"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2, duration: 0.8 }}
                        >
                            <p className="text-flow-text-secondary font-gilroy text-sm uppercase tracking-widest font-bold">Revenue Flow</p>
                            <h3 className="text-white font-reachfly text-4xl mt-1 tracking-wider">+340%</h3>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
