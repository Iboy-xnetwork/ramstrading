// app/services/forex/page.tsx
"use client";

import { useState } from "react";

// --- Improved Trading Icon ---
const ChartLineIcon = () => (
  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export default function ForexPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white antialiased overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 border border-amber-500/50 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <ChartLineIcon />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">
                Rams<span className="text-amber-500">Trading</span> 
                <span className="text-slate-400 text-[10px] font-black ml-2 border-l border-slate-800 pl-3 uppercase tracking-[0.3em]">Forex</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
              <button onClick={() => scrollTo("results")} className="hover:text-amber-500">Wall of Profit</button>
              <button onClick={() => scrollTo("curriculum")} className="hover:text-amber-500">Course Details</button>
              <button onClick={() => scrollTo("pricing")} className="hover:text-amber-500">Pricing</button>
              <button onClick={() => scrollTo("contact")} className="bg-amber-500 text-slate-950 px-8 py-3 rounded-full shadow-lg font-black italic">Enroll Now</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden text-center px-6">
          <div className="absolute inset-0 z-0 opacity-30">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)]"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 italic uppercase">
              Trade <br /><span className="text-amber-500 underline decoration-amber-500/30 underline-offset-12">Elite.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-bold uppercase tracking-widest italic mb-10">
              NAS100 • SMC • High-Frequency Profits
            </p>
            <button onClick={() => scrollTo("pricing")} className="px-12 py-6 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-2xl rounded-2xl shadow-2xl transition-all uppercase italic">
              Join the 2026 Intake
            </button>
          </div>
        </section>

        {/* GROWTH GRAPH */}
        <section id="results" className="py-24 bg-slate-900/20">
           <div className="max-w-7xl mx-auto px-6">
              <div className="bg-slate-950 border border-slate-800 rounded-[3rem] p-8 md:p-16 shadow-3xl">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                       <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter italic">Student <span className="text-amber-500">Growth</span></h2>
                       <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Verified SMC Strategy Results</p>
                    </div>
                    <div className="text-right">
                       <span className="block text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Equity Gain</span>
                       <span className="text-5xl font-black text-emerald-400 italic">+412.5%</span>
                    </div>
                 </div>
                 <div className="h-64 w-full flex items-end space-x-2 md:space-x-4">
                    {[30, 45, 35, 60, 55, 80, 75, 100, 120, 110, 150, 190, 240].map((height, i) => (
                       <div key={i} style={{ height: `${(height / 240) * 100}%` }} className="flex-1 bg-gradient-to-t from-amber-600/50 to-amber-500 rounded-t-lg relative group transition-all hover:scale-110">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                             R{(height * 100).toLocaleString()}
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* SUCCESS STORIES - WALL OF PROFIT */}
        <section className="py-24 border-y border-slate-900 bg-slate-950">
           <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">Wall Of <span className="text-amber-500 underline underline-offset-8">Profit</span></h2>
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-[2.5rem] relative group hover:border-amber-500/50 transition-all">
                    <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-950 font-black px-4 py-1 rounded-full text-xs italic shadow-xl">Top Student</div>
                    <h3 className="text-xl font-black uppercase italic mb-2 text-white">Iboy Mohlol</h3>
                    <p className="text-slate-500 font-bold text-xs uppercase mb-6 tracking-widest">Advanced Mastery</p>
                    <p className="text-slate-400 italic mb-8 leading-relaxed">"I started with R5k and after learning SMC with RamsTrading, I managed to flip my account to R35k in just 2 months."</p>
                    <div className="text-emerald-400 font-black text-2xl italic tracking-tighter">+1,240 Pips Gained</div>
                 </div>
                 <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-[2.5rem] transition-all">
                    <h3 className="text-xl font-black uppercase italic mb-2 text-white">Thabo M.</h3>
                    <p className="text-slate-500 font-bold text-xs uppercase mb-6 tracking-widest">Prop Firm Funding</p>
                    <p className="text-slate-400 italic mb-8 leading-relaxed">"Passed my 50k Prop Firm Challenge on the first try. The supply/demand zones are absolute magic."</p>
                    <div className="text-amber-500 font-black text-2xl italic tracking-tighter">R92,000 Payout</div>
                 </div>
                 <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-[2.5rem] transition-all">
                    <h3 className="text-xl font-black uppercase italic mb-2 text-white">Lerato N.</h3>
                    <p className="text-slate-500 font-bold text-xs uppercase mb-6 tracking-widest">Beginner Level</p>
                    <p className="text-slate-400 italic mb-8 leading-relaxed">"Beginner course was so easy to follow. I now trade NAS100 confidently every morning before work."</p>
                    <div className="text-emerald-400 font-black text-2xl italic tracking-tighter">Consistent Profits</div>
                 </div>
              </div>
           </div>
        </section>

        {/* BLUEPRINT PIPELINE SECTION */}
        <section className="py-24">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                 <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">The Execution Phase</span>
                 <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mt-4">Blueprint to <br /><span className="text-white underline decoration-amber-500 underline-offset-8">Funded.</span></h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { step: "01", title: "SMC Foundations", desc: "Understanding market structure, liquidity, and the algorithm behind bank movements." },
                   { step: "02", title: "Execution Edge", desc: "Developing your edge on NAS100 & Gold using high-frequency refinement." },
                   { step: "03", title: "Global Scaling", desc: "Going live or taking on Prop Firm funding to scale your trading career." }
                 ].map((item, i) => (
                    <div key={i} className="relative p-10 bg-slate-900/20 border border-slate-800 rounded-[2.5rem] group hover:border-amber-500/50 transition-all">
                       <div className="text-6xl font-black text-slate-800/30 group-hover:text-amber-500/20 transition-colors absolute top-6 right-8 italic">{item.step}</div>
                       <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tighter text-white">{item.title}</h3>
                       <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* NEW: TECHNICAL SYLLABUS SECTION */}
        <section id="curriculum" className="py-24 bg-slate-950 border-t border-slate-900">
           <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                 <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">Technical Syllabus</span>
                 <h2 className="text-5xl font-black italic uppercase tracking-tighter mt-4">Advanced Mastery <br />Modules</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                 <div className="border-l-2 border-amber-500 pl-8">
                    <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">Institutional Structure</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">Break of Structure (BOS), Change of Character (CHoCH), and Inducement (IDM). Mapping high-probability price action.</p>
                 </div>
                 <div className="border-l-2 border-amber-500 pl-8">
                    <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">Liquidity Concepts</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">Internal vs External range liquidity. Understanding "Sell-side" and "Buy-side" traps set by central banks.</p>
                 </div>
                 <div className="border-l-2 border-amber-500 pl-8">
                    <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">Entry Refinement</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">The M15 to M1 entry blueprint. Using Fair Value Gaps (FVG) and Order Blocks for sniper execution.</p>
                 </div>
                 <div className="border-l-2 border-amber-500 pl-8">
                    <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">Prop Firm Blueprint</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">Detailed management for 100k+ accounts. Trading the New York Open (NAS100/US30) session only.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* PRICING & RETAINER */}
        <section id="pricing" className="py-24 bg-slate-900/30">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8">
                 {/* Retainer Package */}
                 <div className="lg:col-span-2 bg-gradient-to-br from-amber-500 to-amber-700 p-[1px] rounded-[3rem] shadow-2xl">
                    <div className="bg-[#020617] h-full w-full rounded-[2.9rem] p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                       <div className="max-w-sm">
                          <h3 className="text-4xl font-black uppercase italic mb-4 tracking-tighter text-white">Signal Community</h3>
                          <p className="text-slate-400 font-bold mb-8 italic">Get daily analysis, high-probability signals, and SMC chart monitoring.</p>
                          <ul className="grid grid-cols-2 gap-y-3 font-black text-[9px] uppercase tracking-widest text-slate-300">
                             <li>✓ Daily Signal Alerts</li>
                             <li>✓ Weekly Webinars</li>
                             <li>✓ VIP Community</li>
                             <li>✓ Risk Blueprints</li>
                          </ul>
                       </div>
                       <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-slate-800 pt-8 md:pt-0 md:pl-12">
                          <div className="mb-6">
                             <span className="text-slate-500 block font-black text-[10px] uppercase mb-1 tracking-widest">Entry Fee</span>
                             <span className="text-5xl font-black text-white italic tracking-tighter">R1,000</span>
                          </div>
                          <div>
                             <span className="text-amber-500 block font-black text-[10px] uppercase mb-1 tracking-widest">Monthly Sub</span>
                             <span className="text-6xl font-black text-white italic tracking-tighter">R30 <span className="text-xl text-slate-600 font-medium tracking-normal">/mo</span></span>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Advanced Course - ADDED CHECKLIST HERE */}
                 <div className="bg-slate-950 border border-slate-800 p-12 rounded-[3rem] flex flex-col hover:border-amber-500/50 transition-all">
                    <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-4">Elite Mentorship</span>
                    <h3 className="text-3xl font-black uppercase italic mb-4 text-white">Advanced Mastery</h3>
                    <div className="text-3xl font-black mb-6 text-white italic tracking-tighter">R5,000</div>
                    <ul className="space-y-4 mb-10 border-t border-slate-800 pt-8 flex-grow">
                        {["Lifetime Access", "1-on-1 Strategy Session", "NAS100 Blitz Guide", "Prop Firm Support"].map((item, i) => (
                            <li key={i} className="flex items-center space-x-3 text-xs font-bold uppercase text-slate-300">
                                <span className="text-amber-500">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => scrollTo("contact")} className="w-full py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-amber-500 transition-all uppercase tracking-tighter italic">Enroll Now</button>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-32">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="inline-flex items-center space-x-3 mb-12 bg-slate-900 px-6 py-2 rounded-full border border-slate-800">
                 <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Next Intake: Feb 2026</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 italic tracking-tighter uppercase text-white leading-none">Master Your <span className="text-amber-500">Capital.</span></h2>
              <button className="px-16 py-8 bg-white text-slate-950 font-black text-3xl rounded-[2.5rem] hover:bg-amber-500 transition-all shadow-2xl mb-8 w-full md:w-auto">
                 +27 69 821 8311
              </button>
              <p className="text-slate-600 font-black uppercase tracking-[0.3em] text-[10px]">WhatsApp "PRO" to claim your seat</p>
           </div>
        </section>

        <footer className="py-12 border-t border-slate-900 text-center text-slate-800 text-[10px] font-black uppercase tracking-[0.6em]">
           Rams Trading Forex Education • South Africa's Choice • 2026
        </footer>
      </div>
    </div>
  );
}