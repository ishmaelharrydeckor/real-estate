"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

const statsData: StatItem[] = [
  { id: 1, value: 250, suffix: "M+", label: "Property Sales Closed ($)" },
  { id: 2, value: 500, suffix: "+", label: "Premium Families Housed" },
  { id: 3, value: 15, suffix: "+", label: "Years of Local Expertise" },
  { id: 4, value: 99, suffix: "%", label: "Client Satisfaction Rate" },
];

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const statNumbers = containerRef.current?.querySelectorAll(".stat-number");
      
      if (statNumbers) {
        statNumbers.forEach((el) => {
          const targetValue = parseInt(el.getAttribute("data-target") || "0", 10);
          
          gsap.fromTo(
            el,
            { textContent: "0" },
            {
              textContent: targetValue.toString(),
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // Fade-in entry for stats container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full bg-primary-deep text-white py-16 md:py-24 border-t border-b border-[#EAE6DF]/15 shadow-inner"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="flex items-baseline font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-accent-gold mb-2 tracking-tight">
                <span
                  className="stat-number"
                  data-target={stat.value}
                >
                  0
                </span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-xs md:text-sm font-sans tracking-widest uppercase text-white/70 max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
