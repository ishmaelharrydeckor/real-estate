"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Sparkles, Compass, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/ui/Navbar";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/ui/PropertyCard";
import QuickSearch from "@/components/ui/QuickSearch";
import StatsSection from "@/components/ui/StatsSection";
import { mockProperties } from "@/data/properties";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Show first 4 properties as featured
  const featuredProperties = mockProperties.slice(0, 4);

  // WhatsApp configuration
  const whatsappNumber = "233240000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Heritage Homes Realty, I am looking to schedule a consultation with an agent regarding your available premium properties."
  )}`;

  useGSAP(
    () => {
      // 1. Hero Content Entrance
      gsap.fromTo(
        ".hero-title, .hero-subtitle, .hero-search",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
        }
      );

      // 2. Section Fade-ins
      const sections = containerRef.current?.querySelectorAll(".fade-section");
      sections?.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 3. Stagger Property Cards
      gsap.fromTo(
        ".property-card-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".properties-grid",
            start: "top 75%",
          },
        }
      );

      // 4. Stagger Value Props
      gsap.fromTo(
        ".value-prop-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".value-props-grid",
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-bg-warm font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-primary-deep text-white">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
            alt="Modern Luxury Villa Accra Skyline"
            fill
            priority
            className="object-cover object-center opacity-40 scale-100"
          />
          {/* Custom Elegant Gradient Overlay */}
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 py-24 md:py-32 flex flex-col items-center text-center">
          <span className="hero-title inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent-gold mb-6 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
            Introducing Elite Residential Developments
          </span>

          <h1 className="hero-title font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 max-w-5xl leading-[1.05]">
            Sculpting the Future of <br className="hidden md:inline" />
            <span className="text-accent-gold italic">Luxury Living</span> in Ghana
          </h1>

          <p className="hero-subtitle text-base md:text-xl font-light leading-relaxed max-w-3xl text-white/80 mb-12">
            Exclusive modern estates, penthouses, and bespoke townhouses located in Accra and Kumasi's most coveted enclaves. Crafted with structural intelligence and uncompromised title security.
          </p>

          {/* Quick Search */}
          <div className="hero-search w-full flex justify-center mb-10">
            <QuickSearch />
          </div>

          {/* Dual CTAs */}
          <div className="hero-search flex flex-wrap gap-4 justify-center">
            <Link
              href="/properties"
              className="px-8 py-4 bg-accent-gold hover:bg-accent-gold-hover text-primary-deep text-xs font-semibold tracking-widest uppercase rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group shadow-lg"
            >
              <span>Browse Catalog</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent hover:bg-white/10 border border-white/30 hover:border-white text-white text-xs font-semibold tracking-widest uppercase rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-accent-gold" />
              <span>Talk to an Agent</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Stats Strip */}
      <StatsSection />

      {/* Featured Properties Grid */}
      <section className="fade-section py-24 md:py-32 bg-bg-warm">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent-gold mb-3 block">
                Exclusive Listings
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-primary-deep leading-tight">
                Featured Properties
              </h2>
            </div>
            <Link
              href="/properties"
              className="text-xs font-semibold tracking-widest uppercase text-primary-deep hover:text-accent-gold transition-colors flex items-center gap-1.5 self-start md:self-auto group"
            >
              <span>View All Properties</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="properties-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((prop, idx) => (
              <div key={prop.id} className="property-card-item">
                <PropertyCard property={prop} index={idx} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="fade-section py-24 md:py-32 bg-white border-t border-b border-[#EAE6DF]">
        <Container>
          <SectionHeading
            badge="The Heritage Distinction"
            title="Uncompromised Security, Design & Trust"
            subtitle="We engineer a sophisticated real estate experience for discerning local buyers and the global diaspora."
          />

          <div className="value-props-grid grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Prop 1 */}
            <div className="value-prop-card bg-bg-warm border border-[#EAE6DF] p-8 md:p-10 rounded-2xl flex flex-col items-start hover:shadow-[0_20px_50px_rgba(5,36,28,0.04)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-deep flex items-center justify-center text-accent-gold mb-8 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary-deep mb-4">
                Guaranteed Land Security
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Every listing in our catalog undergoes rigorous land title searches, geological checks, and registry verification. We guarantee zero land dispute or land guard complications.
              </p>
            </div>

            {/* Prop 2 */}
            <div className="value-prop-card bg-bg-warm border border-[#EAE6DF] p-8 md:p-10 rounded-2xl flex flex-col items-start hover:shadow-[0_20px_50px_rgba(5,36,28,0.04)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-deep flex items-center justify-center text-accent-gold mb-8 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary-deep mb-4">
                Boutique Architectural Design
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                We represent properties that exhibit refined modernism, sustainable solar integration, custom local stone works, and indoor-outdoor spatial harmony suited to West African climates.
              </p>
            </div>

            {/* Prop 3 */}
            <div className="value-prop-card bg-bg-warm border border-[#EAE6DF] p-8 md:p-10 rounded-2xl flex flex-col items-start hover:shadow-[0_20px_50px_rgba(5,36,28,0.04)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-deep flex items-center justify-center text-accent-gold mb-8 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary-deep mb-4">
                Diaspora Concierge Pathway
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Specialized consultation paths for remote transactions. Secure payment systems, live drone video tours, certified escrow services, and direct legal representation on the ground.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="fade-section py-24 md:py-32 bg-bg-warm">
        <Container>
          <SectionHeading
            badge="Client Endorsements"
            title="Sought & Trusted by Discerning Buyers"
            subtitle="Listen to testimonies from returnees, local corporate executives, and developers who trust our boutique representation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            {/* CODE COMMENT: Stock headshot and placeholder quotes to be swapped for real Ghanaian client content before public release */}
            <div className="bg-white border border-[#EAE6DF] p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(5,36,28,0.01)] hover:shadow-[0_20px_50px_rgba(5,36,28,0.05)] transition-all duration-300 flex flex-col justify-between">
              <p className="text-text-muted text-sm leading-relaxed italic mb-8">
                "As an expat living in London, the process of buying land in Cantonments was initially daunting. Heritage Homes Realty handled the title registry verification, provided structural updates weekly, and delivered our key ahead of schedule."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                    alt="Kofi Mensah"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-deep text-base">Kofi Mensah</h4>
                  <p className="text-xs text-accent-gold font-bold">Diaspora Returnee, United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            {/* CODE COMMENT: Stock headshot and placeholder quotes to be swapped for real Ghanaian client content before public release */}
            <div className="bg-white border border-[#EAE6DF] p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(5,36,28,0.01)] hover:shadow-[0_20px_50px_rgba(5,36,28,0.05)] transition-all duration-300 flex flex-col justify-between">
              <p className="text-text-muted text-sm leading-relaxed italic mb-8">
                "The legal vetting checks and attention to detail that Heritage Homes Realty commits to is unparalleled in the Ghanaian market. Their team is professional, extremely responsive, and they secure the best terms for buyers."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
                    alt="Ama Osei"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-deep text-base">Dr. Ama Osei</h4>
                  <p className="text-xs text-accent-gold font-bold">Chief Medical Director, Accra</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            {/* CODE COMMENT: Stock headshot and placeholder quotes to be swapped for real Ghanaian client content before public release */}
            <div className="bg-white border border-[#EAE6DF] p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(5,36,28,0.01)] hover:shadow-[0_20px_50px_rgba(5,36,28,0.05)] transition-all duration-300 flex flex-col justify-between">
              <p className="text-text-muted text-sm leading-relaxed italic mb-8">
                "A truly premium brokerage. We looked at properties with three agencies before finding Heritage. Their visual polish is a reflection of their physical builds — beautiful, well-engineered, and extremely clean."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
                    alt="Kwame Boateng"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-deep text-base">Kwame Boateng</h4>
                  <p className="text-xs text-accent-gold font-bold">Tech Entrepreneur, Kumasi</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Banner */}
      <section className="fade-section py-24 md:py-32 bg-primary-deep text-white relative overflow-hidden">
        {/* Background Image Accent */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Accra Luxury Estate Background"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6 max-w-3xl leading-tight">
            Ready to Secure Your Next <br />
            <span className="text-accent-gold italic">Premium Address</span> in Ghana?
          </h2>
          <p className="text-base md:text-lg font-light text-white/70 max-w-2xl mb-12">
            Schedule a private viewing session or coordinate an initial legal title search consultation with one of our certified agents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-accent-gold hover:bg-accent-gold-hover text-primary-deep text-xs font-semibold tracking-widest uppercase rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href="tel:+233240000000"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-xs font-semibold tracking-widest uppercase rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent-gold" />
              <span>Call +233 24 000 0000</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-primary-deep text-white border-t border-white/10 py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Col 1: Brand details */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-accent-gold">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <span className="font-serif text-lg font-bold tracking-tight text-white">
                  HERITAGE HOMES
                </span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed font-light mt-2 max-w-xs">
                Accra's premier boutique real estate firm, dedicated to sourcing, vetting, and building high-polish modern estates for local clients and the global diaspora.
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="text-accent-gold text-xs font-semibold tracking-widest uppercase mb-6">
                Explore listings
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs text-white/70 font-light">
                <li>
                  <Link href="/properties?status=For%20Sale" className="hover:text-white transition-colors">
                    Properties for Sale
                  </Link>
                </li>
                <li>
                  <Link href="/properties?status=For%20Rent" className="hover:text-white transition-colors">
                    Properties for Rent
                  </Link>
                </li>
                <li>
                  <Link href="/properties?featured=true" className="hover:text-white transition-colors">
                    Featured Enclaves
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <h4 className="text-accent-gold text-xs font-semibold tracking-widest uppercase mb-6">
                Corporate
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs text-white/70 font-light">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Our Story & Values
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact & Address
                  </Link>
                </li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp Desk
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Snippet */}
            <div>
              <h4 className="text-accent-gold text-xs font-semibold tracking-widest uppercase mb-6">
                Headquarters
              </h4>
              <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                Plot 15, Senchi Street,<br />
                Airport Residential Area,<br />
                Accra, Greater Accra Region, Ghana
              </p>
              <p className="text-xs text-accent-gold font-bold">
                info@heritagehomesrealty.com
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/40 font-light">
            <p>
              © {new Date().getFullYear()} Heritage Homes Realty. All rights reserved. Vetted titles guaranteed.
            </p>
            <p>
              Designed by Heritage Studios. Headshots represent placeholder client models.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
