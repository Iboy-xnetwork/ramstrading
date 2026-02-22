// app/services/cleaning/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// --- Icons ---
const SparklesIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 15L17.5 17.625l-.75-2.625a2.25 2.25 0 00-1.545-1.545l-2.625-.75 2.625-.75a2.25 2.25 0 001.545-1.545l.75-2.625.75 2.625a2.25 2.25 0 001.545 1.545l2.625.75-2.625.75a2.25 2.25 0 00-1.545 1.545z" />
  </svg>
);

export default function CleaningPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    details: ''
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cleaning Quote Request:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      {/* Navigation - Unique Iconic Header */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-amber-500 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:rotate-12 transition-transform">
                <SparklesIcon />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Rams<span className="text-amber-500">Trading</span> 
                <span className="text-slate-400 text-xl font-light ml-2 border-l border-slate-700 pl-3 hidden sm:inline">
                   Cleaning & Shining
                </span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo("services")} className="text-slate-300 hover:text-amber-500 font-medium">Services</button>
              <button onClick={() => scrollTo("contact")} className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-amber-500/20">
                Book A Shine
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1527515545081-5db817172677?w=1600&auto=format&fit=crop&q=80"
              alt="Immaculate South African Home"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-400 text-sm font-bold uppercase tracking-widest mb-6">
                Serving Gauteng, KZN & Western Cape
              </span>
              <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8">
                Professional <br />
                <span className="text-amber-500 italic">Shining</span> & Pure Clean.
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed">
                Specialized post-funeral venue dignity, high-end wedding restoration, and premium residential cleaning starting from <span className="text-white font-bold text-2xl">R1000</span> once-off.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo("contact")} className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-lg rounded-2xl transition-all shadow-xl hover:-translate-y-1">
                  REQUEST A QUOTE
                </button>
                <button onClick={() => scrollTo("services")} className="px-10 py-5 border-2 border-slate-700 hover:border-amber-500 text-white font-bold text-lg rounded-2xl transition-all backdrop-blur-sm">
                  VIEW SPECIALTIES
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Cards */}
        <section id="services" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our <span className="text-amber-500">Service Tiers</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Expert cleaning for South Africa's most important moments.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Post-Funeral Dignity",
                  price: "Custom Quote",
                  img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop&q=60",
                  details: "Sensitive restoration of family homes and community halls. Discreet, rapid, and respectful handling of venues during mourning periods."
                },
                {
                  title: "Luxury Wedding Clean",
                  price: "From R2500",
                  img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60",
                  details: "Complete after-party restoration. We remove all event traces, polish floors, and restore glass surfaces to a diamond-grade shine."
                },
                {
                  title: "Residential Shining",
                  price: "From R1000",
                  img: "https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?w=600&auto=format&fit=crop&q=60",
                  details: "Deep cleaning for homes and apartments. Includes windows, upholstery, and hard-to-reach areas. Monthly maintenance (R30/m retainer) available."
                }
              ].map((service, i) => (
                <div key={i} className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all group shadow-2xl">
                  <div className="relative h-64">
                    <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <span className="text-amber-500 font-bold text-sm bg-amber-500/10 px-3 py-1 rounded-full">{service.price}</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6">{service.details}</p>
                    <button onClick={() => scrollTo("contact")} className="w-full py-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-amber-500 hover:text-slate-950 transition-all font-bold">SELECT SERVICE</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Quote Form */}
        <section id="contact" className="py-24 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 lg:p-16 rounded-[3rem] border border-amber-500/20 relative overflow-hidden shadow-3xl">
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-black mb-4">Request a <span className="text-amber-500 text-shimmer">Quote</span></h2>
                <p className="text-slate-400 mb-12">Enter your details and our sanitation team will contact you within 60 minutes.</p>

                {submitted ? (
                  <div className="bg-emerald-500/20 border border-emerald-500/50 p-8 rounded-2xl text-center animate-in zoom-in">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">Request Received!</h3>
                    <p className="text-slate-300">We are reviewing your details and will call/WhatsApp you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                        <input name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 focus:border-amber-500 focus:outline-none" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                        <input name="phone" required type="tel" value={formData.phone} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 focus:border-amber-500 focus:outline-none" placeholder="+27 69 000 0000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input name="email" required type="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 focus:border-amber-500 focus:outline-none" placeholder="your@email.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Physical Address / Venue Location</label>
                      <input name="address" required value={formData.address} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 focus:border-amber-500 focus:outline-none" placeholder="e.g. Sandton, Johannesburg" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Type of Quote</label>
                      <select name="serviceType" required value={formData.serviceType} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 focus:border-amber-500 focus:outline-none appearance-none">
                        <option value="">Select a service...</option>
                        <option value="residential">Residential House Cleaning</option>
                        <option value="funeral">Post-Funeral Venue Clean</option>
                        <option value="wedding">Wedding / Event Restoration</option>
                        <option value="supplies">Bulk Cleaning Supplies</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Specific Details / Message</label>
                      <textarea name="details" rows={4} value={formData.details} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 focus:border-amber-500 focus:outline-none" placeholder="Tell us about the space or special requirements..."></textarea>
                    </div>

                    <button type="submit" className="w-full py-6 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xl rounded-[2rem] shadow-2xl transition-all active:scale-95">
                      GET QUOTE NOW
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center">
          <p className="text-slate-500 text-sm">© 2026 Rams Trading Cleaning & Shining. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}