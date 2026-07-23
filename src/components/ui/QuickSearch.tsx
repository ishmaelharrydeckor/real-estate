"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

export default function QuickSearch() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (type) params.append("type", type);
    if (priceRange) params.append("priceRange", priceRange);
    
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full p-4 md:p-2 border border-[#EAE6DF] shadow-[0_20px_50px_rgba(5,36,28,0.15)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-2 text-text-dark"
    >
      {/* Location Select */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-[#EAE6DF]">
        <MapPin className="w-5 h-5 text-accent-gold shrink-0" />
        <div className="w-full">
          <label className="block text-[10px] uppercase tracking-wider text-text-muted font-bold mb-0.5">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent border-0 p-0 text-sm font-semibold focus:ring-0 focus:outline-none text-primary-deep cursor-pointer"
          >
            <option value="">Any Location</option>
            <option value="Accra">All Accra</option>
            <option value="Cantonments">Cantonments, Accra</option>
            <option value="East Legon">East Legon, Accra</option>
            <option value="Airport Residential">Airport Residential, Accra</option>
            <option value="Labone">Labone, Accra</option>
            <option value="Kumasi">All Kumasi</option>
            <option value="Ahodwo">Ahodwo, Kumasi</option>
          </select>
        </div>
      </div>

      {/* Property Type Select */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-[#EAE6DF]">
        <Home className="w-5 h-5 text-accent-gold shrink-0" />
        <div className="w-full">
          <label className="block text-[10px] uppercase tracking-wider text-text-muted font-bold mb-0.5">
            Property Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-transparent border-0 p-0 text-sm font-semibold focus:ring-0 focus:outline-none text-primary-deep cursor-pointer"
          >
            <option value="">Any Type</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Mansion">Mansion</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>
      </div>

      {/* Price Select */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2">
        <DollarSign className="w-5 h-5 text-accent-gold shrink-0" />
        <div className="w-full">
          <label className="block text-[10px] uppercase tracking-wider text-text-muted font-bold mb-0.5">
            Budget
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full bg-transparent border-0 p-0 text-sm font-semibold focus:ring-0 focus:outline-none text-primary-deep cursor-pointer"
          >
            <option value="">Any Budget</option>
            <option value="under-500k">Under $500k</option>
            <option value="500k-1m">$500k – $1M</option>
            <option value="over-1m">Over $1M</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-4 bg-primary-deep hover:bg-primary-light text-white rounded-xl md:rounded-full text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Search className="w-4 h-4" />
        <span>Search</span>
      </button>
    </form>
  );
}
