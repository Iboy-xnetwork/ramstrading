// app/page.tsx
"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";
type ServiceId =
  | "logistics"
  | "cleaning"
  | "forex"
  | "brands"
  | "websites";

// ─── Icons (real SVGs) ──────────────────────────────────────────────────
const TruckIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h.01M16 17h.01M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zm-8 0H5.5A1.5 1.5 0 014 15.5v-7A1.5 1.5 0 015.5 7H14v8.5a1.5 1.5 0 01-1.5 1.5H8zm8 0h1.5a1.5 1.5 0 001.5-1.5v-4.793a1.5 1.5 0 00-.44-1.06l-2.707-2.708A1.5 1.5 0 0015.293 7H14v10h2z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16a1 1 0 001 1h14a1 1 0 001-1V4" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CurrencyIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const HeadphonesIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// ─── Service Icons with Unsplash images ──────────────────────────────────
const ServiceTruckImage = () => (
  <div className="w-24 h-24 relative rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80"
      alt="Logistics truck"
      fill
      className="object-cover"
    />
  </div>
);

const ServiceCleanImage = () => (
  <div className="w-24 h-24 relative rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"
      alt="Clean shining surface"
      fill
      className="object-cover"
    />
  </div>
);

const ServiceForexImage = () => (
  <div className="w-24 h-24 relative rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80"
      alt="Forex trading chart"
      fill
      className="object-cover"
    />
  </div>
);

const ServiceBrandImage = () => (
  <div className="w-24 h-24 relative rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80"
      alt="Brand marketing"
      fill
      className="object-cover"
    />
  </div>
);

const ServiceWebImage = () => (
  <div className="w-24 h-24 relative rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
      alt="Website development"
      fill
      className="object-cover"
    />
  </div>
);

// Map icons to services
const serviceIcons: { [key in ServiceId]: () => JSX.Element } = {
  logistics: ServiceTruckImage,
  cleaning: ServiceCleanImage,
  forex: ServiceForexImage,
  brands: ServiceBrandImage,
  websites: ServiceWebImage,
};

// ─── Data ───────────────────────────────────────────────────────────────
const services: Array<{ id: ServiceId; title: string; description: string; link: string }> = [
  {
    id: "logistics",
    title: "Logistics & Transportation",
    description: "Comprehensive vehicle & trailer rental, professional driver hiring, and complete end-to-end transportation solutions tailored to your needs.",
    link: "/services/logistics",
  },
  {
    id: "cleaning",
    title: "Cleaning & Shining Services",
    description: "Professional post-funeral, event & party venue cleaning. We also supply high-quality soap, bleach, tissues and cleaning materials.",
    link: "/services/cleaning",
  },
  {
    id: "forex",
    title: "Forex Trading & Education",
    description: "Beginner classes (R2,000–R5,000), one-on-one mentorship programs, professional trading tools & educational materials.",
    link: "/services/forex",
  },
  {
    id: "brands",
    title: "Brands & Promotion",
    description: "Strategic brand marketing, targeted promotion campaigns and product sales support to help businesses grow faster.",
    link: "/services/brands",
  },
  {
    id: "websites",
    title: "Website Development",
    description: "Modern, responsive, custom websites built specifically for small businesses — helping you establish a strong online presence.",
    link: "/services/websites",
  },
];

const whyChooseUs = [
  { title: "Professional Team", description: "Skilled experts committed to excellence in every project.", icon: UsersIcon },
  { title: "Affordable Pricing", description: "Competitive rates with no compromise on quality.", icon: CurrencyIcon },
  { title: "Reliable Service", description: "We deliver on time and keep every promise made.", icon: ShieldIcon },
  { title: "24/7 Support", description: "Always available when you need assistance.", icon: HeadphonesIcon },
];

// ─── Main Component ─────────────────────────────────────────────────────
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white antialiased">
      {/* ─── Navigation ────────────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-700/50 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">
                Rams<span className="text-amber-500">Trading</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {["Home", "About", "Services", "Why Us", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === "Home" ? "hero" : item.toLowerCase().replace(" ", "-"))}
                  className={`text-base font-medium transition-all duration-300 hover:scale-105 hover:text-amber-400 ${
                    item === "Contact"
                      ? "bg-amber-500 hover:bg-amber-600 text-slate-950 px-7 py-3 rounded-xl shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5"
                      : "text-slate-200 hover:text-amber-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden text-amber-400 p-3 rounded-xl hover:bg-slate-800/60 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/90 backdrop-blur-xl border-t border-slate-700/50">
            <div className="px-6 py-8 space-y-5">
              {["Home", "About", "Services", "Why Us", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === "Home" ? "hero" : item.toLowerCase().replace(" ", "-"))}
                  className="block w-full text-left text-xl font-medium text-slate-200 hover:text-amber-400 py-4 px-6 rounded-xl hover:bg-slate-800/50 transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16 lg:pt-20">

        {/* ─── HERO ────────── */}
        <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&auto=format&fit=crop&q=80"
              alt="Modern business multi-service background"
              fill
              className="object-cover brightness-[0.35]"
              priority
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-10">
              <span className="text-amber-400 text-sm font-semibold tracking-wide">PREMIUM MULTI-SERVICE SOLUTIONS</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Rams<span className="text-amber-500">Trading</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-slate-300 font-light max-w-3xl">
              Delivering Excellence Across Multiple Industries
            </p>

            <p className="mt-6 text-lg text-slate-400 max-w-2xl">
              Logistics • Cleaning • Forex Education • Brand Promotion • Professional Websites
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("services")}
                className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-lg rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all hover:-translate-y-1"
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-10 py-5 border-2 border-slate-600 hover:border-slate-500 text-white font-semibold text-lg rounded-xl transition-all hover:bg-slate-800"
              >
                Get in Touch
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-700/50">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-500">5+</div>
                <div className="text-slate-400 mt-1">Service Lines</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-500">100+</div>
                <div className="text-slate-400 mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-500">24/7</div>
                <div className="text-slate-400 mt-1">Support</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-500">100%</div>
                <div className="text-slate-400 mt-1">Commitment</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* ─── ABOUT ─────────────────────────────────────────────────────── */}
        <section id="about" className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Building Trust Through <span className="text-amber-500">Excellence</span>
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Rams Trading is a dynamic multi-service company committed to delivering innovative solutions across diverse industries. From transportation and logistics to professional cleaning services, forex education, brand marketing, and web development — we bring expertise and dedication to every project.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our foundation is built on reliability, professionalism, and an unwavering commitment to customer satisfaction.
                </p>

                <div className="space-y-4">
                  {["Innovation-Driven Solutions", "Customer-Centric Approach", "Quality Guaranteed"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                        <CheckCircleIcon />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl lg:text-8xl font-bold text-white mb-4">RT</div>
                      <div className="text-amber-500 text-xl font-semibold">Since Establishment</div>
                      <div className="text-slate-400 mt-2">Your Trusted Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ──────────────────────────────────────────────────── */}
        <section id="services" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Comprehensive Business <span className="text-amber-500">Solutions</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                Discover our wide range of professional services designed to help your business thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const key = service.id as ServiceId;
                const IconComponent = serviceIcons[key];
                return (
                  <div
                    key={service.id}
                    className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{service.title}</h3>
                    <p className="text-slate-600 mb-6 text-center">{service.description}</p>
                    <div className="text-center">
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─────────────────────────────────────────────── */}
        <section id="why-us" className="py-24 lg:py-32 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold border border-amber-500/20 mb-6">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                The Rams Trading <span className="text-amber-500">Advantage</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason) => (
                <div
                  key={reason.title}
                  className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 transition-all group hover:-translate-y-1"
                >
                  <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform flex justify-center">
                    <reason.icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{reason.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-center">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-amber-500 to-amber-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Partner with Rams Trading today and experience professional, dedicated service.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-lg transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              Get Started Today
            </button>
          </div>
        </section>

        {/* ─── CONTACT ───────────────────────────────────────────────────── */}
        <section id="contact" className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Contact <span className="text-amber-500">Information</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600 text-3xl">
                  ✉
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600">info@ramstrading.co.za</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600 text-3xl">
                  ☎
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Call / WhatsApp</h3>
                <p className="text-slate-600">+27 69 821 8311</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600 text-3xl">
                  🏦
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Banking Details</h3>
                <p className="text-slate-600">Available on request</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-6">Connect with us</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://wa.me/27698218311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-2xl flex items-center justify-center text-white transition hover:scale-110 shadow-md"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-blue-700 hover:bg-blue-800 rounded-2xl flex items-center justify-center text-white transition hover:scale-110 shadow-md"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ────────────── */}
        <footer className="bg-slate-900 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
              {/* Company Info */}
              <div className="md:col-span-2">
                <span className="text-2xl font-bold text-white">
                  Rams<span className="text-amber-500">Trading</span>
                </span>
                <p className="mt-4 text-slate-400 max-w-md leading-relaxed">
                  Your trusted multi-service partner delivering excellence across logistics, cleaning, forex education, brand marketing, and web development.
                </p>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://wa.me/27698218311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  >
                    <WhatsAppIcon />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {["Home", "About", "Services", "Contact"].map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => scrollToSection(link.toLowerCase() === "home" ? "hero" : link.toLowerCase())}
                        className="text-slate-400 hover:text-amber-500 transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-white font-semibold mb-4">Our Services</h4>
                <ul className="space-y-3">
                  <li><Link href="/services/logistics" className="text-slate-400 hover:text-amber-500 transition-colors">Logistics</Link></li>
                  <li><Link href="/services/cleaning" className="text-slate-400 hover:text-amber-500 transition-colors">Cleaning</Link></li>
                  <li><Link href="/services/forex" className="text-slate-400 hover:text-amber-500 transition-colors">Forex</Link></li>
                  <li><Link href="/services/brands" className="text-slate-400 hover:text-amber-500 transition-colors">Brands</Link></li>
                  <li><Link href="/services/websites" className="text-slate-400 hover:text-amber-500 transition-colors">Websites</Link></li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
              <p>© {new Date().getFullYear()} Rams Trading. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}