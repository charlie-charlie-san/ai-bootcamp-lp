"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative py-20 md:py-32 px-4 md:px-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({ children, subtitle, className = "", align = "center" }: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  
  return (
    <motion.div
      className={`mb-16 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <span className="text-sm md:text-base font-mono text-purple-400 tracking-wider uppercase mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        {children}
      </h2>
    </motion.div>
  );
}

