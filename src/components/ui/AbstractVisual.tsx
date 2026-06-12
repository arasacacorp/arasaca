"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface AbstractVisualProps {
  Icon?: React.ComponentType<{ className?: string }>;
  variant?: "light" | "dark";
}

export function AbstractVisual({ 
  Icon = Briefcase, 
  variant = "light" 
}: AbstractVisualProps) {
  const isDark = variant === "dark";
  
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        isDark 
          ? "bg-gradient-to-br from-[#004d5c]/60 via-[#00313C]/40 to-[#008C95]/30" 
          : "bg-gradient-to-br from-[#e8f5f3] via-[#d4eeea] to-[#b8e0dc]"
      }`} />
      
      {/* Grid pattern */}
      <div 
        className={`absolute inset-0 ${isDark ? "opacity-[0.05]" : "opacity-[0.07]"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,139,149,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,139,149,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-32 h-32 lg:w-40 lg:h-40"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div 
          className={`w-full h-full backdrop-blur-sm border shadow-xl ${
            isDark 
              ? "bg-gradient-to-br from-white/30 to-white/10 border-white/20" 
              : "bg-gradient-to-br from-[#008C95]/80 to-[#008C95]/40 border-white/30"
          }`}
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} 
        />
      </motion.div>

      <motion.div
        className="absolute top-[20%] right-[15%] w-24 h-24 lg:w-32 lg:h-32"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div 
          className={`w-full h-full backdrop-blur-sm border shadow-xl rotate-45 ${
            isDark 
              ? "bg-gradient-to-br from-[#77e2c3]/40 to-[#77e2c3]/20 border-white/20" 
              : "bg-gradient-to-br from-[#00313C]/60 to-[#00313C]/30 border-white/20"
          }`}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[20%] w-20 h-20 lg:w-28 lg:h-28"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div 
          className={`w-full h-full backdrop-blur-sm border shadow-xl rounded-full ${
            isDark 
              ? "bg-gradient-to-br from-[#008C95]/50 to-[#008C95]/20 border-white/20" 
              : "bg-gradient-to-br from-[#77e2c3]/70 to-[#77e2c3]/30 border-white/40"
          }`}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] right-[10%] w-36 h-36 lg:w-48 lg:h-48"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 3, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <div 
          className={`w-full h-full backdrop-blur-sm border shadow-2xl ${
            isDark 
              ? "bg-gradient-to-tl from-[#77e2c3]/30 to-[#008C95]/20 border-white/10" 
              : "bg-gradient-to-tl from-[#008C95]/50 to-[#00313C]/30 border-white/20"
          }`}
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} 
        />
      </motion.div>

      {/* Small decorative circles */}
      <motion.div
        className={`absolute top-[40%] left-[40%] w-4 h-4 rounded-full ${
          isDark ? "bg-[#77e2c3]/50" : "bg-[#008C95]/60"
        }`}
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-[60%] left-[60%] w-3 h-3 rounded-full ${
          isDark ? "bg-white/40" : "bg-[#77e2c3]/80"
        }`}
        animate={{ scale: [1, 1.8, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className={`absolute top-[30%] right-[35%] w-5 h-5 rounded-full ${
          isDark ? "bg-[#008C95]/40" : "bg-[#00313C]/40"
        }`}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Central icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`w-28 h-28 lg:w-36 lg:h-36 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border ${
          isDark 
            ? "bg-white/10 border-white/30" 
            : "bg-white/80 border-white/50"
        }`}>
          <Icon className={`w-12 h-12 lg:w-14 lg:h-14 ${isDark ? "text-[#77e2c3]" : "text-[#008C95]"}`} />
        </div>
      </motion.div>

      {/* Glow effect */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl ${
        isDark ? "bg-[#77e2c3]/10" : "bg-[#008C95]/10"
      }`} />
    </div>
  );
}
