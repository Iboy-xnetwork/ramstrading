// app/services/brands/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// --- Icons ---
const GrowthIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16a1 1 0 001 1h14a1 1 0 001-1V4" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function BrandsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white antialiased overflow-x-hidden font-sans">
      {/* Premium Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <GrowthIcon />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter">
                Rams<span className="text-amber-500">Trading</span> 
                <span className="text-slate-400 text-lg font-medium ml-2 border-l border-slate-800 pl-3 uppercase tracking-widest">
                  Brands
                </span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-[10px] font-black tracking-[0.2em] uppercase">
              <button onClick={() => scrollTo("strategies")} className="text-slate-400 hover:text-white transition-colors">Strategies</button>
              <button onClick={() => scrollTo("impact")} className="text-slate-400 hover:text-white transition-colors">Our Impact</button>
              <button onClick={() => scrollTo("contact")} className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
                BOOST BRAND
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)]"></div>
             <Image 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
              alt="Marketing Strategy"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1 border border-amber-500/50 rounded-full text-amber-500 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
              Scale Your Presence
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8">
              IDENTITY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-600 uppercase">Influence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light">
              We don't just promote; we position. Strategic marketing and product sales drives designed for the South African consumer landscape.
            </p>
            <button onClick={() => scrollTo("contact")} className="px-12 py-6 bg-white text-slate-950 font-black text-xl rounded-2xl shadow-2xl hover:bg-amber-500 transition-all transform hover:-translate-y-1">
              GET A FREE STRATEGY AUDIT
            </button>
          </div>
        </section>

        {/* NEW: FEATURED BRANDS MARQUEE */}
        <section className="py-12 bg-slate-950 border-y border-slate-900 overflow-hidden">
           <div className="flex space-x-16 animate-pulse whitespace-nowrap justify-center">
              {['Elite Auto', 'Zola Tech', 'Vanguard Fashion', 'Pretoria Hub', 'Eco-Grow SA'].map((brand, i) => (
                 <span key={i} className="text-2xl md:text-4xl font-black text-slate-800 uppercase italic tracking-tighter">
                    {brand}
                 </span>
              ))}
           </div>
        </section>

        {/* Brand Growth Visual (The Graph) */}
        <section className="py-24 bg-slate-900/50 border-y border-slate-800">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="bg-slate-950 p-8 md:p-12 rounded-[3rem] border border-slate-800 shadow-3xl">
                    <div className="flex justify-between items-center mb-8">
                       <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Brand Engagement Metrics</span>
                       <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black rounded-full">+280% ROI</span>
                    </div>
                    {/* Visual Brand Graph */}
                    <div className="h-48 flex items-end space-x-2">
                       {[20, 35, 25, 50, 45, 70, 65, 90, 85, 100].map((h, i) => (
                          <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-md opacity-80 hover:opacity-100 transition-opacity"></div>
                       ))}
                    </div>
                    <div className="grid grid-cols-4 mt-4 text-[10px] font-black text-slate-600 uppercase tracking-tighter">
                       <span>Awareness</span>
                       <span>Interest</span>
                       <span>Desire</span>
                       <span className="text-right">Action</span>
                    </div>
                 </div>
                 
                 <div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">WE TURN <span className="text-amber-500">VIEWS</span> <br />INTO REVENUE.</h2>
                    <div className="space-y-6">
                       {[
                         { t: "Influencer Synergy", d: "Connecting your product with the right voices in SA." },
                         { t: "Conversion Funnels", d: "Turning social media traffic into paying customers." },
                         { t: "Visual Authority", d: "High-end content that makes your brand look elite." }
                       ].map((item, i) => (
                          <div key={i} className="flex space-x-4">
                             <div className="mt-1"><StarIcon /></div>
                             <div>
                                <h4 className="font-black text-xl">{item.t}</h4>
                                <p className="text-slate-400">{item.d}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* NEW: RETAINER PACKAGE (R1000 Setup / R30 Monthly) */}
        <section className="py-24 bg-slate-950">
           <div className="max-w-7xl mx-auto px-6">
              <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 p-10 md:p-16 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8">
                 <div>
                    <h3 className="text-4xl font-black uppercase italic mb-2">Growth Retainer</h3>
                    <p className="text-slate-400 font-bold mb-6">Full brand management & daily promotion support.</p>
                    <div className="flex flex-wrap gap-4">
                       <span className="bg-slate-900 px-4 py-2 rounded-lg text-xs font-black border border-slate-800 text-amber-500">MONTHLY ANALYTICS</span>
                       <span className="bg-slate-900 px-4 py-2 rounded-lg text-xs font-black border border-slate-800 text-amber-500">ADS MANAGEMENT</span>
                    </div>
                 </div>
                 <div className="text-center md:text-right">
                    <div className="text-slate-500 text-xs font-black uppercase mb-1 underline">Special Pricing</div>
                    <div className="text-5xl font-black mb-2">R1,000 <span className="text-sm text-slate-500 font-normal">SETUP</span></div>
                    <div className="text-6xl font-black text-amber-500">R30 <span className="text-lg text-slate-400 font-normal">/MONTH</span></div>
                 </div>
              </div>
           </div>
        </section>

        {/* Services Grid */}
        <section id="strategies" className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic">Promotion <span className="text-amber-500 underline underline-offset-8">Packages</span></h2>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
             {[
               { title: "Brand Identity", price: "Custom", features: ["Logo Design", "Brand Guidelines", "Visual Voice", "Market Positioning"] },
               { title: "Sales Blast", price: "High Impact", features: ["Ads Management", "Influencer Push", "Email Campaigns", "SMS Marketing"] },
               { title: "Event Promo", price: "Local", features: ["Physical Activation", "Event Branding", "Live Coverage", "Crowd Engagement"] }
             ].map((pkg, i) => (
                <div key={i} className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-800 hover:border-amber-500/50 transition-all group">
                   <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">{pkg.title}</h3>
                   <div className="text-amber-500 font-bold mb-8 uppercase text-xs tracking-widest">{pkg.price}</div>
                   <ul className="space-y-4 mb-10">
                      {pkg.features.map((f, j) => (
                         <li key={j} className="text-slate-400 text-sm font-medium flex items-center space-x-2">
                            <span className="text-amber-500">●</span> <span>{f}</span>
                         </li>
                      ))}
                   </ul>
                   <button onClick={() => scrollTo("contact")} className="w-full py-4 border border-slate-700 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-950 font-black transition-all">INQUIRE</button>
                </div>
             ))}
          </div>
        </section>

        {/* Impact / Stats */}
        <section id="impact" className="py-24 bg-amber-500">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { n: "50+", t: "Brands Scaled" },
                { n: "R2M+", t: "Revenue Generated" },
                { n: "15+", t: "Influencer Partners" },
                { n: "100%", t: "SA Focused" }
              ].map((stat, i) => (
                 <div key={i}>
                    <div className="text-5xl font-black text-slate-950 mb-2">{stat.n}</div>
                    <div className="text-slate-900 text-xs font-black uppercase tracking-widest">{stat.t}</div>
                 </div>
              ))}
           </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-32">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="bg-slate-900 border border-slate-800 p-12 md:p-20 rounded-[4rem] shadow-3xl">
                 <h2 className="text-5xl md:text-7xl font-black mb-8 italic">READY TO <span className="text-amber-500 uppercase underline">Explode?</span></h2>
                 <p className="text-slate-400 text-xl mb-12">Contact our Brand Division for a tailored quote and strategy session.</p>
                 
                 <div className="space-y-6">
                    <button className="w-full py-6 bg-amber-500 text-slate-950 font-black text-2xl rounded-3xl hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
                       WHATSAPP: +27 69 821 8311
                    </button>
                    <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">Email: info@ramstrading.co.za</p>
                 </div>
              </div>
           </div>
        </section>

        <footer className="py-12 border-t border-slate-900 text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
           Rams Trading Brands & Promotion • The Future of SA Marketing
        </footer>
      </div>
    </div>
  );
}