import { config } from "@/data/config";
import { Shield, Gamepad2, Cpu, Code2, User } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Malware Research",
    desc: "Reverse engineering binaries, hunting TTPs, and building detection tooling with 6+ years in the field.",
    color: "text-[#22c55e]",
    border: "border-[#22c55e]/20",
    bg: "bg-[#22c55e]/5",
  },
  {
    icon: Cpu,
    title: "Embedded Development",
    desc: "3 years writing firmware and low-level C/C++ for microcontrollers, hardware interfaces, and real-time systems.",
    color: "text-[#06b6d4]",
    border: "border-[#06b6d4]/20",
    bg: "bg-[#06b6d4]/5",
  },
  {
    icon: Gamepad2,
    title: "Gaming Enthusiast",
    desc: "50+ games played across every genre — always studying mechanics, design patterns, and what makes a game feel right.",
    color: "text-[#a78bfa]",
    border: "border-[#a78bfa]/20",
    bg: "bg-[#a78bfa]/5",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Full-stack web apps, CLI tools, Discord bots, mobile apps. If it runs code, I'll build it.",
    color: "text-[#d946ef]",
    border: "border-[#d946ef]/20",
    bg: "bg-[#d946ef]/5",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] text-[#22c55e] mb-3 font-mono">
            <span className="opacity-50">// </span>01 — ABOUT
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            Who Am I
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Terminal-style bio */}
          <div className="space-y-6">
            {/* Terminal window */}
            <div className="border border-[#1e293b] bg-[#0d1b2a]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1e293b] bg-[#0a1628]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
                <span className="ml-2 text-[10px] text-[#475569] font-mono tracking-widest">
                  about.sh
                </span>
              </div>

              {/* Content */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p className="text-[#475569] mb-1">
                  <span className="text-[#22c55e]">$</span> cat about.txt
                </p>
                <div className="text-[#94a3b8] whitespace-pre-line mt-3">
                  {config.bio}
                </div>

                <div className="mt-6 pt-4 border-t border-[#1e293b]">
                  <p className="text-[#475569] text-xs mb-2">
                    <span className="text-[#22c55e]">$</span> whoami --details
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-[#475569]">name</span>
                      <span className="text-[#64748b]">: </span>
                      <span className="text-[#f1f5f9]">{config.name}</span>
                    </div>
                    <div>
                      <span className="text-[#475569]">handle</span>
                      <span className="text-[#64748b]">: </span>
                      <span className="text-[#22c55e]">{config.handle}</span>
                    </div>
                    <div>
                      <span className="text-[#475569]">focus</span>
                      <span className="text-[#64748b]">: </span>
                      <span className="text-[#f1f5f9]">
                        security, gaming, dev
                      </span>
                    </div>
                    <div>
                      <span className="text-[#475569]">email</span>
                      <span className="text-[#64748b]">: </span>
                      <a
                        href={`mailto:${config.social.email}`}
                        className="text-[#06b6d4] hover:underline"
                      >
                        {config.social.email}
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-[#22c55e] text-xs">
                  <span className="opacity-50">$</span>{" "}
                  <span className="cursor-blink" />
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {config.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#1e293b] bg-[#0d1b2a] p-4 corner-brackets"
                >
                  <p className="font-[family-name:var(--font-orbitron)] text-2xl font-black text-[#22c55e] neon-green">
                    {stat.value}
                  </p>
                  <p className="text-[#64748b] text-xs mt-1 tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <User size={16} className="text-[#475569]" />
              <span className="text-[#475569] text-xs font-mono tracking-widest">
                WHAT I DO
              </span>
            </div>

            {pillars.map((p) => (
              <div
                key={p.title}
                className={`border ${p.border} ${p.bg} p-5 transition-all duration-300 hover:border-opacity-60 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-0.5 ${p.color} shrink-0`}>
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-[family-name:var(--font-orbitron)] text-sm font-bold mb-1 ${p.color} tracking-wider uppercase`}>
                      {p.title}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTF / Community callout */}
            <div className="border border-[#1e293b] bg-[#0a1628] p-5 mt-4">
              <p className="text-xs text-[#475569] font-mono leading-relaxed">
                <span className="text-[#22c55e]"># </span>
                CTF competitor · open source contributor · bug bounty hunter
                · always learning, always breaking things
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
