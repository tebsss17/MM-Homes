import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LandingLayout {
    children: ReactNode
}

export default function Layout({children}: LandingLayout) {
    return (
        <>
            <title>Marci Metzger | The Ridge Realty Group</title>
            <meta name="google-site-verification" content="cDzfBXHtFBpPIk1urlNhyzXbP0H1Ei-9TdALpmk79CI" />
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