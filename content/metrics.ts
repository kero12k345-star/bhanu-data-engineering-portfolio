import type { Metric } from "@/types/content";

export const metrics: Metric[] = [
  {
    id: "etl-processing-time",
    value: "60%",
    label: "ETL Processing Time Saved",
    context: "Reduced automated data processing time by 60% using Python and SQL pipelines.",
    source: "Portfolio: Case Study #1 - Automated ETL Pipeline",
  },
  {
    id: "data-accuracy-rate",
    value: "100%",
    label: "Data Validation & Integrity",
    context: "Eliminated manual data entry errors and missing field gaps completely.",
    source: "Portfolio: Case Study #1 - Automated ETL Pipeline",
  },
  {
    id: "query-speedup",
    value: "3NF Normalized",
    label: "Relational Schema Optimization",
    context: "Structured database schemas and optimized SQL JOIN operations for fast responses.",
    source: "Portfolio: Case Study #2 - Database Optimization",
  },
];
