"use client";

import { useEffect, useState } from "react";
import { config } from "@/data/config";
import { ChevronDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const bootLines = [
  "INITIALIZING PORTFOLIO v2.0...",
  "LOADING SECURITY MODULES......  [OK]",
  "LOADING GAME ENGINE...........  [OK]",
  "MOUNTING DEV ENVIRONMENT......  [OK]",
  "ACCESS GRANTED",
];

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Boot sequence
  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 340);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowContent(true), 400);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  // Typing animation for roles
  useEffect(() => {
    if (!showContent) return;
    const role = config.roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedRole.length < role.length) {
      timeout = setTimeout(() => setDisplayedRole(role.slice(0, displayedRole.length + 1)), 80);
    } else if (!isDeleting && displayedRole.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedRole.length > 0) {
      timeout = setTimeout(() => setDisplayedRole(displayedRole.slice(0, -1)), 45);
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % config.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [showContent, displayedRole, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center grid-bg scanlines overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Neon horizontal lines decoration */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22c55e]/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/15 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        {/* Boot sequence terminal */}
        <div className="mb-10 font-mono text-xs text-[#4b5563] space-y-1">
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className="flex items-center gap-2 animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-[#22c55e]">&gt;</span>
              <span className={i === bootLines.length - 1 ? "text-[#22c55e]" : ""}>{line}</span>
            </div>
          ))}
        </div>

        {/* Main hero content */}
        {showContent && (
          <div className="animate-slide-up">
            {/* Label */}
            <p className="text-xs tracking-[0.3em] text-[#22c55e] mb-4 font-mono">
              <span className="opacity-50">// </span>PORTFOLIO
            </p>

            {/* Name with glitch */}
            <h1
              className="glitch font-[family-name:var(--font-orbitron)] font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-6 uppercase"
              data-text={config.name}
            >
              {config.name}
            </h1>

            {/* Typing role */}
            <div className="flex items-center gap-3 mb-6 h-8">
              <span className="text-[#22c55e] text-sm font-mono opacity-50">~/</span>
              <span className="text-[#22c55e] text-lg md:text-xl font-mono tracking-widest neon-green cursor-blink">
                {displayedRole}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-[#64748b] text-sm md:text-base max-w-xl mb-10 leading-relaxed">
              {config.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="group relative px-6 py-3 bg-[#22c55e] text-[#0f172a] text-xs font-bold tracking-widest transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                VIEW_PROJECTS
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#22c55e]/40 text-[#22c55e] text-xs font-bold tracking-widest hover:border-[#22c55e] hover:bg-[#22c55e]/5 transition-all duration-200"
              >
                GET_IN_TOUCH
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              {config.social.github && (
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#475569] hover:text-[#22c55e] transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon style={{ width: 20, height: 20 }} />
                </a>
              )}
{config.social.linkedin && (
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#475569] hover:text-[#06b6d4] transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon style={{ width: 20, height: 20 }} />
                </a>
              )}
              {config.social.email && (
                <a
                  href={`mailto:${config.social.email}`}
                  className="text-[#475569] hover:text-[#d946ef] transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {showContent && (
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#22c55e]/50 hover:text-[#22c55e] transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </a>
      )}
    </section>
  );
}
