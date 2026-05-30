"use client"

import { motion } from "framer-motion"

interface StatCardProps {
  title: string
  value: string
  target: string
  isHero?: boolean
}

export function StatCard({ title, value, target, isHero = false }: StatCardProps) {
  return (
    <motion.div 
      whileHover={{ 
        scale: 1.005 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-xl p-6 w-full relative overflow-hidden shadow-md transition-all duration-200 border cursor-default hover:border-accent-border hover:bg-surface ${
        isHero 
          ? "bg-card border-border shadow-lg" 
          : "bg-card border-border/60"
      }`}
    >
      {isHero && <div className="absolute top-0 left-0 w-1 h-full bg-accent" />}
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted font-mono">{title}</span>
      <p className={`text-3xl font-bold mt-2 font-mono ${isHero ? "text-accent-text" : "text-foreground"}`}>
        {value}
      </p>
      <p className="text-[10px] text-muted mt-2">{target}</p>
    </motion.div>
  )
}
