"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm",
    outline: "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}
