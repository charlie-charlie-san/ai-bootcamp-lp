"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "white" | "gray";
}

export function Section({ children, className = "", id, variant = "white" }: SectionProps) {
  const bgClass = variant === "gray" ? "bg-slate-50" : "bg-white";
  
  return (
    <motion.section
      id={id}
      className={`relative py-20 md:py-28 px-4 md:px-8 ${bgClass} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
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
      className={`mb-14 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && (
        <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
        {children}
      </h2>
    </motion.div>
  );
}
