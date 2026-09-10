import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#efeeed] bg-[#fdfaf6]/60 shadow-sm">
            
            {/* Main Navbar */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

                {/* Logo */}
                <a href="#home" className="shrink-0">
                    <img
                        src="/images/marci-logo.webp"
                        alt="Marci Metzger - The Ridge Realty Group"
                        className="h-12 w-auto object-contain"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">

                    <a
                        href="#about"
                        className="relative text-sm uppercase tracking-[0.12em] text-black/60 transition-colors hover:text-black after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A96E] after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        About
                    </a>

                    <a
                        href="#services"
                        className="relative text-sm uppercase tracking-[0.12em] text-black/60 transition-colors hover:text-black after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A96E] after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        Services
                    </a>

                    <a
                        href="#listings"
                        className="relative text-sm uppercase tracking-[0.12em] text-black/60 transition-colors hover:text-black after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A96E] after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        Listings
                    </a>

                    <a
                        href="#gallery"
                        className="relative text-sm uppercase tracking-[0.12em] text-black/60 transition-colors hover:text-black after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A96E] after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        Gallery
                    </a>

                </nav>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="hidden font-medium rounded-full  bg-[#1A2332] border px-7 py-3 text-sm uppercase tracking-[0.12em] transition duration-300 hover:bg-[#5A6472] text-[#FDFAF6] md:block"
                >
                    Let's Talk
                </a>



                {/* Mobile Hamburger */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <span className="text-3xl font-light">
                            ×
                        </span>
                    ) : (
                        <div className="space-y-1.5">
                            <span className="block h-px w-6 bg-[#222222]" />
                            <span className="block h-px w-6 bg-[#222222]" />
                            <span className="block h-px w-6 bg-[#222222]" />
                        </div>
                    )}
                </button>

            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden border-t border-[#efeeed] transition-all duration-600 md:hidden ${
                    isOpen
                        ? "max-h-[350px] opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <nav className="mx-auto max-w-7xl px-6 py-6">

                    <div className="flex flex-col">

                        <a
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="border-b border-[#efeeed] py-4 text-sm uppercase tracking-[0.12em] text-black/70"
                        >
                            About
                        </a>

                        <a
                            href="#services"
                            onClick={() => setIsOpen(false)}
                            className="border-b border-[#efeeed] py-4 text-sm uppercase tracking-[0.12em] text-black/70"
                        >
                            Services
                        </a>

                        <a
                            href="#listings"
                            onClick={() => setIsOpen(false)}
                            className="border-b border-[#efeeed] py-4 text-sm uppercase tracking-[0.12em] text-black/70"
                        >
                            Listings
                        </a>

                        <a
                            href="#gallery"
                            onClick={() => setIsOpen(false)}
                            className="border-b border-[#efeeed] py-4 text-sm uppercase tracking-[0.12em] text-black/70"
                        >
                            Gallery
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-6 rounded-full bg-[#1A1A1A] px-6 py-4 text-center text-sm uppercase tracking-[0.12em] text-white transition hover:bg-[#C9A96E]"
                        >
                            Let's Talk
                        </a>

                    </div>

                </nav>
            </div>

        </header>
    );
}