import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Listings() {

    const [selectedLocation, setSelectedLocation] = useState('Any');
    const [selectedType, setSelectedType] = useState('Any');
    const [selectedBedrooms, setSelectedBedrooms] = useState('Any Number');
    const [selectedBathrooms, setSelectedBathrooms] = useState('2+');
    const [selectedFilter, setSelectedFilter] = useState('Newest');

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const listings = [
        {
            id: 1, 
            image: '/images/p1.webp',
            price: '$425,000',
            details: '3 bd • 2 ba • 1,840 sqft',
            location: 'PAHRUMP • DESERT VIEW ESTATES',
            status: 'For Sale',
        },
        {
            id: 2, 
            image: '/images/p2.webp',
            price: '$612,000',
            details: '4 bd • 3 ba • 2,420 sqft',
            location: 'Las Vegas • Luxury Acreage',
            status: 'For Sale',
        },
        {
            id: 1, 
            image: '/images/p3.webp',
            price: '$1,150,000',
            details: '4 bd • 3.5 ba • 3,100 sqft',
            location: 'Dyer • Mountain Falls',
            status: 'For Sale',
        },
    ];

    const locations = [
        "Any",
        "Pahrump",
        "Alton",
        "Cold Creek",
        "Dyer",
        "Las Vegas",
        "Mountain Springs",
    ];

    const types = [
        "Any",
        "Residential",
        "Land",
        "Residentail Lease",
        "High Rise",
    ];

    const bedrooms = [
        "Any Number",
        "Studio",
        "1+",
        "2+",
        "3+",
        "4+",
    ];

    const bathrooms = [
        "Any Number",
        "1+",
        "2+",
        "3+",
        "4+",
    ];

    const filter = [
        "Newest",
        "Oldest",
        "Least Expensive",
        "Most Expensive",
    ];

    return (
        <>
            <div 
                id="listings"
                className="bg-[#fdfaf6] py-16 md:py-24 lg:py-28 text-[#1A2332] border-[#efeeed]/60  border-t-2"
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
                                search 
                                </span>
                                <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 font-medium mt-2">
                                Find Your <br /> Dream Home
                                </h2>
                            </div>

                            <div>
                                <p className="text-[#5A6472] text-sm max-w-md leading-relaxed pt-2">
                                    Pahrump, NV and surrounding valleys. Filter by location, type, and budget — we update daily.
                                </p>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="border-2  border-[#1A2332] p-4 rounded-2xl lg:rounded-full text-slate-800 mb-12 shadow-lg">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 items-center">

                                {/* Location */}
                                <div className="px-4 py-2 border-r border-slate-200/60 last:border-0 relative">
                                    <label className="block text-[9px] font-semibold tracking-wider text-slate-400 uppercase pointer-events-none">
                                        LOCATION
                                    </label>
                                    <div className="relative flex items-center justify-between mt-0.5">
                                        <select
                                            value={selectedLocation}
                                            onChange={(e) => setSelectedLocation(e.target.value)}
                                            className="w-full bg-transparent text-xs font-medium text-slate-800 cursor-pointer appearance-none focus:outline-none pr-4 z-10"
                                        >
                                            {locations.map((loc, idx) => (
                                                <option key={idx} value={loc}>{loc}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-0 pointer-events-none z-0" />
                                    </div>
                                </div>

                                {/* Type */}
                                <div className="px-4 py-2 border-r border-slate-200/60 last:border-0 relative">
                                    <label className="block text-[9px] font-semibold tracking-wider text-slate-400 uppercase pointer-events-none">
                                        TYPE
                                    </label>
                                    <div className="relative flex items-center justify-between mt-0.5">
                                        <select
                                            value={selectedType}
                                            onChange={(e) => setSelectedType(e.target.value)}
                                            className="w-full bg-transparent text-xs font-medium text-slate-800 cursor-pointer appearance-none focus:outline-none pr-4 z-10"
                                        >
                                            {types.map((type, idx) => (
                                                <option key={idx} value={type}>{type}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-0 pointer-events-none z-0" />
                                    </div>
                                </div>

                                {/* Sort */}
                                <div className="px-4 py-2 border-r border-slate-200/60 last:border-0 relative">
                                    <label className="block text-[9px] font-semibold tracking-wider text-slate-400 uppercase pointer-events-none">
                                        Sort by
                                    </label>
                                    <div className="relative flex items-center justify-between mt-0.5">
                                        <select
                                            value={selectedFilter}
                                            onChange={(e) => setSelectedFilter(e.target.value)}
                                            className="w-full bg-transparent text-xs font-medium text-slate-800 cursor-pointer appearance-none focus:outline-none pr-4 z-10"
                                        >
                                            {filter.map((filter, idx) => (
                                                <option key={idx} value={filter}>{filter}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-0 pointer-events-none z-0" />
                                    </div>
                                </div>

                                {/* Bedrooms */}
                                <div className="px-4 py-2 border-r border-slate-200/60 last:border-0 relative">
                                    <label className="block text-[9px] font-semibold tracking-wider text-slate-400 uppercase pointer-events-none">
                                        bedrooms
                                    </label>
                                    <div className="relative flex items-center justify-between mt-0.5">
                                        <select
                                            value={selectedBedrooms}
                                            onChange={(e) => setSelectedBedrooms(e.target.value)}
                                            className="w-full bg-transparent text-xs font-medium text-slate-800 cursor-pointer appearance-none focus:outline-none pr-4 z-10"
                                        >
                                            {bedrooms.map((bedroom, idx) => (
                                                <option key={idx} value={bedroom}>{bedroom}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-0 pointer-events-none z-0" />
                                    </div>
                                </div>

                                {/* Bathroom */}
                                <div className="px-4 py-2 border-r border-slate-200/60 last:border-0 relative">
                                    <label className="block text-[9px] font-semibold tracking-wider text-slate-400 uppercase pointer-events-none">
                                        bathrooms
                                    </label>
                                    <div className="relative flex items-center justify-between mt-0.5">
                                        <select
                                            value={selectedBathrooms}
                                            onChange={(e) => setSelectedBathrooms(e.target.value)}
                                            className="w-full bg-transparent text-xs font-medium text-slate-800 cursor-pointer appearance-none focus:outline-none pr-4 z-10"
                                        >
                                            {bathrooms.map((bathroom, idx) => (
                                                <option key={idx} value={bathroom}>{bathroom}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-0 pointer-events-none z-0" />
                                    </div>
                                </div>

                                {/* Min Price Input */}
                                <div className="px-4 py-2 border-r border-slate-200/60 last:border-0">
                                    <label className="block text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                                        MIN PRICE
                                    </label>
                                    <div className="flex items-center mt-0.5">
                                        <span className="text-xs font-medium text-slate-400 mr-0.5">$</span>
                                        <input
                                            type="number"
                                            value={minPrice}
                                            onChange={(e) => setMinPrice(e.target.value)}
                                            placeholder="0"
                                            min="0"
                                            className="w-full bg-transparent text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                </div>

                                {/* Max Price Input */}
                                <div className="px-4 py-2 border-r border-slate-200/60 last:border-0">
                                    <label className="block text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                                        Max PRICE
                                    </label>
                                    <div className="flex items-center mt-0.5">
                                        <span className="text-xs font-medium text-slate-400 mr-0.5">$</span>
                                        <input
                                            type="number"
                                            value={maxPrice}
                                            onChange={(e) => setMaxPrice(e.target.value)}
                                            placeholder="0"
                                            min="0"
                                            className="w-full bg-transparent text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="col-span-2 md:col-span-1 lg:col-span-1 pl-2 pr-1 py-1 flex justify-end">
                                    <button className="w-full bg-[#1A2332]  text-white text-xs font-medium px-5 py-3 rounded-full transition-all hover:cursor-pointer hover:bg-[#5A6472] duration-300">
                                        SEARCH
                                    </button>
                                </div>
                            </div>
                            

                        </div>
                        
                        {/* Property Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {listings.map((item) => (
                            <div 
                                key={item.id} 
                                className="bg-white rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-200/60 cursor-pointer"
                            >
                                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                                <img 
                                    src={item.image} 
                                    alt={item.location} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-sm">
                                    {item.status}
                                </span>
                                </div>

                                <div className="p-6">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-serif text-2xl font-normal text-slate-900">
                                    {item.price}
                                    </h3>
                                    <span className="text-[11px] text-slate-500 font-medium">
                                    {item.details}
                                    </span>
                                </div>

                                <p className="text-[10px] font-semibold tracking-widest text-[#C9A96E] uppercase mt-3">
                                    {item.location}
                                </p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}