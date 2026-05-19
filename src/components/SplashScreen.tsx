"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Splash logo size (px)
const SPLASH_SIZE = 220;

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [target, setTarget] = useState<{ x: number; y: number; scale: number } | null>(null);
  const [flyUp, setFlyUp] = useState(false);

  useEffect(() => {
    // Measure navbar logo position after mount
    const measure = () => {
      const navLogo = document.getElementById("navbar-logo");
      if (!navLogo) return;
      const rect = navLogo.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Center of the splash logo is at (vw/2, vh/2)
      // Center of the navbar logo is at (rect.left + rect.width/2, rect.top + rect.height/2)
      const targetCx = rect.left + rect.width / 2;
      const targetCy = rect.top + rect.height / 2;

      const dx = targetCx - vw / 2;
      const dy = targetCy - vh / 2;
      const scale = rect.width / SPLASH_SIZE;

      setTarget({ x: dx, y: dy, scale });
    };

    measure();

    // Start fly-up at 1.2s
    const flyTimer = setTimeout(() => {
      measure(); // re-measure in case layout shifted
      setFlyUp(true);
    }, 1200);

    // Hide completely at 2.2s
    const hideTimer = setTimeout(() => setVisible(false), 2200);

    return () => {
      clearTimeout(flyTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: flyUp ? 0 : 1 }}
          transition={{ duration: 0.4, delay: flyUp ? 0.5 : 0 }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={
              flyUp && target
                ? {
                    x: target.x,
                    y: target.y,
                    scale: target.scale,
                    opacity: 0,
                  }
                : { x: 0, y: 0, scale: 1, opacity: 1 }
            }
            transition={{
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ transformOrigin: "center center" }}
          >
            {/* Glow ring */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/25 blur-3xl rounded-full scale-150" />
              <Image
                src="/logo-v4.png"
                alt="PC"
                width={SPLASH_SIZE}
                height={SPLASH_SIZE}
                className="relative object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.9)]"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
