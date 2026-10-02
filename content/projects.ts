import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "automated-etl-pipeline",
    title: "Automated Data Ingestion & ETL Pipeline",
    summary:
      "A robust Python and SQL ETL pipeline that ingests, cleans, validates, and transforms raw operational data into structured PostgreSQL tables for analytical consumption.",
    status: "complete",
    tech: ["Python", "pandas", "SQL", "PostgreSQL", "ETL", "Data Validation"],
    bullets: [
      "Built an end-to-end Python ETL pipeline to process and standardize raw data from disparate CSV/JSON sources into structured database tables.",
      "Implemented rigorous data quality checks, schema validation rules, and automated null/duplicate handling to enforce strict data integrity.",
      "Optimized data transformation routines to significantly cut ingestion processing time while maintaining complete audit logs."
    ],
    caseStudy: {
      problem:
        "Raw operational datasets contained inconsistent schemas, missing attributes, and duplicate records, causing errors in reporting and analysis.",
      approach:
        "Designed an automated pipeline using Python and SQL that validates, cleans, and loads data through structured Bronze/Silver staging layers.",
      responsibility: "Designed and implemented the entire pipeline, data validation rules, and database schemas.",
      validation:
        "Every record is checked against schema constraints, value ranges, and uniqueness rules before staging into production tables.",
      milestones: [
        { label: "Python data extraction and multi-format parsing", state: "implemented" },
        { label: "Automated validation for schema, duplicates, and missing values", state: "implemented" },
        { label: "PostgreSQL staging and production database loading", state: "implemented" }
      ]
    },
    architecture: {
      nodes: [
        { id: "raw", label: "Raw Sources" },
        { id: "extract", label: "Python Extraction" },
        { id: "validate", label: "Validation & Clean" },
        { id: "staging", label: "Staging Area" },
        { id: "postgres", label: "PostgreSQL Data Warehouse" }
      ],
      edges: [
        ["raw", "extract"],
        ["extract", "validate"],
        ["validate", "staging"],
        ["staging", "postgres"]
      ]
    },
    metricIds: ["etl-processing-time", "data-accuracy-rate"],
    featured: true
  },
  {
    slug: "relational-database-optimization",
    title: "Normalized Relational Database & Query Optimization System",
    summary:
      "A normalized 3NF relational database schema designed for high-concurrency transactions, featuring complex SQL queries, index optimization, and stored procedures.",
    status: "complete",
    tech: ["SQL Server", "PostgreSQL", "Database Design", "3NF Normalization", "Query Optimization"],
    bullets: [
      "Architected a Third Normal Form (3NF) relational database schema to eliminate redundancy and enforce data integrity across tables.",
      "Wrote complex SQL JOIN queries, indexed views, and stored procedures for fast data retrieval and transaction management.",
      "Executed query execution plan analysis to identify performance bottlenecks and optimize indexing strategies."
    ],
    caseStudy: {
      problem:
        "Un-normalized database schemas were causing severe data redundancy, slow query response times, and table lock issues under load.",
      approach:
        "Redesigned the entity-relationship model into 3NF and implemented strategic indexing and query tuning.",
      responsibility: "Architected the ER diagram, normalized schema, indexes, and stored procedures.",
      validation:
        "Ran benchmark performance tests on complex multi-table JOIN queries to measure execution time reduction.",
      milestones: [
        { label: "ERD modeling & 3NF Schema Normalization", state: "implemented" },
        { label: "Stored procedures & index optimization", state: "implemented" },
        { label: "Query Execution Plan tuning & benchmarking", state: "implemented" }
      ]
    },
    architecture: {
      nodes: [
        { id: "erd", label: "ER Diagram" },
        { id: "schema", label: "3NF Schema Design" },
        { id: "indexes", label: "Indexes & Views" },
        { id: "queries", label: "Optimized Queries" }
      ],
      edges: [
        ["erd", "schema"],
        ["schema", "indexes"],
        ["indexes", "queries"]
      ]
    },
    metricIds: ["query-speedup"],
    featured: true
  }
];
