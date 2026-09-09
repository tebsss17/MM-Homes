export default function Footer() {
    return (
        <>
            <section className="bg-[#1A1A1A]">
                <div className="mx-auto max-w-7xl p-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 ">

                        <div>
                            <p>Contact</p>
                            <p>Call or Visit</p>
                            <p>Boutique office on Highway 160. Walk-ins welcome — coffee always on.</p>

                                <div className="flex flex-row gap-4">
                                    <a href="">
                                        <img src="/images/facebook.svg" alt="" className="size-5 rounded-full p-4 border-2 border-red-200" />
                                    </a>

                                    <a href="">
                                        <img src="/images/insta.svg" alt="" className="size-5" />
                                    </a>

                                    <a href="">
                                        <img src="/images/linkedin.svg" alt="" className="size-5" />
                                    </a>
                                </div> 
                        </div>

                        <div>
                            <p>Address</p>
                            <p>3190 HW-160 Suite F Pahrump, NV 89048 United States</p>
                            <p>phone</p>
                            <p>(206) 919-6886</p>
        
                        </div>

                        <div>
                            <p>hours</p>
                            <p>Monday - Saturday</p>
                            <p>8:00 AM - 7:00 PM</p>
                            <p>Sunday by appointment</p>

                            <a
                                href="#contact"
                                className="inline-flex justify-center items-center bg-white hover:bg-slate-50 border border-[#C9A96E] text-[#C9A96E] font-medium rounded-full px-8 py-3.5 transition-colors shadow-sm"
                            >
                                Let's Talk
                            </a>
        
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}