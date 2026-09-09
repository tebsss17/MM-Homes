import {  ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141A23] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A96E] block">
              CONTACT
            </span>
            <h3 className="font-serif text-2xl font-medium text-white">
              Call or Visit
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Find Your Next Home Not Just a House
            </p>

            {/* Social Media Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/MarciHomes/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-[#C9A96E] hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-300"
              >
                <img src="/images/facebook.svg" className="h-4 w-4" alt="" />
              </a>

              <a
                href="https://www.instagram.com/marcimetzger_theridge/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-[#C9A96E] hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-300"
              >
                <img src="/images/insta.svg" className="h-4 w-4" alt="" />
              </a>

              <a
                href="https://www.linkedin.com/in/marci-metzger-30642496/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-[#C9A96E] hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-300"
              >
                <img src="/images/linkedin.svg" className="h-4 w-4" alt="" />
              </a>
            </div>
          </div>

          {/* Column 2: Address & Phone */}
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A96E] block mb-2">
                ADDRESS
              </span>
              <p className="text-sm font-medium text-slate-200 leading-relaxed">
                3190 HW-160, Suite F<br />
                Pahrump, NV 89048<br />
                United States
              </p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A96E] block mb-1">
                PHONE
              </span>
              <a 
                href="tel:2069196886" 
                className="font-serif text-xl text-white hover:text-[#C9A96E] transition-colors"
              >
                (206) 919-6886
              </a>
            </div>
          </div>

          {/* Column 3: Hours & Action CTA */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A96E] block mb-2">
                HOURS
              </span>
              <p className="text-sm text-slate-200 font-medium">
                Monday - Saturday
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                8:00 AM - 7:00 PM
              </p>
              <p className="text-xs text-slate-400 italic mt-1">
                Sunday by appointment
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A96E] hover:bg-[#b8975c] text-[#141A23] font-bold text-xs uppercase tracking-widest rounded-full px-7 py-3.5 transition-all shadow-md group"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} The Ridge Realty Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Equal Housing Opportunity</a>
          </div>
        </div>

      </div>
    </footer>
  );
}