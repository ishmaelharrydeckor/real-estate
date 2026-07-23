"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, Landmark } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "233240000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Heritage Homes Realty, I am looking to inquire about premium real estate opportunities in Ghana."
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-bg-warm/80 backdrop-blur-md border-b border-[#EAE6DF] transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        {/* Logo and Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-primary-deep flex items-center justify-center text-accent-gold group-hover:scale-105 transition-transform">
            <Landmark className="w-5.5 h-5.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-primary-deep leading-tight">
              HERITAGE HOMES
            </span>
            <span className="font-sans text-[9px] font-semibold tracking-[0.25em] text-accent-gold uppercase leading-none">
              REALTY • GHANA
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/properties"
            className="text-sm font-semibold tracking-wider uppercase text-text-dark hover:text-accent-gold transition-colors"
          >
            Properties
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold tracking-wider uppercase text-text-dark hover:text-accent-gold transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold tracking-wider uppercase text-text-dark hover:text-accent-gold transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-deep hover:bg-primary-light text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-accent-gold" />
            <span>Chat With Agent</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary-deep hover:text-accent-gold focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-bg-warm border-b border-[#EAE6DF] shadow-lg py-8 px-6 flex flex-col gap-6 animate-fadeIn">
          <Link
            href="/properties"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-primary-deep hover:text-accent-gold"
          >
            Properties
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-primary-deep hover:text-accent-gold"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-primary-deep hover:text-accent-gold"
          >
            Contact
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary-deep text-white text-xs font-semibold tracking-widest uppercase shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-accent-gold" />
            <span>Chat With Agent</span>
          </a>
        </div>
      )}
    </header>
  );
}
