import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LandingLayout {
    children: ReactNode
}

export default function Layout({children}: LandingLayout) {
    return (
        <>
            <div className="min-h-screen bg-[#F8F5F0] text-[#222222]">
                <Navbar/>

                <main>
                    {children}
                </main>

                <Footer/>
            </div>
        </>
    )
} 