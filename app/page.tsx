
import { Sidebar } from "@/components/Sidebar"
import { HeroTile } from "@/components/HeroTile"
import { CourseCard, CoursesGrid } from "@/components/CourseCard"
import { ActivityTile } from "@/components/ActivityTile"
import { Suspense } from "react"
import { SkeletonLoader } from "@/components/SkeletonLoader"
import type { Course } from "@/types"

import { getCourses } from "@/lib/data"

async function CourseList() {
  const courses = await getCourses()
  return (
    <CoursesGrid>
      {courses.map((course: Course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </CoursesGrid>
  )
}

export default function DashboardPage() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).toUpperCase()

  return (
    <div className="flex min-h-screen bg-background text-white selection:bg-amber-500/20">
      <Sidebar />

      <main className="flex-1 p-6 md:p-8 pb-24 md:pb-8 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            </div>
            <div className="text-[10px] font-bold text-muted uppercase tracking-widest bg-surface px-4 py-2 rounded-md border border-border cursor-default font-mono">
              {formattedDate}
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HeroTile />
            <ActivityTile />
          </div>

          <section className="space-y-6 pt-4">
            <div className="flex items-center gap-4">
              <h2 className="text-[10px] font-bold text-muted uppercase tracking-widest whitespace-nowrap">ACTIVE COURSES</h2>
              <div className="h-px w-full bg-border/40" />
            </div>
              
            <Suspense
              fallback={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <SkeletonLoader />
                </div>
              }
            >
              <CourseList />
            </Suspense>
          </section>
        </div>
      </main>
    </div>
  )
}
