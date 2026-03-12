"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="contato" className="bg-flow-dark pt-32 pb-12 border-t border-flow-wine/20">
            <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">

                <motion.h2
                    className="font-reachfly text-4xl md:text-5xl lg:text-6xl text-flow-text text-center mb-16 tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Sua empresa está travada? <br />
                    <span className="text-flow-wine block mt-4">Let it Flow.</span>
                </motion.h2>

                <motion.form
                    className="w-full bg-[#050505] border border-flow-wine/30 rounded-md p-6 shadow-[0_0_30px_rgba(121,0,40,0.1)] mb-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const nameInput = document.getElementById('name') as HTMLInputElement;
                        const urlInput = document.getElementById('url') as HTMLInputElement;
                        const name = nameInput?.value || '';
                        const url = urlInput?.value || '';
                        const companyText = url ? ` da empresa ${url}` : '';
                        const text = `Olá! Meu nome é ${name}${companyText}. Gostaria de agendar um diagnóstico.`;
                        window.open(`https://wa.me/5521990149660?text=${encodeURIComponent(text)}`, "_blank");
                    }}
                >
                    <div className="flex items-center gap-2 mb-6 pb-2 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-900" />
                        <div className="w-3 h-3 rounded-full bg-yellow-900" />
                        <div className="w-3 h-3 rounded-full bg-flow-wine" />
                        <span className="font-mono text-xs text-gray-500 ml-4">Terminal de Diagnóstico v1.0</span>
                    </div>

                    <div className="space-y-6 font-mono text-sm md:text-base">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-flow-wine">{">"} Digite seu nome_</label>
                            <input
                                type="text"
                                id="name"
                                className="bg-transparent border-none outline-none text-flow-text font-mono w-full focus:ring-0 px-4 py-2 bg-white/5 rounded-sm"
                                placeholder="Ex: Alan Turing"
                                autoComplete="off"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="url" className="text-flow-wine">{">"} Digite a URL do seu negócio_</label>
                            <input
                                type="text"
                                id="url"
                                className="bg-transparent border-none outline-none text-flow-text font-mono w-full focus:ring-0 px-4 py-2 bg-white/5 rounded-sm"
                                placeholder="https://"
                                autoComplete="off"
                            />
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button className="px-8 py-3 bg-flow-wine text-white font-gilroy text-sm tracking-wider uppercase rounded-sm hover:bg-flow-wine/80 transition-colors">
                                [ Executar Diagnóstico ]
                            </button>
                        </div>
                    </div>
                </motion.form>

                <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 font-gilroy text-sm text-flow-text-secondary">
                    <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-0">
                        <span className="font-reachfly tracking-widest text-flow-text">FLOW</span>
                        {" AUTOMATION © 2026 "}
                        <span className="hidden md:inline mx-2 text-white/20">|</span>
                        <a href="https://wa.me/5521990149660" target="_blank" rel="noopener noreferrer" className="hover:text-flow-wine transition-colors">
                            WhatsApp: (21) 99014-9660
                        </a>
                    </div>

                    {/* Easter egg for devs */}
                    <button
                        type="button"
                        className="font-mono text-xs hover:text-flow-wine transition-colors border-b border-transparent hover:border-flow-wine border-dashed bg-transparent"
                        onClick={(e) => {
                            e.preventDefault();
                            alert("System verified. Dev status confirmed.");
                        }}
                    >
                        &#123; Ver Código Fonte &#125;
                    </button>
                </div>
            </div>
        </footer>
    );
}
