// app/services/logistics/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Service Images ─────────────────────────────────────────────────────
const ServiceTruckImage = () => (
  <div className="w-32 h-32 relative rounded-2xl overflow-hidden shadow-2xl mx-auto mb-8">
    <Image
      src="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=800&auto=format&fit=crop&q=80"
      alt="Farm transport truck"
      fill
      className="object-cover"
    />
  </div>
);

const ServiceTrailerImage = () => (
  <div className="w-32 h-32 relative rounded-2xl overflow-hidden shadow-2xl mx-auto mb-8">
    <Image
      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80"
      alt="Agricultural trailer"
      fill
      className="object-cover"
    />
  </div>
);

const ServiceDriverImage = () => (
  <div className="w-32 h-32 relative rounded-2xl overflow-hidden shadow-2xl mx-auto mb-8">
    <Image
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
      alt="Professional driver"
      fill
      className="object-cover"
    />
  </div>
);

const ShieldCheckIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default function LogisticsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    quoteType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
    // Frontend-only: Simulate submission (e.g., log to console)
    console.log('Quote Request Submitted:', formData);
    setSubmitted(true);
    // Reset form after "submission"
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      quoteType: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      {/* Navigation – premium glassmorphism style */}
     {/* Navigation – Premium "Command Center" Style */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-amber-500/20 shadow-2xl transition-all duration-300">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      
      {/* Logistics Branding */}
      <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollTo("hero")}>
        <div className="relative flex items-center justify-center w-10 h-10 bg-amber-500 rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-300">
          <span className="text-slate-950 font-black text-xl -rotate-3">C</span>
          <div className="absolute -inset-1 border border-amber-500/50 rounded-lg animate-pulse"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-tighter text-white leading-none uppercase">
            Core<span className="text-amber-500">Logistics</span>
          </span>
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fleet Active</span>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <button onClick={() => scrollTo("hero")} className="text-slate-400 hover:text-amber-500 text-[10px] uppercase tracking-[0.2em] font-black transition-colors">Home</button>
        <button onClick={() => scrollTo("fleet")} className="text-slate-400 hover:text-amber-500 text-[10px] uppercase tracking-[0.2em] font-black transition-colors">Our Fleet</button>
        <button onClick={() => scrollTo("services")} className="text-slate-400 hover:text-amber-500 text-[10px] uppercase tracking-[0.2em] font-black transition-colors">Transport</button>
        <div className="h-6 w-[1px] bg-slate-800 mx-2"></div>
        <button onClick={() => scrollTo("contact")} className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all active:scale-95 italic">
          Request Quote
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-amber-500 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <div className="space-y-1.5">
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>
    </div>
  </div>

  {/* Mobile Menu Overlay */}
  <div className={`fixed inset-0 top-20 bg-slate-950 z-40 transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className="p-8 space-y-6">
      <button onClick={() => scrollTo("hero")} className="block w-full text-left text-2xl font-black uppercase italic tracking-tighter text-slate-400 hover:text-amber-500">01. Home</button>
      <button onClick={() => scrollTo("fleet")} className="block w-full text-left text-2xl font-black uppercase italic tracking-tighter text-slate-400 hover:text-amber-500">02. Fleet</button>
      <button onClick={() => scrollTo("services")} className="block w-full text-left text-2xl font-black uppercase italic tracking-tighter text-slate-400 hover:text-amber-500">03. Transport</button>
      <div className="h-[1px] bg-slate-900 my-4"></div>
      <button onClick={() => scrollTo("contact")} className="block w-full text-center bg-amber-500 text-slate-950 font-black py-6 rounded-[2rem] text-xl uppercase italic">Request Quote</button>
    </div>
  </div>
</nav>

      <div className="pt-16 lg:pt-20">

        {/* Hero with farm truck background */}
        <section id="hero" className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/30 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=1920&auto=format&fit=crop&q=80"
              alt="Farm transport truck"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center lg:text-left">
            <span className="inline-block px-6 py-3 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-400 font-semibold mb-8">
              Reliable • Efficient • Nationwide
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
              Logistics & <span className="text-amber-500">Transportation</span> Solutions
            </h1>

            <p className="mt-8 text-xl lg:text-2xl text-slate-300 max-w-3xl">
              Vehicle & trailer rentals, professional driver hiring, and full end-to-end transportation across South Africa – built for your business.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button onClick={() => scrollTo("contact")} className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg rounded-xl shadow-xl hover:shadow-amber-500/30 transition-all hover:-translate-y-1">
                Request a Quote
              </button>
              <button onClick={() => scrollTo("fleet")} className="px-10 py-5 border-2 border-amber-500/50 hover:border-amber-500 text-amber-400 font-bold text-lg rounded-xl transition-all hover:bg-amber-500/10">
                View Fleet
              </button>
            </div>
          </div>
        </section>

        {/* Fleet / Services Breakdown */}
        <section id="fleet" className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Our <span className="text-amber-500">Fleet & Services</span>
              </h2>
              <p className="mt-5 text-xl text-slate-400 max-w-3xl mx-auto">
                High-quality vehicles and trailers ready for short-term or long-term rental – plus full transportation management.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ServiceTruckImage,
                  title: "Vehicle Rental",
                  desc: "Modern trucks, bakkies, and commercial vehicles available for daily, weekly, or monthly hire. Maintained to the highest standards.",
                },
                {
                  icon: ServiceTrailerImage,
                  title: "Trailer Rental",
                  desc: "Tautliners, flatdecks, side tippers, refrigerated, bottom dumpers – wide range to suit mining, construction, retail & more.",
                },
                {
                  icon: ServiceDriverImage,
                  title: "Professional Hiring",
                  desc: "Experienced, licensed drivers available for short or long-term contracts – ensuring safe, reliable delivery every time.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-10 hover:border-amber-500/50 transition-all group hover:-translate-y-2"
                >
                  <item.icon />
                  <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Why Choose Rams Trading <span className="text-amber-500">Logistics</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Nationwide Coverage", desc: "Serving every province in South Africa with reliable routes and quick response." },
                { title: "Competitive Rates", desc: "Affordable short & long-term rentals without hidden fees." },
                { title: "Well-Maintained Fleet", desc: "Regular servicing and inspections for maximum uptime & safety." },
                { title: "24/7 Support", desc: "Dedicated team available round-the-clock for emergencies & queries." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-amber-500/40 transition-all group">
                  <div className="text-amber-500 mb-4 group-hover:scale-110 transition flex justify-center">
                    <ShieldCheckIcon />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
                  <p className="text-slate-400 text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact with functional frontend form */}
        <section id="contact" className="py-24 bg-amber-600/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Move Your Load?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Fill out the form below for a fast, no-obligation quote tailored to your transportation needs. Our team will review and get back to you promptly.
            </p>

            {submitted ? (
              <div className="bg-green-600/20 border border-green-500/40 rounded-2xl p-8 text-green-300">
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p>Your quote request has been submitted. A member of our team will contact you shortly via email or WhatsApp.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 max-w-xl mx-auto">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-slate-300 mb-2 font-medium">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-all"
                      placeholder="+27 69 821 8311"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-slate-300 mb-2 font-medium">Location *</label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-all"
                      placeholder="e.g., Johannesburg, Gauteng"
                    />
                  </div>

                  <div>
                    <label htmlFor="quoteType" className="block text-slate-300 mb-2 font-medium">Type of Quote *</label>
                    <select
                      id="quoteType"
                      name="quoteType"
                      required
                      value={formData.quoteType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-all appearance-none"
                    >
                      <option value="">Select type...</option>
                      <option value="vehicle_rental">Vehicle Rental</option>
                      <option value="trailer_rental">Trailer Rental</option>
                      <option value="driver_hiring">Driver Hiring</option>
                      <option value="full_transport">Full End-to-End Transport</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">Message / Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-all"
                      placeholder="Describe your needs, e.g., 'Need a tautliner trailer for farm produce transport from Limpopo to Gauteng'"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg rounded-xl shadow-xl hover:shadow-amber-500/30 transition-all hover:-translate-y-1"
                  >
                    Submit Quote Request
                  </button>

                  <p className="mt-4 text-slate-400 text-sm text-center">
                    We value your privacy. Your details are secure and will only be used to process your quote request.
                  </p>
                </div>
              </form>
            )}
            <div className="mt-12 text-slate-400 text-lg">
              Email: info@ramstrading.co.za <br />
              WhatsApp: +27 69 821 8311 <br />
              Available 24/7 for urgent requests
            </div>
          </div>
        </section>

        {/* Footer – minimal */}
        <footer className="py-12 bg-slate-950 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Rams Trading. All rights reserved. | Logistics Division
        </footer>
      </div>
    </div>
  );
}