import { config } from "@/data/config";
import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#1e293b] bg-[#0a1020] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* CTA */}
          <div>
            <p className="text-xs tracking-[0.3em] text-[#22c55e] mb-3 font-mono">
              <span className="opacity-50">// </span>04 — CONTACT
            </p>
            <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed max-w-sm">
              Open to security research collaborations, game dev projects,
              consulting, and interesting dev work. Drop a line.
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-col justify-center space-y-3">
            <a
              href={`mailto:${config.social.email}`}
              className="group flex items-center gap-3 p-4 border border-[#1e293b] bg-[#0d1b2a] hover:border-[#22c55e]/40 hover:bg-[#22c55e]/5 transition-all duration-200"
            >
              <Mail size={16} className="text-[#22c55e] shrink-0" />
              <div>
                <p className="text-[10px] text-[#475569] font-mono tracking-widest mb-0.5">EMAIL</p>
                <p className="text-sm text-[#94a3b8] group-hover:text-white transition-colors">
                  {config.social.email}
                </p>
              </div>
            </a>

            <div className="flex gap-3">
              {[
                { href: config.social.github, icon: GithubIcon, label: "GitHub", color: "hover:border-[#22c55e]/40 hover:text-[#22c55e]" },
                { href: config.social.linkedin, icon: LinkedinIcon, label: "LinkedIn", color: "hover:border-[#06b6d4]/40 hover:text-[#06b6d4]" },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex flex-col items-center gap-2 p-4 border border-[#1e293b] bg-[#0d1b2a] text-[#475569] ${color} transition-all duration-200`}
                  aria-label={label}
                >
                  <Icon style={{ width: 18, height: 18 }} />
                  <span className="text-[9px] font-mono tracking-widest">{label.toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#22c55e]">
            <Terminal size={14} />
            <span className="font-[family-name:var(--font-orbitron)] text-xs font-bold tracking-widest">
              {config.handle}
            </span>
          </div>
          <p className="text-[#334155] text-[10px] font-mono">
            &copy; {new Date().getFullYear()} {config.name} · Built with Next.js + Tailwind
          </p>
          <div className="flex gap-4 text-[10px] font-mono text-[#334155]">
            <a href="#" className="hover:text-[#22c55e] transition-colors">TOP</a>
            <a href="#projects" className="hover:text-[#22c55e] transition-colors">PROJECTS</a>
            <a href={`mailto:${config.social.email}`} className="hover:text-[#22c55e] transition-colors">EMAIL</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
