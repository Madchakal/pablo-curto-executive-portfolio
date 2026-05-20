"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
  details?: {
    fullDescription: string;
    achievements: { title: string; desc: string }[];
  };
}

export default function Projects() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedExp]);

  const experiences: Experience[] = [
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
      tech: ["Agile Leadership", "Scrum", "Spring Boot", "Apache Kafka", "PostgreSQL", "Oracle DB", "DevOps"],
      details: {
        fullDescription: "Progressed through key engineering areas within the bank, culminating in a dual role as Technical Lead and Project Leader / Squad Facilitator. Acted as the bridge between technical execution and business strategy, managing architecture, delivery pipelines, and driving Agile methodologies for multidisciplinary teams.",
        achievements: [
          {
            title: "Technical & Project Leadership (Messages & Notifications)",
            desc: "Steered the team as Tech Lead and Project Leader through a complete core system re-engineering. Successfully modernized the platform by introducing Apache Kafka to handle event-driven architectures and high-throughput real-time messaging."
          },
          {
            title: "Data Engineering & Compliance",
            desc: "Led the technical strategy within the Data Engineering squad to architect and implement robust data sanitization pipelines, ensuring secure and compliant data transmission to Santander Spain."
          },
          {
            title: "Product Innovation (Backoffice Builder)",
            desc: "Directed the design and architecture of a custom Backoffice layout manager application, enabling internal teams to dynamically compose and preview multi-device push notifications and messages."
          },
          {
            title: "Performance & DevOps Optimization",
            desc: "Started as the Technical Reference for the Statistics and Rewards domain, optimizing high-volume Oracle batch processes. Collaborated closely with DevOps to build automated file-transfer pipelines interacting with legacy infrastructure."
          },
          {
            title: "Agile Facilitation",
            desc: "Facilitated Scrum and Kanban ceremonies (Dailies, Plannings, Retrospectives), effectively removing team blockers, optimizing sprint velocity, and mentoring engineers."
          }
        ]
      }
    },
    {
      company: "Capgemini",
      role: "Senior Software Development Analyst & Technical Lead",
      duration: "Jun 2018 – Sep 2019",
      description: "Acted as a Senior Analyst and Technical Lead for Capgemini’s most critical corporate client in Argentina: Cargill. Responsible for designing high-availability systems and driving architectural decisions for complex logistics and data analytics platforms.",
      tech: ["MongoDB", "Geospatial Data", "Java", "Oracle DB", "Data Analytics", "Performance Tuning"],
      details: {
        fullDescription: "Acted as a Senior Analyst and Technical Lead for Capgemini’s most critical corporate client in Argentina: Cargill. Responsible for designing high-availability systems and driving architectural decisions for complex logistics and data analytics platforms.",
        achievements: [
          {
            title: "Geolocalisation System Design",
            desc: "Architected and developed the real-time geolocalisation and tracking system for barges transporting grain along the Paraná River. Implemented MongoDB specifically to store and query geospatial data and real-time telemetry efficiently.",
          },
          {
            title: "Performance Engineering (Batch Processes)",
            desc: "Tackled the complex task of optimizing legacy batch processes for corporate reporting, significantly reducing execution times and ensuring data consistency for critical business decision-making.",
          },
          {
            title: "Architecture & Core Tech Stack",
            desc: "Developed robust backend solutions using Java and Oracle DB for core transactional business logic, seamlessly integrated with the NoSQL tracking system.",
          },
          {
            title: "Data Analytics Integration",
            desc: "Created complex data and analytics models to process high-volume operational metrics, converting raw logistics data into actionable business insights.",
          },
        ],
      },
    },
    {
      company: "LOYAL Technology",
      role: "Senior Architect & Technical Consultant (Relational DB Specialist)",
      duration: "Apr 2011 – May 2018",
      description: "Joined as a Senior Developer and was promoted to the Enterprise Architecture Staff, specializing in relational database systems. Acted as a High-Level Technical Consultant for major global and national corporations (including Equifax Veraz, Artear, Arcor, and Monsanto), designing and delivering large-scale technical solutions tailored to complex business needs.",
      tech: ["Oracle DB", "Java", "JSON", "RESTful APIs", "DB Design", "Performance Tuning"],
      details: {
        fullDescription: "Joined as a Senior Developer and was promoted to the Enterprise Architecture Staff, specializing in relational database systems. Acted as a High-Level Technical Consultant for major global and national corporations (including Equifax Veraz, Artear, Arcor, and Monsanto), designing and delivering large-scale technical solutions tailored to complex business needs.",
        achievements: [
          {
            title: "Architecture & Scalability",
            desc: "Designed and evolved interconnected data architectures for proprietary technological products, ensuring system scalability and robust data integrity using Oracle DB and Java.",
          },
          {
            title: "Enterprise Consulting",
            desc: "Partnered with C-level stakeholders and technical teams at blue-chip clients to assess requirements, troubleshoot performance issues, and architect high-impact solutions.",
          },
          {
            title: "Database Engineering",
            desc: "Specialized in advanced relational database design, query optimization, and performance tuning for high-volume data environments.",
          },
          {
            title: "Technical Leadership",
            desc: "Mentored development teams on relational database best practices and architectural patterns, establishing coding standards that reduced technical debt.",
          },
        ],
      },
    },
    {
      company: "Gobierno de la Ciudad de Buenos Aires",
      role: "Sr. Development Analyst",
      duration: "Sep 2006 – Apr 2011",
      description: "Analysis, design, and development of highly critical internal IT applications for public administration. Advanced development of business logic in databases using PL/SQL.",
      tech: ["PL/SQL", "Oracle Forms", "Oracle Reports", "Functional Analysis"],
      details: {
        fullDescription: "This was my first professional role in the industry, where I built a solid foundation in enterprise-level software engineering. I specialized in the analysis, design, and development of highly critical internal IT applications for public administration, eventually taking full technical ownership of the Billing Module within SIGAF (the city's core Integrated Financial Management System).",
        achievements: [
          {
            title: "Core Module Ownership",
            desc: "Led the technical development and maintenance of the SIGAF Billing Module, ensuring data consistency and system reliability for large-scale public finances.",
          },
          {
            title: "Database Engineering",
            desc: "Developed complex business logic, stored procedures, triggers, and packages using advanced PL/SQL.",
          },
          {
            title: "Performance Tuning",
            desc: "Mastered SQL query optimization, significantly improving data retrieval times and report generation efficiency.",
          },
          {
            title: "Legacy & Reporting Systems",
            desc: "Designed and maintained enterprise reports and user interfaces utilizing Oracle Forms 6i and Oracle Reports.",
          },
          {
            title: "Full-Stack Exposure",
            desc: "Gained hands-on experience with Java fundamentals, contributing to the integration of modern backend components into existing architectures.",
          },
        ],
      },
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
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
          {experiences.map((exp, idx) => {
            const hasDetails = !!exp.details;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => hasDetails && setSelectedExp(exp)}
                className={`group relative flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden ${
                  hasDetails ? "cursor-pointer hover:border-cyan-500/50" : "hover:border-slate-700"
                }`}
              >
                {/* Subtle background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 ${
                  hasDetails ? "to-cyan-500/8" : "to-slate-500/5"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3 sm:gap-0">
                    <span className="text-sm font-medium text-cyan-400 border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
                      {exp.duration}
                    </span>
                    {hasDetails && (
                      <div className="hidden sm:flex w-10 h-10 rounded-full bg-slate-800 items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    )}
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
                  
                  {hasDetails && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 mb-6">
                      Click to view detailed impact
                      <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  )}
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
            );
          })}
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedExp && selectedExp.details && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden bg-slate-900/90 border border-slate-800 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col z-10"
            >
              {/* Decorative Accent Glow */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              
              {/* Header */}
              <div className="p-8 pb-4 flex items-start justify-between border-b border-slate-800/60">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2 block">
                    Detailed Work History
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {selectedExp.company}
                  </h3>
                  <p className="text-slate-400 font-medium text-sm md:text-base mt-1">
                    {selectedExp.role} <span className="text-slate-600 mx-2">•</span> {selectedExp.duration}
                  </p>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-8 overflow-y-auto space-y-8 custom-scrollbar">
                {/* Full Description */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
                    Overview
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {selectedExp.details.fullDescription}
                  </p>
                </div>

                {/* Achievements & Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                    Key Responsibilities & Achievements
                  </h4>
                  <div className="space-y-4">
                    {selectedExp.details.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        {/* Bullet Icon */}
                        <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/item:scale-125 transition-transform duration-200" />
                        <div>
                          <p className="text-sm md:text-base text-slate-200 font-semibold leading-tight">
                            {item.title}
                          </p>
                          <p className="text-xs md:text-sm text-slate-400 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
                    Technologies & Skills Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/30 border border-cyan-800/30 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-slate-950/60 border-t border-slate-800/60 flex justify-end">
                <button
                  onClick={() => setSelectedExp(null)}
                  className="px-5 py-2 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  Close Detail View
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
