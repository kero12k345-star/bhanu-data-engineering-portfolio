import type { SkillGroup } from "@/types/content";

export const skills: SkillGroup[] = [
  {
    id: "programming-data-processing",
    name: "Programming & Data Processing",
    skills: ["Python", "SQL", "Java", "pandas", "NumPy", "T-SQL"],
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    skills: [
      "ETL/ELT Pipelines",
      "Data Ingestion & Cleaning",
      "Data Transformation",
      "Automated Data Pipelines",
      "REST APIs Processing",
      "Batch Processing",
    ],
  },
  {
    id: "databases-storage",
    name: "Databases & Data Warehousing",
    skills: [
      "Data Warehousing",
      "PostgreSQL",
      "Microsoft SQL Server",
      "MySQL",
      "Relational Databases",
    ],
  },
  {
    id: "data-modeling-quality",
    name: "Data Modeling & Quality",
    skills: [
      "Data Warehouse Modeling",
      "3NF Normalization",
      "Relational Database Design",
      "Schema Design",
      "Data Validation",
      "Reconciliation",
      "Deduplication",
    ],
  },
  {
    id: "developer-tools",
    name: "Developer Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Eclipse IDE",
      "SQL Server Management Studio (SSMS)",
    ],
  },
];
