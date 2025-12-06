"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { Card } from "./Card";
import { Quote, CheckCircle2, MessageCircle, Lightbulb, Heart } from "lucide-react";

const credentials = [
  { icon: CheckCircle2, text: "非エンジニア出身" },
  { icon: MessageCircle, text: "デザイナー目線での解説" },
  { icon: Lightbulb, text: "つまずきポイントを熟知" },
  { icon: Heart, text: "挫折させない伴走サポート" },
];

export function Instructor() {
  return (
    <Section id="instructor" variant="gray">
      <SectionTitle subtitle="Instructor">
        講師紹介
      </SectionTitle>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="relative">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="aspect-[4/5] bg-slate-100">
                <img
                  src="https://placehold.co/400x500/f1f5f9/64748b?text=Instructor"
                  alt="講師"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-xl bg-white/95 backdrop-blur-sm p-4 shadow-lg border border-slate-100">
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">AI Implementer</div>
                  <div className="text-lg font-bold text-slate-900">Non-Engineer</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              非エンジニア
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 space-y-6"
        >
          {/* Quote Card */}
          <Card hover={false} className="p-8 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100" />
            <div className="relative">
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed mb-6">
                「私はエンジニアではありません。
                <br />
                <span className="text-blue-600 font-bold">だからこそ、</span>
                <br />
                『どこでつまずくか』『何が一番効率的か』を知っています。」
              </p>
              <p className="text-slate-600 leading-relaxed">
                難しい黒い画面（ターミナル）の知識は捨てて、
                <span className="text-slate-800 font-medium">おいしいところだけ</span>を学びましょう。
                デザイナーとして長年感じてきた「実装の壁」を、
                AIの力で一緒に乗り越えていきます。
              </p>
            </div>
          </Card>

          {/* Credentials Grid */}
          <div className="grid grid-cols-2 gap-3">
            {credentials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-slate-700 text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100">
            <h4 className="text-lg font-bold text-slate-900 mb-2">研修のポリシー</h4>
            <p className="text-slate-600 leading-relaxed">
              「できない」を「できる」に変える最短ルート。
              コードを書くことが目的ではなく、
              <span className="text-slate-800 font-medium">あなたのアイデアを形にすること</span>
              が目的です。AIは道具、主役はあなたです。
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
