import { motion } from 'framer-motion';
import React from 'react';

const affiliations = [
    '/images/a1.webp',
    '/images/a2.webp',
    '/images/a3-removebg-preview.png',
    '/images/a4-removebg-preview.png',
];

export default function Hero() {

    const duplicatedAffiliations = [
        ...affiliations,
        ...affiliations,
        ...affiliations,
        ...affiliations,
    ];
        
    return (
        <section
            id='home'
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between pt-24 lg:pt-32"
            style={{ backgroundImage: "url('/images/bg-hero.jpg')" }}
        >

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaf6] via-[#fdfaf6] via-45% to-transparent" />

        {/* Main Content Container */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px'}}
                transition={{ duration: 0.8, ease: 'easeOut'}}
            >
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full my-auto py-12">
                    <div className="max-w-2xl space-y-6">
                    
                    {/* Top Badge */}
                    <div>
                        <span className="inline-block rounded-full border border-[#C9A96E]/20 bg-white px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-[.30em] text-[#C9A96E] uppercase shadow-sm">
                            Pahrump, Nevada • Est. 1995
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-[1.15] font-medium">
                        Find Your <br />
                        <span className="italic text-[#C9A96E] font-normal">Next Home</span> <br />
                        Not Just a House
                    </h1>

                    {/* Subtitle */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
                        Discover luxury homes and exceptional properties in Pahrump. From
                        waterfront estates to modern homes nestled beside the greens, we help
                        you find a place that feels like home.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        <a
                        href="#gallery"
                        className="inline-flex justify-center items-center bg-[#1A2332] hover:bg-[#5A6472] text-white font-medium rounded-full px-8 py-3.5 transition-all shadow-sm hover:-translate-y-1 duration-300"
                        >
                        Explore Homes
                        </a>

                        <a
                        href="#contact"
                        className="inline-flex justify-center items-center bg-white hover:bg-slate-50 border border-[#1A2332] text-[#1A2332] font-medium rounded-full px-8 py-3.5 transition-all shadow-sm hover:-translate-y-1 duration-300"
                        >
                        Book Consultation
                        </a>
                    </div>

                    </div>
                </div>
            </motion.div>

            <div className="relative z-10 w-full bg-white/90 backdrop-blur-md border-t border-slate-200/60 py-4 mt-8">
                <div className="relative flex overflow-x-hidden group ">

                {/* Side Fades */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

                    {/* Track 1 */}
                    <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-16 animate-marquee group-hover:[animation-play-state:paused] min-w-full">
                        {duplicatedAffiliations.map((src, index) => (
                        <img
                            key={`a-${index}`}
                            src={src}
                            alt={`Affiliation ${index + 1}`}
                            className="h-8 sm:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity shrink-0"
                        />
                        ))}
                    </div>

                    {/* Track 2 */}
                    <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-16 animate-marquee group-hover:[animation-play-state:paused] min-w-full aria-hidden:true">
                        {duplicatedAffiliations.map((src, index) => (
                        <img
                            key={`b-${index}`}
                            src={src}
                            alt=""
                            className="h-8 sm:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity shrink-0"
                        />
                        ))}
                    </div>

                </div>
            </div>

     </section>
    );
}