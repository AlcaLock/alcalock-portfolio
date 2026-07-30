import type { SkillMap } from "@/types";

/**
 * Add or remove a skill by editing the relevant array. The Skills
 * section renders every category and item found here — no component
 * changes required.
 */
export const skills: SkillMap = {
  languages: [
    { name: "C#" },
    { name: "Java" },
    { name: "Python" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "SQL" },
    { name: "C++", learning: true },
  ],
  frontend: [
    { name: "React" },
    { name: "Angular" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind CSS" },
  ],
  backend: [
    { name: ".NET" },
    { name: "ASP.NET" },
    { name: "Node.js" },
    { name: "REST APIs" },
  ],
  databases: [{ name: "SQL Server" }, { name: "MySQL" }],
  tools: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "SonarQube" },
    { name: "Postman" },
  ],
  methodologies: [{ name: "Agile" }, { name: "Scrum" }, { name: "SAFe" }],
};
