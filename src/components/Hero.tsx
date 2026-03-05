"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingEffect = ({ text, speed = 40 }: { text: string; speed?: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.slice(0, index));
            index++;
            if (index > text.length) {
                clearInterval(timer);
            }
        }, speed);
        return () => clearInterval(timer);
    }, [text, speed]);

    return <span>{displayedText}</span>;
};

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

                {/* Terminal Effect - Authority Element */}
                <motion.div
                    className="w-full max-w-4xl bg-black/40 backdrop-blur-sm border border-flow-wine/20 rounded-md p-4 flex items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                >
                    <div className="font-mono text-sm md:text-base text-gray-400 text-left w-full overflow-x-auto whitespace-nowrap hide-scrollbar flex items-center">
                        <span className="text-flow-wine mr-2">{">"}</span>
                        <TypingEffect
                            text="connecting_node: { marketing_source } -> { ai_agent_processing } -> { profit_output }..."
                            speed={40}
                        />
                        <motion.span
                            className="inline-block w-2 h-4 bg-flow-wine ml-1"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
