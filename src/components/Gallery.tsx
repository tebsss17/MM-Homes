import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Gallery() {
    const images = [
        {
        id: 1,
        title: "DESERT MODERN",
        src: "/images/p8.jpg",
        colSpan: "lg:col-span-7",
        height: "h-72 sm:h-80 md:h-[360px]",
        },
        {
        id: 2,
        title: "MOUNTAIN FALLS GOLF",
        src: "/images/p9.jpg",
        colSpan: "lg:col-span-5",
        height: "h-72 sm:h-80 md:h-[360px]",
        },
        {
        id: 3,
        title: "OPEN LIVING",
        src: "/images/p10.jpg",
        colSpan: "lg:col-span-4",
        height: "h-64 sm:h-72 md:h-[280px]",
        },
        {
        id: 4,
        title: "SUNSET ACREAGE",
        src: "/images/p1.webp",
        colSpan: "lg:col-span-4",
        height: "h-64 sm:h-72 md:h-[280px]",
        },
        {
        id: 5,
        title: "KITCHEN & LIGHT",
        src: "/images/p2.webp",
        colSpan: "lg:col-span-4",
        height: "h-64 sm:h-72 md:h-[280px]",
        },
        {
        id: 6,
        title: "PAHRUMP VALLEY VIEWS",
        src: "/images/p3.webp",
        colSpan: "lg:col-span-12",
        height: "h-72 sm:h-96 md:h-[400px]",
        },
    ];

  return (
    <>
        <div
            id="gallery"
            className="bg-[#F9F6F1] py-16 md:py-24 lg:py-28 text-[#1A2332] border-[#efeeed]/60 border-t-2"
        >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
                <div>
                <span className="text-xs font-semibold uppercase tracking-[.25em] text-[#C9A96E]">
                    VIEW
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 font-medium mt-2">
                    Photo Gallery
                </h2>
                </div>

                <div className="flex">
                <p className="text-[#5A6472] text-sm max-w-md leading-relaxed pt-2">
                    Real Estate Done Right — marketing that honors architecture,
                    light, and land.
                </p>
                </div>
            </div>

            {/* Grid Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {images.map((item) => (
                <div
                    key={item.id}
                    className={`relative overflow-hidden rounded-3xl group cursor-pointer ${item.colSpan} ${item.height}`}
                >
                    {/* Background Image */}
                    <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Dark Gradient Overlay sa Ibaba */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Bottom Title Tag */}
                    <div className="absolute bottom-5 left-6 z-10">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase">
                        {item.title}
                    </span>
                    </div>

                    {/* Top Right / Bottom Right Arrow Circle Button */}
                    <div className="absolute bottom-5 right-6 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
                ))}
            </div>
            </div>
        </motion.div>
        </div>
    </>
  );
}