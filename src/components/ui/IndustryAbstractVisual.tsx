"use client";

import { motion } from "framer-motion";

interface IndustryAbstractVisualProps {
  Icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  variant?: "orange" | "dark-green";
}

export function IndustryAbstractVisual({
  Icon,
  variant = "orange",
}: IndustryAbstractVisualProps) {
  const isOrange = variant === "orange";

  // Color palettes
  const colors = isOrange
    ? {
        gradientFrom: "#E04E39",
        gradientVia: "#c94330",
        gradientTo: "#8B2500",
        shape1: "from-[#E04E39]/80 to-[#c94330]/40",
        shape1Border: "border-[#E04E39]/30",
        shape2: "from-[#f4a460]/50 to-[#E04E39]/25",
        shape2Border: "border-[#f4a460]/25",
        shape3: "from-[#fdba74]/70 to-[#f4a460]/30",
        shape3Border: "border-[#fdba74]/40",
        shape4: "from-[#E04E39]/40 to-[#8B2500]/25",
        shape4Border: "border-[#E04E39]/15",
        dotColor: "bg-[#f4a460]/70",
        dotColor2: "bg-white/50",
        dotColor3: "bg-[#E04E39]/50",
        iconBg: "bg-white/90 border-white/60",
        iconColor: "#E04E39",
        glowColor: "bg-[#E04E39]/12",
        gridColor: "rgba(224, 78, 57, 0.5)",
      }
    : {
        gradientFrom: "#00313C",
        gradientVia: "#004d5c",
        gradientTo: "#006B5E",
        shape1: "from-[#008C95]/80 to-[#006B5E]/40",
        shape1Border: "border-[#008C95]/30",
        shape2: "from-[#77e2c3]/50 to-[#008C95]/25",
        shape2Border: "border-[#77e2c3]/25",
        shape3: "from-[#4ade80]/70 to-[#008C95]/30",
        shape3Border: "border-[#4ade80]/40",
        shape4: "from-[#006B5E]/60 to-[#00313C]/30",
        shape4Border: "border-[#006B5E]/20",
        dotColor: "bg-[#77e2c3]/70",
        dotColor2: "bg-white/50",
        dotColor3: "bg-[#008C95]/50",
        iconBg: "bg-white/90 border-white/60",
        iconColor: "#008C95",
        glowColor: "bg-[#008C95]/12",
        gridColor: "rgba(0, 107, 94, 0.5)",
      };

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[${colors.gradientFrom}]/70 via-[${colors.gradientVia}]/50 to-[${colors.gradientTo}]/35`}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(${colors.gridColor} 1px, transparent 1px),
                           linear-gradient(90deg, ${colors.gridColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* === FLOATING SHAPES — different from AbstractVisual === */}

      {/* Shape 1: Hexagon (large, top-left) */}
      <motion.div
        className="absolute top-[8%] left-[5%] w-32 h-32 lg:w-40 lg:h-40"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className={`w-full h-full backdrop-blur-sm border shadow-xl bg-gradient-to-br ${colors.shape1} ${colors.shape1Border}`}
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />
      </motion.div>

      {/* Shape 2: Diamond / rotated square (top-right) */}
      <motion.div
        className="absolute top-[15%] right-[12%] w-28 h-28 lg:w-36 lg:h-36"
        animate={{
          y: [0, 18, 0],
          rotate: [45, 55, 45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div
          className={`w-full h-full backdrop-blur-sm border-2 shadow-xl bg-gradient-to-br ${colors.shape2} ${colors.shape2Border}`}
        />
      </motion.div>

      {/* Shape 3: Rounded rectangle (bottom-left) */}
      <motion.div
        className="absolute bottom-[22%] left-[15%] w-24 h-20 lg:w-32 lg:h-24"
        animate={{
          y: [0, -16, 0],
          x: [0, 8, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div
          className={`w-full h-full backdrop-blur-sm border shadow-xl bg-gradient-to-br ${colors.shape3} ${colors.shape3Border}`}
          style={{ borderRadius: "30% 10% 30% 10%" }}
        />
      </motion.div>

      {/* Shape 4: Large organic blob (bottom-right) — different blob shape */}
      <motion.div
        className="absolute bottom-[12%] right-[8%] w-36 h-36 lg:w-48 lg:h-48"
        animate={{
          scale: [1, 1.06, 1],
          rotate: [0, -4, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <div
          className={`w-full h-full backdrop-blur-sm border shadow-2xl bg-gradient-to-tl ${colors.shape4} ${colors.shape4Border}`}
          style={{
            borderRadius: "40% 60% 70% 30% / 50% 40% 60% 50%",
          }}
        />
      </motion.div>

      {/* Shape 5: Small triangle (mid-right area) */}
      <motion.div
        className="absolute top-[45%] right-[25%] w-16 h-16 lg:w-20 lg:h-20"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <div
          className={`w-full h-full backdrop-blur-sm border shadow-lg bg-gradient-to-br ${isOrange ? "from-[#fdba74]/60 to-[#E04E39]/30 border-[#fdba74]/30" : "from-[#4ade80]/60 to-[#008C95]/30 border-[#4ade80]/30"}`}
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </motion.div>

      {/* Shape 6: Thin horizontal bar (left-mid) */}
      <motion.div
        className="absolute top-[55%] left-[3%] w-28 h-3 lg:w-36 lg:h-4"
        animate={{
          x: [0, 10, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <div
          className={`w-full h-full rounded-full bg-gradient-to-r ${isOrange ? "from-[#E04E39]/50 to-transparent" : "from-[#008C95]/50 to-transparent"}`}
        />
      </motion.div>

      {/* === Small decorative circles === */}
      <motion.div
        className={`absolute top-[35%] left-[42%] w-4 h-4 rounded-full ${colors.dotColor}`}
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-[65%] left-[55%] w-3 h-3 rounded-full ${colors.dotColor2}`}
        animate={{ scale: [1, 2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className={`absolute top-[25%] right-[30%] w-5 h-5 rounded-full ${colors.dotColor3}`}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* === Central icon with glow === */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow behind icon */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 lg:w-56 lg:h-56 rounded-full blur-3xl ${colors.glowColor}`}
        />

        <div
          className={`relative w-28 h-28 lg:w-36 lg:h-36 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border ${colors.iconBg}`}
        >
          {Icon && (
            <Icon
              className="w-12 h-12 lg:w-14 lg:h-14"
              style={{ color: colors.iconColor }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
