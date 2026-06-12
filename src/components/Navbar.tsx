"use client";

import { useEffect, useState } from "react";
import { config } from "@/data/config";
import { Menu, X, Terminal, FileText } from "lucide-react";
import CVModal from "./CVModal";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-[#1e293b]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-[#22c55e] font-[family-name:var(--font-orbitron)] font-bold text-sm tracking-widest hover:opacity-80 transition-opacity"
          >
            <Terminal size={18} className="shrink-0" />
            <span>{config.handle}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link text-xs tracking-widest transition-colors duration-200 ${
                    active === link.href.slice(1)
                      ? "text-[#22c55e] active"
                      : "text-[#64748b] hover:text-[#f1f5f9]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* CV nav link — same style as the others */}
            <li>
              <button
                onClick={() => setCvOpen(true)}
                className="nav-link text-xs tracking-widest text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <FileText size={13} className="opacity-70" />
                CV
              </button>
            </li>
          </ul>

          {/* HIRE ME CTA */}
          <a
            href={`mailto:${config.social.email}`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 text-xs tracking-widest border border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-[#0f172a] transition-all duration-200 font-medium"
          >
            HIRE ME
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#64748b] hover:text-[#22c55e] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0d1b2a] border-b border-[#1e293b] px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs tracking-widest text-[#94a3b8] hover:text-[#22c55e] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { setCvOpen(true); setMenuOpen(false); }}
                  className="text-xs tracking-widest text-[#94a3b8] hover:text-[#22c55e] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <FileText size={13} />
                  CV
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
}
