"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { Zap, Terminal, GitBranch, Rocket, Code, Layers, Database, Globe } from "lucide-react";

const phases = [
  {
    week: "Week 1-2",
    phase: "Phase 1",
    title: "爆速プロトタイピング",
    description: "v0とClaudeを使って、アイデアを瞬時に形にする技術を習得。プロンプトエンジニアリングの基礎から、効率的なAIとの対話方法まで。",
    tools: ["v0", "Claude", "ChatGPT"],
    icon: Zap,
  },
  {
    week: "Week 3-4",
    phase: "Phase 2",
    title: "ローカル環境とCursorの導入",
    description: "AIコーディングエディタ「Cursor」を使いこなし、ローカル環境でのNext.js開発をスタート。恐れていたターミナルも、AIがサポート。",
    tools: ["Cursor", "Next.js", "Tailwind CSS"],
    icon: Terminal,
  },
  {
    week: "Week 5-6",
    phase: "Phase 3",
    title: "タイムマシン（バージョン管理）の獲得",
    description: "GitHubを使った安全なバージョン管理を習得。怖くない、むしろ最強の味方になるGitの世界へ。ブランチ戦略も理解。",
    tools: ["GitHub", "Git", "GitHub Copilot"],
    icon: GitBranch,
  },
  {
    week: "Week 7-8",
    phase: "Phase 4",
    title: "最終課題制作 & Vercelデプロイ",
    description: "8週間の集大成。自分だけのプロダクトを作り上げ、Vercelで世界に公開。ポートフォリオに載せられるレベルのアウトプット。",
    tools: ["Vercel", "Framer Motion", "API連携"],
    icon: Rocket,
  },
];

const additionalSkills = [
  { icon: Code, label: "React基礎", desc: "コンポーネント設計" },
  { icon: Layers, label: "デザインシステム", desc: "Tailwind活用" },
  { icon: Database, label: "状態管理", desc: "データの扱い方" },
  { icon: Globe, label: "デプロイ", desc: "公開まで完結" },
];

export function Curriculum() {
  return (
    <Section id="curriculum" variant="gray">
      <SectionTitle subtitle="Curriculum">
        8週間のロードマップ
      </SectionTitle>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200" />

        {/* Phases */}
        <div className="space-y-8 md:space-y-0">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-8 md:py-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-600 items-center justify-center z-10 shadow-sm">
                <phase.icon className="w-5 h-5 text-blue-600" />
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="group p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
                  {/* Mobile Icon */}
                  <div className="md:hidden w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <phase.icon className="w-5 h-5 text-blue-600" />
                  </div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{phase.week}</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1">{phase.title}</h3>
                    </div>
                    <span className="hidden sm:flex px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                      {phase.phase}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {phase.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <h3 className="text-center text-xl font-bold text-slate-900 mb-8">
          さらに身につくスキル
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-5 rounded-xl bg-white border border-slate-200 text-center hover:border-blue-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <skill.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-semibold text-slate-900 mb-1">{skill.label}</div>
              <div className="text-sm text-slate-500">{skill.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
