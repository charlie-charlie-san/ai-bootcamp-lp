"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "カリキュラム", href: "#curriculum" },
  { label: "作品例", href: "#showcase" },
  { label: "講師", href: "#instructor" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className={`hidden sm:block font-semibold transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}>
              AI実装ブートキャンプ
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors text-sm font-medium ${
                  isScrolled 
                    ? "text-slate-600 hover:text-slate-900" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant={isScrolled ? "primary" : "secondary"} size="sm">
              無料相談
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              isScrolled 
                ? "bg-slate-100 text-slate-700" 
                : "bg-white/10 text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl text-slate-700 hover:text-blue-600 transition-colors font-semibold"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <Button variant="primary" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                  無料相談
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
