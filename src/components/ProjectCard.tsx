import { Project } from "@/data/projects";
import { ExternalLink, FileText, Play } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import Image from "next/image";

const categoryGradient: Record<Project["category"], string> = {
  security: "from-[#0d2918] via-[#0d1b2a] to-[#0d1b2a]",
  gaming: "from-[#0a1f2e] via-[#0d1b2a] to-[#0d1b2a]",
  dev: "from-[#1a0d2e] via-[#0d1b2a] to-[#0d1b2a]",
};

const categoryAccent: Record<Project["category"], string> = {
  security: "#22c55e",
  gaming: "#06b6d4",
  dev: "#d946ef",
};

const categoryLabel: Record<Project["category"], string> = {
  security: "SECURITY",
  gaming: "GAMING",
  dev: "DEV",
};

export default function ProjectCard({ project }: { project: Project }) {
  const accent = categoryAccent[project.category];

  return (
    <article
      className="group relative border border-[#1e293b] bg-[#0d1b2a] overflow-hidden flex flex-col
        transition-all duration-300 hover:border-opacity-80"
      style={{
        ["--accent" as string]: accent,
      }}
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${accent}40, 0 0 20px ${accent}15`,
        }}
      />

      {/* Corner brackets (top-left + bottom-right) */}
      <div
        className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          borderTop: `2px solid ${accent}`,
          borderLeft: `2px solid ${accent}`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          borderBottom: `2px solid ${accent}`,
          borderRight: `2px solid ${accent}`,
        }}
      />

      {/* Image / gradient */}
      <div className="relative aspect-video overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${categoryGradient[project.category]} flex items-center justify-center`}
          >
            <span
              className="font-[family-name:var(--font-orbitron)] text-4xl font-black opacity-10 tracking-wider select-none"
              style={{ color: accent }}
            >
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Scanline overlay on image */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)",
          }}
        />

        {/* Category badge */}
        <div className="absolute top-2 left-2">
          <span
            className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest"
            style={{
              backgroundColor: `${accent}20`,
              color: accent,
              border: `1px solid ${accent}40`,
            }}
          >
            {categoryLabel[project.category]}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30">
              FEATURED
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-bold text-white uppercase tracking-wide mb-2 group-hover:transition-colors duration-200"
          style={{ ["--tw-text-opacity" as string]: "1" }}
        >
          {project.title}
        </h3>

        <p className="text-[#64748b] text-xs leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono text-[#475569] border border-[#1e293b]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-[#1e293b]">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-mono text-[#475569] hover:text-[#f1f5f9] transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <GithubIcon style={{ width: 13, height: 13 }} />
              CODE
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-mono text-[#475569] hover:text-[#f1f5f9] transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={13} />
              LIVE
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-mono text-[#475569] hover:text-[#f1f5f9] transition-colors"
            >
              <Play size={13} />
              DEMO
            </a>
          )}
          {project.links.writeup && (
            <a
              href={project.links.writeup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-mono text-[#475569] hover:text-[#f1f5f9] transition-colors"
            >
              <FileText size={13} />
              WRITEUP
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
