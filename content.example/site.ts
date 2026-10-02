import type { Site } from "@/types/content";

export const site: Site = {
  name: {
    full: "Kerolos Gerges Shafeq",
    short: "Kerolos",
    monogram: "KS",
  },

  positioning:
    "Junior Data Engineer building reliable data pipelines, automated ETL/ELT workflows, and optimized relational database architectures.",

  location: "Asyut",

  contact: {
    email: "kero12k345@gmail.com",
    phone: { display: "+20 112 813 3481", tel: "+201128133481" },
  },

  seo: {
    title: "Kerolos Gerges Shafeq | Junior Data Engineer",
    description:
      "Kerolos Gerges Shafeq, Junior Data Engineer specializing in Python, SQL, ETL pipelines, and database optimization.",
    url: "https://kerolos-shafik.vercel.app",
  },

  sourceRepository: {
    label: "Portfolio Source",
    description: "Next.js · TypeScript · Tailwind CSS",
    url: "https://github.com/kero12k345-star/bhanu-data-engineering-portfolio",
  },

  portrait: {
    src: "/images/profile/WhatsApp Image 2026-10-02 at 10.04.39 PM.jpeg",
    alt: "Portrait of Kerolos Gerges Shafeq",
    width: 400,
    height: 400,
  },
};
