"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BootSequence() {
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBooted(true);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (!booted) {
        return (
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-flow-dark"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="flex flex-col items-center">
                    <motion.div
                        className="w-48 h-[2px] bg-flow-wine/20 overflow-hidden relative rounded-full"
                    >
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-flow-wine"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </motion.div>
                    <motion.p
                        className="mt-6 text-flow-wine text-xs uppercase tracking-[0.3em] font-gilroy"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Connecting to Data Stream
                    </motion.p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center p-8 lg:p-24 z-10"
        >
            <motion.p
                className="text-flow-wine text-xs uppercase tracking-[0.3em] font-gilroy mb-4 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                IDV Rules Active
            </motion.p>

            <motion.h1
                className="text-7xl md:text-9xl font-reachfly text-flow-text mb-6 tracking-tighter"
                initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
                animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                FLOW
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-flow-text-secondary max-w-2xl font-gilroy mb-12 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                High-Authority UI designed for precision and performance. Welcome to the new standard.
            </motion.p>

            <motion.button
                className="relative px-8 py-4 bg-flow-dark border border-flow-wine/40 text-flow-text rounded-sm overflow-hidden group transition-all duration-300 font-gilroy tracking-[0.1em] uppercase text-xs"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="relative z-10 font-medium">Initialize Core</span>
                <motion.div
                    className="absolute inset-0 bg-flow-wine z-0 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
            </motion.button>
        </motion.div>
    );
}
