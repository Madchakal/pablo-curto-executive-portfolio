"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center pt-20 pb-20 overflow-hidden">

      {/* ── Decorative code watermark ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <pre className="absolute top-0 right-0 text-[11px] font-mono text-cyan-300 leading-6 p-8 text-right whitespace-pre">
{`const pablo = {
  role: "Technical Leader",
  focus: "Backend & Architecture",
  experience: "20+ years",
  impact: () => buildScalableSystems(),
  leadership: teams => teams.map(empower),
};

export default pablo;`}
        </pre>
      </div>

      {/* ── Multi-layer glow background ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        {/* ── HELLO greeting – full width, centered ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-400 tracking-[0.2em] uppercase">
            Hello, I&apos;m <span className="text-cyan-400 font-normal">Pablo.</span>
          </p>
        </motion.div>

        {/* ── Main split layout ── */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT – Text block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-8 font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for new opportunities
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white italic leading-[1.15] mb-6 tracking-tight">
              Building scalable platforms{" "}
              <span className="not-italic font-normal text-slate-400">&amp;</span>{" "}
              leading high-performance engineering teams.
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I am a Technical Leader and Senior Backend Engineer focused on empowering high-performance teams.
              I bridge the gap between product vision and flawless execution, guiding squads to build clean,
              scalable architectures and deliver top-tier digital experiences.
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a 
                href="https://wa.me/541153852413" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white text-slate-950 px-8 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Start a Conversation
              </a>
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-slate-700 text-white px-8 font-semibold text-sm transition-all duration-300 hover:border-cyan-500/60 hover:bg-cyan-500/5"
              >
                View Experience
              </Link>
            </div>

            {/* Tech stack honeycomb hexagons */}
            <div className="flex flex-col gap-0 items-center lg:items-start select-none py-4">
              {/* Row 1 (5 items) */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.06
                    }
                  }
                }}
                initial="hidden"
                animate="show"
                className="flex gap-3 justify-center lg:justify-start"
              >
                {[
                  { src: "/logos/b59d3d29f8689323df06d0e9adbff57c.png", alt: "Java", customClass: "scale-[1.25] md:scale-[1.3] group-hover:scale-[1.4] md:group-hover:scale-[1.45]" },
                  { src: "/logos/Spring_Boot.svg.png", alt: "Spring Boot", customClass: "scale-[0.85] md:scale-[0.9] group-hover:scale-[1.0] md:group-hover:scale-[1.05]" },
                  { src: "/logos/images-removebg-preview.png", alt: "PostgreSQL" },
                  { src: "/logos/MongoDB_Logo.svg.png", alt: "MongoDB", customClass: "scale-[1.15] md:scale-[1.2] group-hover:scale-[1.3] md:group-hover:scale-[1.35]" },
                  { src: "/logos/Redis-Logo.wine.png", alt: "Redis", customClass: "scale-[1.2] md:scale-[1.25] group-hover:scale-[1.35] md:group-hover:scale-[1.4]" }
                ].map((logo, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6, y: 15 },
                      show: { 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        transition: { type: "spring", stiffness: 120, damping: 14 }
                      }
                    }}
                    className="group relative w-20 h-20 md:w-24 md:h-24 bg-slate-800 hover:bg-cyan-500/80 transition-colors duration-300"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <div 
                      className="w-full h-full bg-white scale-95 flex items-center justify-center hover:bg-slate-50 transition-colors duration-300"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.alt}
                        className={`w-14 h-14 md:w-16 md:h-16 object-contain brightness-95 grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-300 cursor-help ${logo.customClass || "group-hover:scale-110"}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Row 2 (4 items) - Staggered Offset */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.30
                    }
                  }
                }}
                initial="hidden"
                animate="show"
                className="flex gap-3 justify-center lg:justify-start ml-[46px] md:ml-[54px] -mt-[18px] md:-mt-[22px]"
              >
                {[
                  { src: "/logos/kafka_new.png", alt: "Kafka" },
                  { src: "/logos/docker_new.png", alt: "Docker" },
                  { src: "/logos/git_new.png", alt: "Git" },
                  { src: "/logos/github.png", alt: "GitHub" }
                ].map((logo, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6, y: 15 },
                      show: { 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        transition: { type: "spring", stiffness: 120, damping: 14 }
                      }
                    }}
                    className="group relative w-20 h-20 md:w-24 md:h-24 bg-slate-800 hover:bg-cyan-500/80 transition-colors duration-300"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <div 
                      className="w-full h-full bg-white scale-95 flex items-center justify-center hover:bg-slate-50 transition-colors duration-300"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.alt}
                        className={`w-14 h-14 md:w-16 md:h-16 object-contain brightness-95 grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-300 cursor-help ${logo.customClass || "group-hover:scale-110"}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Row 3 (4 items) - No Staggered Offset, Nested Vertical Offset */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.54
                    }
                  }
                }}
                initial="hidden"
                animate="show"
                className="flex gap-3 justify-center lg:justify-start -mt-[18px] md:-mt-[22px]"
              >
                {[
                  { src: "/logos/jira_new.png", alt: "Jira" },
                  { src: "/logos/python_new.png", alt: "Python" },
                  { src: "/logos/dynatrace.png", alt: "Dynatrace" },
                  { src: "/logos/grafana.png", alt: "Grafana" },
                  { src: "/logos/oracle.png", alt: "Oracle Database" }
                ].map((logo, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6, y: 15 },
                      show: { 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        transition: { type: "spring", stiffness: 120, damping: 14 }
                      }
                    }}
                    className="group relative w-20 h-20 md:w-24 md:h-24 bg-slate-800 hover:bg-cyan-500/80 transition-colors duration-300"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <div 
                      className="w-full h-full bg-white scale-95 flex items-center justify-center hover:bg-slate-50 transition-colors duration-300"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.alt}
                        className={`w-14 h-14 md:w-16 md:h-16 object-contain brightness-95 grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-300 cursor-help ${logo.customClass || "group-hover:scale-110"}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-5 text-slate-600">
              <a href="https://www.linkedin.com/in/pablo-curto-04b48031" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:pablo.daniel.curto@gmail.com" className="hover:text-slate-300 transition-colors duration-200" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT – Profile image with floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="flex-1 w-full max-w-sm lg:max-w-md mx-auto relative"
          >
            {/* Glowing border ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-600/10 to-transparent blur-md" />

            {/* Photo card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 shadow-[0_0_60px_-10px_rgba(6,182,212,0.2)] aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
              <Image
                src="/profile-neon.jpg"
                alt="Pablo Curto"
                fill
                className="object-cover object-[50%_30%] hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />


            </div>

            {/* Floating badge – Years of exp */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-8 top-10 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-2xl p-3 shadow-xl"
            >
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-xs text-slate-400 mt-0.5">Years of<br />Experience</p>
            </motion.div>

            {/* Floating badge – Projects */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-8 top-1/3 bg-slate-900/90 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-3 shadow-xl"
            >
              <p className="text-2xl font-bold text-cyan-400">5+</p>
              <p className="text-xs text-slate-400 mt-0.5">Companies<br />Led</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
