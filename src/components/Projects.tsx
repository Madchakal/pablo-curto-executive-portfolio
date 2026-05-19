"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const experiences = [
    {
      company: "Scotiabank Uruguay",
      role: "Technical Leader & Architecture Advisor",
      duration: "May 2025 – Present",
      description: "Technical Leader in charge of the platform modernization strategy within the bank's financial ecosystem. Responsible for guiding the engineering team in the technological evolution towards microservices and ensuring the adoption of global architecture best practices.",
      tech: ["Microservices", "Design Patterns", "Architecture", "DB Optimization", "Tech Leadership"],
    },
    {
      company: "Santander Tecnología",
      role: "Software Engineer / Tech Lead & Squad Facilitator",
      duration: "Sep 2019 – May 2025",
      description: "Led a multidisciplinary team assuming dual responsibility for technical direction and Agile facilitation. Defined robust architecture guidelines using Spring Framework, PostgreSQL, and cloud ecosystems.",
      tech: ["Agile Leadership", "Scrum", "Spring Boot", "PostgreSQL", "Cloud"],
    },
    {
      company: "Capgemini",
      role: "Senior Software Development Analyst",
      duration: "Jun 2018 – Sep 2019",
      description: "Senior Analyst on critical large-scale corporate projects, designing and optimizing complex databases in PostgreSQL and analytics models for business decision-making.",
      tech: ["Data Analytics", "PostgreSQL", "Systems Analysis", "B2B"],
    },
    {
      company: "LOYAL Technology",
      role: "Senior Developer Analyst",
      duration: "Apr 2011 – May 2018",
      description: "Development and evolution of proprietary technological products. Technical leadership in designing interconnected data architectures through complex structures and database optimization for scalability.",
      tech: ["JSON", "RESTful APIs", "Data Analysis", "DB Design", "Backend"],
    },
    {
      company: "Gobierno de la Ciudad de Buenos Aires",
      role: "Sr. Development Analyst",
      duration: "Sep 2006 – Apr 2011",
      description: "Analysis, design, and development of highly critical internal IT applications for public administration. Advanced development of business logic in databases using PL/SQL.",
      tech: ["PL/SQL", "Oracle Forms", "Oracle Reports", "Functional Analysis"],
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Experience & Impact
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            A track record of leading technical initiatives, modernizing legacy systems, and driving high-performance engineering teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3 sm:gap-0">
                  <span className="text-sm font-medium text-cyan-400 border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
                    {exp.duration}
                  </span>
                  <div className="hidden sm:flex w-10 h-10 rounded-full bg-slate-800 items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                  {exp.company}
                </h3>
                <h4 className="text-lg font-medium text-slate-300 mb-4">
                  {exp.role}
                </h4>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {exp.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

