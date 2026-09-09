import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const interests = [
    'Buying', 
    'Selling', 
    'Investment Property', 
    'Market Valuation'
  ];

  const [selectedInterest, setSelectedInterest] = useState('Buying');

  return (
    <div 
      id="contact"
      className="bg-[#fdfaf6] py-16 md:py-24 lg:py-28 text-[#1A2332] border-[#efeeed]/60 border-t-2"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[.25em] text-[#C9A96E] block mb-2">
                  call or visit
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 font-medium tracking-tight">
                  Marci Metzger
                </h2>
                <p className="font-serif italic text-2xl sm:text-3xl text-slate-800 tracking-wide mt-1">
                  THE RIDGE REALTY GROUP
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-6 pt-2">
                
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f4efe6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C9A96E]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">
                      OFFICE
                    </span>
                    <p className="text-sm font-medium text-slate-800 leading-snug mt-0.5">
                      3190 HW-160, Suite F<br />
                      Pahrump, Nevada 89048
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f4efe6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#1A2332]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">
                      PHONE
                    </span>
                    <p className="font-serif text-xl text-slate-900 font-medium mt-0.5">
                      (206) 919-6886
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f4efe6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#1A2332]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">
                      HOURS
                    </span>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">
                      Open daily 8:00am - 7:00pm
                    </p>
                    <p className="text-xs text-slate-500">
                      Appointments outside hours available
                    </p>
                  </div>
                </div>

              </div>

              {/* Interactive Google Map */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm group">
                    <iframe
                        title="Marci Metzger - The Ridge Realty Group Office Location"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://maps.google.com/maps?q=3190+NV-160+Suite+F,+Pahrump,+NV+89048&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full grayscale-[25%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 font-medium leading-tight">
                  Let's make your next<br />move effortless.
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-3 mb-8 leading-relaxed">
                  Tell us what you're looking for — buy, sell, or invest. We respond within the hour during office hours.
                </p>

                <form className="space-y-5">
                  {/* Full Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full bg-[#f8f6f2] border-0 rounded-2xl px-5 py-3.5 text-xs text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#C9A96E] focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        placeholder="(206) 000-0000"
                        className="w-full bg-[#f8f6f2] border-0 rounded-2xl px-5 py-3.5 text-xs text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#C9A96E] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full bg-[#f8f6f2] border-0 rounded-2xl px-5 py-3.5 text-xs text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#C9A96E] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Interested In Dropdown */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                      I'M INTERESTED IN
                    </label>
                    <div className="relative">
                      <select
                        value={selectedInterest}
                        onChange={(e) => setSelectedInterest(e.target.value)}
                        className="w-full bg-[#f8f6f2] border-0 rounded-2xl px-5 py-3.5 text-xs text-slate-800 appearance-none focus:ring-2 focus:ring-[#C9A96E] focus:outline-none cursor-pointer pr-10 font-medium"
                      >
                        {interests.map((item, idx) => (
                          <option key={idx} value={item}>{item}</option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-800 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your timeline, budget, or property..."
                      className="w-full bg-[#f8f6f2] border-0 rounded-2xl p-5 text-xs text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#C9A96E] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#1A2332] hover:bg-[#5A6472] duration-300 text-white text-xs font-bold tracking-widest uppercase py-4 rounded-full transition-all shadow-md mt-2"
                  >
                    SEND MESSAGE
                  </button>

                  <p className="text-[10px] text-center text-slate-400 pt-2">
                    By sending, you agree to be contacted about real estate services. No spam.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}