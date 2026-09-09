import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LandingLayout {
    children: ReactNode
}

export default function Layout({children}: LandingLayout) {
    return (
        <>
            <title>Marci Metzger | The Ridge Realty Group - Pahrump NV Real Estate</title>
            <div className="min-h-screen bg-[#F8F5F0] text-[#222222] font-sans">
                <Navbar/>

                <main>
                    {children}
                </main>

                <Footer/>
            </div>
        </>
    )
} 