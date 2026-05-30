"use client"

import { useState } from "react"
import { CourseCard } from "@/components/CourseCard"
import type { Course } from "@/types"

export function CoursesListClient({ courses }: { courses: Course[] }) {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"everything" | "in progress" | "done">("everything")

  const filtered = courses.filter(course => {
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase())
    if (!matchSearch) return false
    
    if (filter === "in progress") return course.progress < 100
    if (filter === "done") return course.progress === 100
    return true
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search your courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-surface border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent-border focus:ring-1 focus:ring-accent-border/30 transition-all w-full text-foreground placeholder-muted focus-visible:ring-2 focus-visible:ring-accent-border/50"
          />
        </div>
        
        <div className="flex gap-2 p-1 bg-surface border border-border rounded-xl w-fit">
          {(["everything", "in progress", "done"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-border/50 ${
                filter === t
                  ? "bg-accent text-black shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card overflow-hidden p-12 text-center">
          <p className="text-muted text-sm font-medium">No courses found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
