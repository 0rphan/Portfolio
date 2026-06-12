"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Filter = "all" | "security" | "gaming" | "dev";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "security", label: "SECURITY" },
  { id: "gaming", label: "GAMING" },
  { id: "dev", label: "DEV" },
];

const filterAccent: Record<Filter, string> = {
  all: "#22c55e",
  security: "#22c55e",
  gaming: "#06b6d4",
  dev: "#d946ef",
};

export default function ProjectsSection() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const accent = filterAccent[active];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-[#22c55e] mb-3 font-mono">
            <span className="opacity-50">// </span>03 — PROJECTS
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
              My Work
            </h2>

            {/* Filter tabs */}
            <div className="flex items-center gap-1 p-1 border border-[#1e293b] bg-[#0d1b2a] w-fit">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest transition-all duration-200 ${
                    active === f.id
                      ? "text-[#0f172a]"
                      : "text-[#475569] hover:text-[#94a3b8]"
                  }`}
                  style={
                    active === f.id
                      ? { backgroundColor: filterAccent[f.id] }
                      : {}
                  }
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project count */}
        <p className="text-xs font-mono text-[#475569] mb-6">
          <span style={{ color: accent }}>{filtered.length}</span> project
          {filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Add project hint */}
        <div className="mt-10 border border-dashed border-[#1e293b] p-5 text-center">
          <p className="text-[#334155] text-xs font-mono">
            <span className="text-[#22c55e]/50"># </span>
            Add your projects in{" "}
            <code className="text-[#475569]">src/data/projects.ts</code>
          </p>
        </div>
      </div>
    </section>
  );
}
