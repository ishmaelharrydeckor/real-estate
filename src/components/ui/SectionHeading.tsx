import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignmentClasses = align === "center" ? "text-center mx-auto" : "text-left";
  
  return (
    <div className={`max-w-3xl mb-16 md:mb-24 ${alignmentClasses}`}>
      {badge && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-gold mb-3 md:mb-4">
          {badge}
        </span>
      )}
      
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-4 md:mb-6 ${
          light ? "text-white" : "text-primary-deep"
        }`}
      >
        {title}
      </h2>
      
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed font-light ${
            light ? "text-white/70" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
