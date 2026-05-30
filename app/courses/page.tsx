import { Sidebar } from "@/components/Sidebar"
import { createClient } from "@/lib/supabase"
import { CoursesListClient } from "./CoursesListClient"
import type { Course } from "@/types"
import { fallbackCourses } from "@/lib/data"

async function getCourses() {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!url || !key || url.includes("your-") || !url.startsWith("http")) {
      return fallbackCourses
    }

    const supabase = await createClient()
    const { data } = await supabase.from("courses").select("*") as { data: Course[] | null }

    return data && data.length > 0 ? data : fallbackCourses
  } catch {
    return fallbackCourses
  }
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="flex min-h-screen bg-background text-foreground selection:bg-accent-subtle">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8 pb-24 md:pb-8 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-white">Your courses</h1>
          </header>
          
          <CoursesListClient courses={courses} />
        </div>
      </main>
    </div>
  )
}
