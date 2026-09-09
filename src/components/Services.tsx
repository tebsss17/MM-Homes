
import { motion } from "framer-motion";
import { BadgeDollarSign, Compass, Building2, Briefcase, ShieldCheck } from "lucide-react";

export default function Services() {
    return (
        <>
            <section
                id="services"
                className="bg-[#F9F6F1] py-16 md:py-24 lg:py-28 text-[#1A2332] border-[#efeeed]/60  border-t-2"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once: true, margin: '-100px'}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[.25em] text-[#C9A96E]">
                                WHAT WE DO
                                </span>
                                <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 font-medium mt-2">
                                Real Estate <br /> Done Right.
                                </h2>
                            </div>

                            <p className="text-[#5A6472] text-sm max-w-md leading-relaxed pt-2">
                                Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets.
                            </p>
                        </div>

                        {/* Bento Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Card 01: Sellers  */}
                        <div className="md:col-span-2 bg-[#ffffff] p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col justify-between min-h-[260px] relative overflow-hidden group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium tracking-wider text-[#C9A96E]">01 / Sellers</span>
                                <div className="w-10 h-10 rounded-full bg-[#f7f3ee] flex items-center justify-center text-[#C9A96E] border border-[#C9A96E]/20">
                                    <BadgeDollarSign className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="max-w-md my-auto pt-6">
                            <h3 className="font-serif text-2xl text-slate-900 font-medium mb-3">
                                Don't Just List it... <br /> Get it SOLD!
                            </h3>
                            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
                            </p>
                            </div>

                            {/* Floating Tag inside Card 1 */}
                            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden sm:block">
                            <span className="bg-[#f7f3ee] text-[10px] uppercase tracking-wider font-semibold text-slate-700 px-4 py-2 rounded-full border border-slate-200/50">
                                • TOP DOLLAR STRATEGY
                            </span>
                            </div>
                        </div>

                        {/* Card 02: Buyers (1 Column) */}
                        <div className="md:col-span-1 bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[260px] group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium tracking-wider text-[#C9A96E]">02 / Buyers</span>
                                <div className="w-10 h-10 rounded-full bg-[#f7f3ee] flex items-center justify-center text-[#C9A96E] border border-[#C9A96E]/20">
                                    <Compass className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="pt-6">
                            <h3 className="font-serif text-2xl text-slate-900 font-medium mb-3">
                                Guide to Buyers
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">
                                Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
                            </p>
                            </div>
                        </div>

                        {/* Card 03: All Properties */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[240px] group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium tracking-wider text-[#C9A96E]">03 / All Properties</span>
                                <div className="w-10 h-10 rounded-full bg-[#f7f3ee] flex items-center justify-center text-[#C9A96E] border border-[#C9A96E]/20">
                                    <Building2 className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="pt-6">
                            <h3 className="font-serif text-xl text-slate-900 font-medium mb-3">
                                Commercial & Residential
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">
                                Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it!
                            </p>
                            </div>
                        </div>

                        {/* Card 04: Advisory */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[240px] group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium tracking-wider text-[#C9A96E]">04 / Advisory</span>
                                <div className="w-10 h-10 rounded-full bg-[#f7f3ee] flex items-center justify-center text-[#C9A96E] border border-[#C9A96E]/20">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="pt-6">
                            <h3 className="font-serif text-xl text-slate-900 font-medium mb-3">
                                Rely on Expertise
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">
                                If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers.
                            </p>
                            </div>
                        </div>

                        {/* Card 05: Full Service */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[240px] group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium tracking-wider text-[#C9A96E]">05 / Full Service</span>
                                <div className="w-10 h-10 rounded-full bg-[#f7f3ee] flex items-center justify-center text-[#C9A96E] border border-[#C9A96E]/20">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="pt-6">
                            <h3 className="font-serif text-xl text-slate-900 font-medium mb-3">
                                Real Estate Done Right
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">
                                Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets.
                            </p>
                            </div>
                        </div>

                        </div>

                    </div>
                </motion.div>

            </section>
        </>
    )
}