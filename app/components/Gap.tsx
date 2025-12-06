"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { Card } from "./Card";
import { X, Check, ArrowRight } from "lucide-react";

const beforeItems = [
  "エンジニアへの実装依頼書作りで終わる日々",
  "意図しない余白、死んだアニメーション",
  "「ここ、もうちょっとこうしたい」が言えない",
  "自分のアイデアが形になるまでの長い待ち時間",
];

const afterItems = [
  "自分自身でブラウザにデプロイ",
  "0.1秒のインタラクションへのこだわり",
  "思いついたらすぐに実装、即座にフィードバック",
  "デザインから実装まで一気通貫のワークフロー",
];

export function Gap() {
  return (
    <Section variant="white">
      <SectionTitle subtitle="Before → After">
        8週間で、ここまで変わる
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Before Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card hover={false} className="p-8 h-full bg-slate-50 border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                <X className="w-6 h-6 text-slate-500" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Before</span>
                <h3 className="text-xl font-bold text-slate-700">受講前</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-slate-600"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* After Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card hover={false} className="p-8 h-full border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">After</span>
                <h3 className="text-xl font-bold text-slate-900">受講後</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>

      {/* Arrow indicator for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex justify-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-blue-600 font-medium">
          <span>8週間でこの変化を実現</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </motion.div>
    </Section>
  );
}
