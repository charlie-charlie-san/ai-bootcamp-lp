"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <div className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              実装の壁を越える準備は
              <br />
              できていますか？
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              8週間後、あなたは自分のデザインをブラウザで動かせるようになっています。
              今すぐ、最初の一歩を踏み出しましょう。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="#curriculum">
                カリキュラムを見る
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
                無料相談を予約する
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
              {/* Logo */}
              <div className="text-center md:text-left">
                <div className="text-xl font-bold text-white mb-1">AI実装ブートキャンプ</div>
                <div className="text-sm text-slate-500">The Future of Design is Implementation.</div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  プライバシーポリシー
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  特定商取引法
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  お問い合わせ
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 text-center text-slate-500 text-sm">
              © 2024 AI Implementation Bootcamp. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
