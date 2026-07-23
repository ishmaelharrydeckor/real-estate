"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Move, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const formatPrice = (price: number, status: string) => {
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
    
    return status === "For Rent" ? `${formatted} / mo` : formatted;
  };

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-[0_20px_50px_rgba(5,36,28,0.02)] hover:shadow-[0_24px_60px_-15px_rgba(5,36,28,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* Image Carousel Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={property.images[currentImageIndex]}
          alt={property.title}
          fill
          sizes="(max-w-7xl) 33vw, (max-w-md) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={index < 2}
          unoptimized={true}
        />
        
        {/* Status Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm ${
              property.status === "For Sale"
                ? "bg-primary-deep text-white"
                : "bg-accent-gold text-primary-deep font-bold"
            }`}
          >
            {property.status}
          </span>
        </div>

        {/* Carousel Controls (Show on hover) */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevImage}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-primary-deep flex items-center justify-center shadow-md transition-transform active:scale-90 pointer-events-auto hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-primary-deep flex items-center justify-center shadow-md transition-transform active:scale-90 pointer-events-auto hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-10">
          {property.images.map((_, imgIndex) => (
            <span
              key={imgIndex}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                imgIndex === currentImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Property Details Area */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Location Pin */}
          <div className="flex items-center gap-1.5 text-text-muted text-xs font-medium uppercase tracking-wider mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-accent-gold" />
            <span>{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl md:text-2xl font-medium text-primary-deep leading-snug mb-3 group-hover:text-primary-light transition-colors line-clamp-1">
            <Link href={`/properties/${property.id}`} className="focus:outline-none">
              {property.title}
            </Link>
          </h3>

          {/* Price */}
          <p className="text-xl md:text-2xl font-sans font-bold text-accent-gold mb-5">
            {formatPrice(property.price, property.status)}
          </p>
        </div>

        <div>
          {/* Amenities Grid */}
          <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#EAE6DF] mb-6 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-primary-light" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-4 h-4 text-primary-light" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Move className="w-4 h-4 text-primary-light" />
              <span>{property.landSize}</span>
            </div>
          </div>

          {/* CTA Link */}
          <Link
            href={`/properties/${property.id}`}
            className="flex items-center justify-center w-full py-3 rounded-xl border border-primary-deep text-primary-deep text-sm font-semibold tracking-wider uppercase hover:bg-primary-deep hover:text-white transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
