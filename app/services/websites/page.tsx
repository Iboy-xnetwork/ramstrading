// app/services/websites/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// --- Icons ---
const GlobeIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export default function WebsitesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white antialiased overflow-x-hidden font-sans">
      {/* Premium Navigation - Updated per your request */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <GlobeIcon />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">
                Rams<span className="text-amber-500">Trading</span> 
                <span className="text-slate-400 text-lg font-medium ml-2 border-l border-slate-800 pl-3 uppercase tracking-widest">
                  Websites
                </span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-[10px] font-black tracking-[0.2em] uppercase">
              <button onClick={() => scrollTo("features")} className="text-slate-400 hover:text-white transition-colors">Stack</button>
              <button onClick={() => scrollTo("pricing")} className="text-slate-400 hover:text-white transition-colors">Plans</button>
              <button onClick={() => scrollTo("contact")} className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
                DEPLOY SITE
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
             <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt="Digital Interface"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 italic uppercase">
              Digital <br /><span className="text-amber-500 underline decoration-amber-500/30">Architecture.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-bold uppercase tracking-widest italic">
              High-Speed • Mobile-First • Lead-Gen Ready
            </p>
          </div>
        </section>

        {/* TECH STACK MARQUEE */}
        <section className="py-10 bg-slate-900/50 border-y border-slate-800 overflow-hidden">
           <div className="flex space-x-20 animate-pulse whitespace-nowrap justify-center opacity-40 grayscale hover:grayscale-0 transition-all">
              {['NEXT.JS', 'TAILWIND CSS', 'TYPESCRIPT', 'VERCEL', 'STRIPE', 'AWS'].map((tech, i) => (
                 <span key={i} className="text-xl md:text-3xl font-black tracking-widest">{tech}</span>
              ))}
           </div>
        </section>

        {/* PERFORMANCE VISUAL */}
        <section id="features" className="py-24">
           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-5xl font-black mb-8 italic tracking-tighter uppercase leading-tight">Built for <br /><span className="text-amber-500">Speed & Scale.</span></h2>
                 <div className="space-y-8">
                    {[
                      { t: "99.9% Uptime", d: "Your business is always open, hosted on world-class infrastructure." },
                      { t: "SEO Dominance", d: "We build with Google's 'Core Web Vitals' in mind to push you to page 1." },
                      { t: "Instant Mobile Loading", d: "South African mobile networks vary; our sites load in under 1.2s." }
                    ].map((f, i) => (
                       <div key={i} className="flex space-x-5">
                          <div className="mt-1"><CodeIcon /></div>
                          <div>
                             <h4 className="text-xl font-black uppercase tracking-tight">{f.t}</h4>
                             <p className="text-slate-400 font-medium">{f.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Advanced Performance UI */}
              <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 px-6 py-2 font-black text-[10px] uppercase italic">Real-Time Core Metrics</div>
                 <div className="space-y-8 mt-4">
                    {[
                      { label: "Performance", val: 100 },
                      { label: "Accessibility", val: 98 },
                      { label: "Best Practices", val: 100 },
                      { label: "SEO", val: 95 }
                    ].map((stat, i) => (
                       <div key={i}>
                          <div className="flex justify-between mb-2">
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</span>
                             <span className="text-amber-500 font-black tracking-tighter">{stat.val}%</span>
                          </div>
                          <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                             <div 
                                style={{ width: `${stat.val}%` }} 
                                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all duration-1000"
                             ></div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
{/* NEW: DEVELOPMENT PIPELINE SECTION */}
        <section className="py-24 border-t border-slate-900">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                 <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">The Execution Phase</span>
                 <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mt-4">From Blueprint <br />to <span className="text-white underline decoration-amber-500 underline-offset-8">Live Link.</span></h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { step: "01", title: "Strategy & Wireframe", desc: "We map out the user journey and architecture to ensure every click leads to a sale." },
                   { step: "02", title: "High-Fidelity Build", desc: "Our engineers develop your site using the Next.js stack for ultimate speed and security." },
                   { step: "03", title: "Global Deployment", desc: "Rigorous testing across all devices before pushing your brand live to the world." }
                 ].map((item, i) => (
                    <div key={i} className="relative p-10 bg-slate-900/20 border border-slate-800 rounded-[2.5rem] group hover:border-amber-500/50 transition-all">
                       <div className="text-6xl font-black text-slate-800/30 group-hover:text-amber-500/20 transition-colors absolute top-6 right-8 italic">
                          {item.step}
                       </div>
                       <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tighter text-white">{item.title}</h3>
                       <p className="text-slate-400 font-medium leading-relaxed">
                          {item.desc}
                       </p>
                    </div>
                 ))}
              </div>
           </div>
        </section>
        
        {/* PRICING PLANS */}
        <section id="pricing" className="py-24 bg-slate-900/30">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8">
                 {/* Retainer/Maintenance - Your specific pricing */}
                 <div className="lg:col-span-2 bg-gradient-to-br from-amber-500 to-amber-700 p-[1px] rounded-[3rem]">
                    <div className="bg-[#020617] h-full w-full rounded-[2.9rem] p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                       <div className="max-w-sm">
                          <h3 className="text-4xl font-black uppercase italic mb-4 tracking-tighter">Elite Maintenance</h3>
                          <p className="text-slate-400 font-bold mb-8 italic">We host it. We secure it. You grow it. Never worry about updates or bugs again.</p>
                          <ul className="grid grid-cols-2 gap-y-3 font-black text-[9px] uppercase tracking-widest text-slate-300">
                             <li>✓ Ultra-Fast Hosting</li>
                             <li>✓ SSL Security</li>
                             <li>✓ Daily Backups</li>
                             <li>✓ Support Desk</li>
                          </ul>
                       </div>
                       <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-slate-800 pt-8 md:pt-0 md:pl-12">
                          <div className="mb-6">
                             <span className="text-slate-500 block font-black text-[10px] uppercase mb-1">Activation Fee</span>
                             <span className="text-5xl font-black text-white italic tracking-tighter">R1,000</span>
                          </div>
                          <div>
                             <span className="text-amber-500 block font-black text-[10px] uppercase mb-1">Monthly Cloud Hosting</span>
                             <span className="text-6xl font-black text-white italic tracking-tighter">R30 <span className="text-xl text-slate-600 font-medium tracking-normal">/mo</span></span>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Development Pack */}
                 <div className="bg-slate-950 border border-slate-800 p-12 rounded-[3rem] text-center flex flex-col justify-center">
                    <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-4">Build Phase</span>
                    <h3 className="text-3xl font-black uppercase italic mb-4">One-Off Build</h3>
                    <p className="text-slate-500 font-bold text-sm mb-10 italic">Custom design, professional copywriting, and mobile optimization.</p>
                    <button onClick={() => scrollTo("contact")} className="w-full py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-amber-500 transition-all uppercase tracking-tighter italic shadow-xl">Request Quote</button>
                 </div>
              </div>
           </div>
        </section>

        {/* IMPACT STATS */}
        <section className="py-24 border-y border-slate-900">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { n: "1.2s", t: "Avg Load Speed" },
                { n: "100%", t: "Mobile Responsive" },
                { n: "SEO+", t: "Google Ready" },
                { n: "SA", t: "Locally Hosted" }
              ].map((s, i) => (
                 <div key={i}>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 italic">{s.n}</div>
                    <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">{s.t}</div>
                 </div>
              ))}
           </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="inline-flex items-center space-x-3 mb-12 bg-slate-900 px-6 py-2 rounded-full border border-slate-800">
                 <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Development Slot Available</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 italic tracking-tighter uppercase">Let's <span className="text-amber-500">Deploy.</span></h2>
              <button className="px-16 py-8 bg-white text-slate-950 font-black text-3xl rounded-[2.5rem] hover:bg-amber-500 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)] mb-8 w-full md:w-auto">
                 +27 69 821 8311
              </button>
              <p className="text-slate-600 font-black uppercase tracking-[0.3em] text-[10px]">Send "Website" to WhatsApp for a custom proposal</p>
           </div>
        </section>

        <footer className="py-12 border-t border-slate-900 text-center text-slate-800 text-[10px] font-black uppercase tracking-[0.6em]">
           Rams Trading Web Division • Pretoria • 2026
        </footer>
      </div>
    </div>
  );
}