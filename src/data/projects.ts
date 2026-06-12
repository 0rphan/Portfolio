export interface Project {
  id: string;
  title: string;
  description: string;
  /** Path under /public/projects/ or absolute URL */
  image?: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    writeup?: string;
    demo?: string;
  };
  category: "security" | "gaming" | "dev";
  featured?: boolean;
}

export const projects: Project[] = [
  // ── GAMING ────────────────────────────────────────────────────────────────
  {
    id: "the-daily-game-hub",
    title: "TheDailyGameHub",
    description:
      "A curated web platform serving up daily browser-based games. Built with HTML, CSS, JavaScript and a Python backend — your one-stop hub for a quick gaming fix every day.",
    image: "/projects/thedailygamehub.png",
    tags: ["HTML", "JavaScript", "CSS", "Python"],
    links: {
      github: "https://github.com/0rphan/TheDailyGameHub",
    },
    category: "gaming",
    featured: true,
  },

  // ── SECURITY ──────────────────────────────────────────────────────────────
  {
    id: "biss-ctf",
    title: "BissCTF",
    description:
      "A fully custom CTF (Capture The Flag) platform built for the BISS community. Challenges written in C, containerised with Docker, scored via a Python backend, and served through a web scoreboard.",
    image: "/projects/bissctf.png",
    tags: ["C", "Python", "Docker", "CTF", "Security"],
    links: {
      github: "https://github.com/0rphan/BissCTF",
    },
    category: "security",
    featured: true,
  },

  // ── DEV ───────────────────────────────────────────────────────────────────
  {
    id: "qtax-salesforce",
    title: "QtaxSalesforce",
    description:
      "A Salesforce-integrated tax management solution. Built with Apex and JavaScript directly on the Salesforce platform, automating tax calculations and streamlining CRM-linked workflows.",
    image: "/projects/qtaxsalesforce.png",
    tags: ["Salesforce", "Apex", "JavaScript", "HTML", "CRM"],
    links: {
      github: "https://github.com/0rphan/QtaxSalesforce",
    },
    category: "dev",
    featured: true,
  },
  {
    id: "postik",
    title: "Postik",
    description:
      "A modern social posting web application with a full TypeScript/React frontend and a PostgreSQL database. Clean UI, real-time feed, and a solid full-stack architecture.",
    image: "/projects/postik.png",
    tags: ["TypeScript", "React", "PostgreSQL", "Full Stack"],
    links: {
      github: "https://github.com/0rphan/postik",
    },
    category: "dev",
  },
  {
    id: "coupix",
    title: "Coupix",
    description:
      "A cross-platform Flutter mobile app for managing and organising digital coupons. Runs on both iOS and Android with a clean, intuitive interface built with Dart.",
    image: "/projects/coupix.png",
    tags: ["Flutter", "Dart", "Mobile", "iOS", "Android"],
    links: {
      github: "https://github.com/0rphan/Coupix",
    },
    category: "dev",
  },
  {
    id: "biss-bot",
    title: "Biss Bot",
    description:
      "A feature-rich Discord bot built for the BISS community server. Includes moderation commands, fun utilities, database integration, and a clean cog-based Python architecture with Docker deployment.",
    image: "/projects/bissbot.png",
    tags: ["Python", "Discord.py", "Docker", "Bot"],
    links: {
      github: "https://github.com/0rphan/biss-bot",
    },
    category: "dev",
  },
  {
    id: "pydeck",
    title: "PyDeck",
    description:
      "A DIY stream deck built from an Arduino Nano and a custom numpad. Python bridges serial input to OBS Studio via websocket — all the functionality of a $150 Elgato for almost nothing.",
    image: "/projects/pydeck.png",
    tags: ["Python", "Arduino", "C++", "OBS", "Hardware"],
    links: {
      github: "https://github.com/0rphan/pydeck",
    },
    category: "dev",
    featured: true,
  },
];
