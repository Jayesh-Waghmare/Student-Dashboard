"use client"

import { motion } from "framer-motion"
import { Flame } from "lucide-react"

export function HeroTile() {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? "GOOD MORNING" : hour < 17 ? "GOOD AFTERNOON" : "GOOD EVENING"

  const streak = 14
  const userName = "Sarah"

  return (
    <motion.article 
      whileHover={{ 
        scale: 1.005 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="md:col-span-2 rounded-xl bg-card border border-border p-6 h-[160px] flex flex-col justify-center cursor-default shadow-lg relative overflow-hidden transition-all duration-200 hover:border-accent-border hover:bg-surface"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
      <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2 font-mono">
        {greeting}
      </p>
      <h2 className="text-2xl font-bold text-foreground tracking-tight mb-3">
        Welcome back, {userName}
      </h2>
      <div className="flex items-center gap-1.5 text-xs text-accent-text font-bold uppercase tracking-wider">
        <Flame size={14} className="fill-accent-text text-accent-text" /> 
        <span className="font-mono">{streak}</span>
        <span>Day Streak</span>
      </div>
    </motion.article>
  )
}
