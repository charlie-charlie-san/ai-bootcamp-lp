"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { BentoCard } from "./Card";
import { Sparkles, BarChart3, Layout, ExternalLink } from "lucide-react";

const showcaseItems = [
  {
    id: 1,
    title: "SES Dashboard",
    subtitle: "実際にデプロイされた管理画面",
    description: "複雑なデータを可視化し、リアルタイムで情報を管理できる本格的なダッシュボード。実際に動作するデモをご覧ください。",
    icon: BarChart3,
    image: "https://placehold.co/800x450/1e293b/3b82f6?text=SES+Dashboard",
    span: "2" as const,
    featured: true,
    url: "https://ses-dashboard-e2hu0jyg7-charliecharliesan-6560s-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Engineer Profiles",
    subtitle: "AIマッチング機能付き人材検索",
    description: "エンジニアのスキルを可視化し、AI案件マッチ度診断機能を備えた人材プロフィールサイト。",
    icon: Sparkles,
    image: "https://placehold.co/600x400/1e293b/10b981?text=Engineer+Profiles",
    span: "1" as const,
    featured: false,
    url: "https://engineer-profiles-dummy.vercel.app/",
  },
  {
    id: 3,
    title: "High-End LP",
    subtitle: "このサイトそのもの",
    description: "あなたが今見ているこのサイト。洗練されたデザイン、アニメーション、レスポンシブ対応。",
    icon: Layout,
    image: "https://placehold.co/600x400/f1f5f9/475569?text=Landing+Page",
    span: "1" as const,
    featured: false,
    url: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Showcase() {
  return (
    <Section id="showcase" variant="white">
      <SectionTitle subtitle="Portfolio">
        この研修で作れるようになるプロダクト
      </SectionTitle>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {showcaseItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className={`${
              item.span === "2" ? "md:col-span-2 lg:col-span-2" : "col-span-1"
            }`}
          >
            <a 
              href={item.url || "#"} 
              target={item.url ? "_blank" : undefined}
              rel={item.url ? "noopener noreferrer" : undefined}
              className={item.url ? "block" : "block pointer-events-none"}
            >
              <BentoCard span={item.span} className="h-full group cursor-pointer">
                <div className="p-6 flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative mb-5 rounded-lg overflow-hidden bg-slate-100">
                    <div className="aspect-video">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="px-4 py-2 rounded-lg bg-white text-slate-900 flex items-center gap-2 text-sm font-medium shadow-lg">
                        <ExternalLink className="w-4 h-4" />
                        {item.url ? "サイトを見る" : "Coming Soon"}
                      </div>
                    </motion.div>
                    {/* Live Badge */}
                    {item.url && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        LIVE
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed flex-1">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.featured && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                          メイン課題
                        </span>
                      )}
                      {item.url && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                          デプロイ済み
                        </span>
                      )}
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">
                        Next.js
                      </span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </BentoCard>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <p className="text-slate-500 text-sm">
          ※ 全ての作品はAIを活用しながら、受講生自身が制作します
        </p>
      </motion.div>
    </Section>
  );
}
