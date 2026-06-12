export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  id: string;
  title: string;
  accent: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "security",
    title: "Security & Malware",
    accent: "green",
    skills: [
      { name: "Malware Analysis", level: 95 },
      { name: "Reverse Engineering", level: 100 },
      { name: "Memory Forensics", level: 85 },
      { name: "YARA / Sigma Rules", level: 99 },
      { name: "x86/x64 Assembly", level: 97 },
      { name: "Vulnerability Research", level: 78 },
    ],
  },
  {
    id: "embedded",
    title: "Embedded & Systems",
    accent: "cyan",
    skills: [
      { name: "C / C++", level: 88 },
      { name: "Arduino / AVR", level: 85 },
      { name: "RTOS", level: 72 },
      { name: "Serial / UART / I2C", level: 80 },
      { name: "Linux Kernel / Drivers", level: 95 },
      { name: "Hardware Debugging", level: 75 },
    ],
  },
  {
    id: "dev",
    title: "Development",
    accent: "magenta",
    skills: [
      { name: "Python", level: 92 },
      { name: "TypeScript / React", level: 82 },
      { name: "Salesforce / Apex", level: 75 },
      { name: "Flutter / Dart", level: 68 },
      { name: "Docker / CI/CD", level: 78 },
      { name: "Linux / Bash", level: 99 },
    ],
  },
];
