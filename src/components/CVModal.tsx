"use client";

import { useEffect, useRef } from "react";
import { X, Download, ExternalLink } from "lucide-react";

interface CVModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CVModal({ open, onClose }: CVModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    /* Backdrop */
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(5, 10, 20, 0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Window */}
      <div
        className="relative flex flex-col w-full max-w-4xl bg-[#0d1b2a] border border-[#1e293b]"
        style={{
          height: "min(90dvh, 1000px)",
          boxShadow: "0 0 40px rgba(34,197,94,0.12), 0 0 0 1px rgba(34,197,94,0.15)",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1e293b] bg-[#0a1628] shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
            </div>
            <span className="text-[11px] font-mono text-[#475569] tracking-widest">
              Tal_Cherniavsky_CV.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              download="Tal_Cherniavsky_CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-widest text-[#475569] border border-[#1e293b] hover:border-[#22c55e]/50 hover:text-[#22c55e] transition-all duration-200"
              title="Download CV"
            >
              <Download size={11} />
              DOWNLOAD
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-widest text-[#475569] border border-[#1e293b] hover:border-[#06b6d4]/50 hover:text-[#06b6d4] transition-all duration-200"
              title="Open in new tab"
            >
              <ExternalLink size={11} />
              OPEN
            </a>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-7 h-7 text-[#475569] border border-[#1e293b] hover:border-[#ef4444]/50 hover:text-[#ef4444] transition-all duration-200 ml-1"
              aria-label="Close CV"
            >
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Neon top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#22c55e]/40 to-transparent shrink-0" />

        {/* PDF iframe */}
        <iframe
          src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
          className="flex-1 w-full min-h-0"
          style={{ border: "none", background: "#0d1b2a" }}
          title="Tal Cherniavsky CV"
        />

        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#22c55e]/60 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#22c55e]/60 pointer-events-none" />
      </div>
    </div>
  );
}
