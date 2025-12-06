"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      className={`
        relative rounded-xl overflow-hidden
        bg-white
        border border-slate-200
        ${hover ? "transition-all duration-300 hover:border-slate-300 hover:shadow-lg" : ""}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: "1" | "2" | "full";
}

export function BentoCard({
  children,
  className = "",
  span = "1",
}: BentoCardProps) {
  const spanClasses: Record<string, string> = {
    "1": "col-span-1",
    "2": "col-span-1 md:col-span-2",
    "full": "col-span-1 md:col-span-3",
  };

  return (
    <Card className={`${spanClasses[span]} ${className}`}>
      {children}
    </Card>
  );
}
