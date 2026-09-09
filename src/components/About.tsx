'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from './CountUp'; // Siguraduhing tama ang path ng CountUp component

export default function About() {
    return (
        <section className="bg-[#fdfaf6] py-16 md:py-24 lg:py-28 text-slate-800 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                
                {/* Left Column */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full lg:w-[45%] max-w-lg lg:max-w-none shrink-0"
                >
                    {/* Background Offset Box */}
                    <div className="absolute -inset-2 sm:-inset-3 bg-[#f2ede6] rounded-3xl -z-10" />
                    
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-white/60">
                        <img 
                            src="/images/facecard.webp" 
                            alt="Marci Metzger" 
                            className="w-full h-full object-cover"
                        />

                        {/* Floating Dark Badge */}
                        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 bg-[#1a1a1a]/90 backdrop-blur-md text-white p-4 sm:p-5 rounded-2xl max-w-xs shadow-xl border border-white/10">
                            <div className="flex items-baseline gap-1">
                            <span className="font-serif text-2xl sm:text-3xl font-semibold">
                                $<CountUp end={28} />.<CountUp end={5} />
                            </span>
                            <span className="text-[#C9A96E] font-medium text-lg sm:text-xl">M+</span>
                            </div>
                            <p className="text-[10px] sm:text-xs text-gray-300 font-medium tracking-wider uppercase mt-0.5">
                            Sales Volume • Last 12 Months
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-400 mt-2 flex items-center gap-1.5 border-t border-gray-800 pt-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
                            50+ Families Guided Home
                            </p>
                        </div>
                    </div>

                    {/* Sub-caption below image */}
                    <div className="flex items-center gap-2 mt-4 pl-2">
                        <div className="h-[1px] w-6 bg-[#C9A96E]" />
                        <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-semibold">
                            Marci Metzger • Broker / Owner
                        </p>
                    </div>
                </motion.div>

                {/* Right Column */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full lg:w-[50%] max-w-xl space-y-6 sm:space-y-8"
                >
                    
                    {/* Top Label */}
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-[#C9A96E]" />
                        <span className="text-xs font-semibold uppercase tracking-[.25em] text-[#C9A96E]">
                            About Marci
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 font-medium leading-[1.15]">
                        With Over 3 Decades <br />
                        of Getting it <br />
                        <span className="italic font-normal text-[#C9A96E]">SOLD!</span>
                    </h2>

                    {/* Body Paragraphs */}
                    <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                        <p>
                            I'm not just selling houses — I'm placing neighbors, building community, and protecting the biggest investment of your life. For <strong className="text-slate-900 font-semibold">30 years in Pahrump Valley</strong>, my clients have become family.
                        </p>
                        <p className="text-slate-500 text-xs sm:text-sm">
                            From first-time buyers to luxury ranch estates, I bring relentless negotiation, hyper-local data, and concierge-level guidance. That's why over 90% of my business comes from referrals and repeat clients.
                        </p>
                    </div>

                    {/* Stats Row with Animated Numbers */}
                    <div className="flex items-center justify-between border-t border-b border-slate-200/80 py-6">
                        <div>
                            <p className="font-serif text-2xl sm:text-3xl text-slate-900 font-semibold">
                            <CountUp end={30} suffix="+" />
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-1">
                            Years Experience
                            </p>
                        </div>
                        <div>
                            <p className="font-serif text-2xl sm:text-3xl text-slate-900 font-semibold">
                            <CountUp end={90} suffix="+" />
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-1">
                            Clients This Year
                            </p>
                        </div>
                        <div>
                            <p className="font-serif text-2xl sm:text-3xl text-slate-900 font-semibold">
                            <CountUp end={100} suffix="%" />
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-1">
                            Referral Driven
                            </p>
                        </div>
                    </div>

                    {/* Quote Card */}
                    <div className="bg-[#f3ede4]/80 p-5 sm:p-6 rounded-2xl space-y-3 border border-[#e5dcd0]">
                        <p className="font-serif italic text-slate-800 text-sm sm:text-base leading-relaxed">
                            "Your home isn't a transaction. It's your next chapter — and I treat it like my own."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">
                            M
                            </div>
                            <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-semibold">
                            — Marci Metzger, The Ridge Realty Group
                            </span>
                        </div>
                    </div>
                </motion.div>

                </div>
            </div>
        </section>
    );
}