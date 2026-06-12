"use client";

import { useEffect, useRef, useState } from "react";
import { skillCategories } from "@/data/skills";

const accentMap = {
  green: {
    text: "text-[#22c55e]",
    bar: "bg-[#22c55e]",
    glow: "shadow-[0_0_8px_rgba(34,197,94,0.6)]",
    border: "border-[#22c55e]/30",
    header: "text-[#22c55e]",
  },
  cyan: {
    text: "text-[#06b6d4]",
    bar: "bg-[#06b6d4]",
    glow: "shadow-[0_0_8px_rgba(6,182,212,0.6)]",
    border: "border-[#06b6d4]/30",
    header: "text-[#06b6d4]",
  },
  magenta: {
    text: "text-[#d946ef]",
    bar: "bg-[#d946ef]",
    glow: "shadow-[0_0_8px_rgba(217,70,239,0.6)]",
    border: "border-[#d946ef]/30",
    header: "text-[#d946ef]",
  },
};

function SkillBar({
  name,
  level,
  accent,
  visible,
  delay,
}: {
  name: string;
  level: number;
  accent: keyof typeof accentMap;
  visible: boolean;
  delay: number;
}) {
  const colors = accentMap[accent];

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-[#94a3b8] tracking-wider font-mono group-hover:text-[#f1f5f9] transition-colors">
          {name}
        </span>
        <span className={`text-xs font-mono font-bold ${colors.text}`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-[#1e293b] relative overflow-hidden">
        <div
          className={`h-full ${colors.bar} ${colors.glow} transition-all duration-1000 ease-out`}
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
        {/* Animated shimmer */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
          style={{ animationDelay: `${delay + 500}ms` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-[#0a1020]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] text-[#22c55e] mb-3 font-mono">
            <span className="opacity-50">// </span>02 — SKILLS
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const colors = accentMap[category.accent as keyof typeof accentMap];
            return (
              <div
                key={category.id}
                className={`border ${colors.border} bg-[#0d1b2a] p-6`}
              >
                {/* Category header */}
                <div className="mb-6">
                  <h3
                    className={`font-[family-name:var(--font-orbitron)] text-sm font-bold uppercase tracking-widest mb-1 ${colors.header}`}
                  >
                    {category.title}
                  </h3>
                  <div className={`h-px w-12 ${colors.bar} opacity-50`} />
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      accent={category.accent as keyof typeof accentMap}
                      visible={visible}
                      delay={i * 80}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool tags strip */}
        <div className="mt-10 border border-[#1e293b] bg-[#0d1b2a] p-5">
          <p className="text-[#475569] text-xs font-mono mb-3 tracking-widest">
            TOOLS & PLATFORMS
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "IDA Pro",
              "Ghidra",
              "x64dbg",
              "Wireshark",
              "Volatility",
              "Cuckoo",
              "Docker",
              "Git",
              "VS Code",
              "Vim",
              "Unity",
              "Unreal",
              "Burp Suite",
              "Metasploit",
              "QEMU",
              "Linux",
            ].map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-xs font-mono text-[#64748b] border border-[#1e293b] hover:border-[#22c55e]/40 hover:text-[#22c55e] transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
