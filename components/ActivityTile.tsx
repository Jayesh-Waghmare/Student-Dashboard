"use client"

import { motion } from "framer-motion"

const weeksData = [
  [2, 0, 1, 3, 0, 4, 2],
  [0, 1, 0, 2, 3, 0, 1],
  [3, 2, 0, 4, 1, 2, 3],
  [2, 3, 0, 1, 4, 0, 0], 
]

export function ActivityTile() {
  const getIntensityClass = (val: number) => {
    switch (val) {
      case 0: return "bg-white/[0.01] border-white/[0.01]"
      case 1: return "bg-accent-border/20 border-accent-border/10"
      case 2: return "bg-accent-border/45 border-accent-border/20"
      case 3: return "bg-accent-border/70 border-accent-border/30"
      case 4: return "bg-accent-text/60 border-accent-border/40"
      default: return "bg-accent-text border-accent-border/50"
    }
  }

  return (
    <motion.article 
      whileHover={{ 
        scale: 1.005 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-xl bg-card border border-border p-5 flex flex-col justify-between h-[160px] cursor-default transition-all duration-200 hover:border-accent-border hover:bg-surface"
    >
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold text-muted uppercase tracking-widest">
          Activity
        </p>
        <div className="flex items-center gap-1 text-[8px] text-muted font-bold uppercase tracking-wider select-none">
          <span>Less</span>
          <div className="w-2 h-2 rounded-[2px] bg-white/[0.01] border border-white/[0.01]" />
          <div className="w-2 h-2 rounded-[2px] bg-accent-border/20 border-accent-border/10" />
          <div className="w-2 h-2 rounded-[2px] bg-accent-border/45 border-accent-border/20" />
          <div className="w-2 h-2 rounded-[2px] bg-accent-text/60 border-accent-border/40" />
          <div className="w-2 h-2 rounded-[2px] bg-accent-text border-accent-border/50" />
          <span>More</span>
        </div>
      </div>
      
      <div className="grid grid-rows-4 gap-1.5 my-auto max-w-[210px] mx-auto w-full">
        {weeksData.map((week, wIdx) => (
          <div key={wIdx} className="grid grid-cols-7 gap-1.5">
            {week.map((val, dIdx) => (
              <div
                key={dIdx}
                className={`w-full aspect-square rounded-[2px] border ${getIntensityClass(val)} transition-all duration-200 hover:scale-110 hover:border-accent`}
                title={`${val > 0 ? `${val} hours` : "No activity"} study`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-1 text-[9px] text-muted font-bold uppercase tracking-wider">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>
    </motion.article>
  )
}
