"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Layers,
  TerminalSquare,
  BookOpen,
  type LucideIcon,
} from "lucide-react"
import type { Course } from "@/types"

const icons: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  terminal: TerminalSquare,
  book: BookOpen,
}



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
}

const getProgressColor = (progress: number) => {
  if (progress === 100) return "bg-success-text"
  if (progress >= 75) return "bg-accent-text"
  if (progress >= 40) return "bg-warning-text"
  return "bg-info-text"
}

export function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon_name] ?? Code2

  return (
    <motion.article
      variants={item}
      whileHover={{
        scale: 1.008
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          console.log(`Open course: ${course.title}`)
        }
      }}
      className="rounded-xl bg-card border border-border p-5 cursor-pointer group flex flex-col h-[130px] justify-between transition-all duration-200 hover:border-accent-border hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-border/50 focus-visible:border-accent-border relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,88,12,0.035),transparent_60%)] pointer-events-none rounded-xl" />

      <div className="flex items-center gap-3 relative z-10">
        <div className="p-2 rounded-md bg-surface text-muted border border-border/40">
          <Icon size={16} className="shrink-0" />
        </div>
        <h3 className="text-sm font-semibold text-foreground group-hover:text-accent-text transition-colors">
          {course.title}
        </h3>
      </div>

      <div className="mt-auto relative z-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Progress</span>
          <span className="text-[11px] text-muted font-mono">{course.progress}%</span>
        </div>
        <div
          className="h-1.5 w-full rounded-full bg-surface overflow-hidden border border-border/20"
          role="progressbar"
          aria-valuenow={course.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${course.title} progress`}
        >
          <motion.div
            className={`h-full rounded-full ${getProgressColor(course.progress)}`}
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.article>
  )
}

export function CoursesGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {children}
    </motion.div>
  )
}
