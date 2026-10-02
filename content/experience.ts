import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    id: "depi-ai-data-engineering-scholar",
    title: "AI & Data Engineering Scholar",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Egypt (Remote / Hybrid)",
    start: "2026-04",
    end: "present",
    bullets: [
      "Engineered automated Python and SQL ETL/ELT pipelines to ingest, clean, and transform unstructured datasets for downstream analytics and database loading.",
      "Designed normalized relational database schemas (3NF) and constructed optimized SQL queries, indexes, and views for high-performance transaction processing.",
      "Developed backend data scripts in Python and Java to automate data processing routines and mathematical computation models.",
      "Applied structured data quality controls, data validation checks, and schema enforcement to ensure data integrity across pipeline operations."
    ],
    summary:
      "Gained hands-on technical training in building end-to-end data pipelines, database architecture, and data automation workflows as part of DEPI's specialized track.",
    highlights: [
      "Built fault-tolerant ETL pipelines using Python and SQL to clean and process disparate data sources.",
      "Optimized relational schemas and complex SQL JOIN operations for fast response times.",
      "Automated data cleaning, missing value imputations, and schema validation routines."
    ],
    impact: "Successfully delivered automated data processing pipelines with high reliability and zero computational drift.",
    tech: ["Python", "SQL", "PostgreSQL", "MySQL", "Java", "ETL/ELT", "Git"],
    expanded: [
      {
        heading: "Data Engineering & Pipeline Automation",
        items: [
          "Engineered automated Python and SQL ETL/ELT pipelines to ingest, clean, and transform unstructured datasets for downstream analytics and database loading.",
          "Developed backend data scripts in Python and Java to automate data processing routines and mathematical computation models."
        ]
      },
      {
        heading: "Database Architecture & Optimization",
        items: [
          "Designed normalized relational database schemas (3NF) and constructed optimized SQL queries, indexes, and views for high-performance transaction processing."
        ]
      },
      {
        heading: "Data Quality & Validation",
        items: [
          "Applied structured data quality controls, data validation checks, and schema enforcement to ensure data integrity across pipeline operations."
        ]
      }
    ]
  }
];
