import { createClient } from "./supabase"
import type { Course } from "@/types"

export const fallbackCourses = [
  { id: "1", title: "Advanced TypeScript Patterns", progress: 75, icon_name: "code", created_at: "" },
  { id: "2", title: "React Server Components Deep Dive", progress: 40, icon_name: "layers", created_at: "" },
  { id: "3", title: "Database Query Optimization", progress: 90, icon_name: "terminal", created_at: "" },
  { id: "4", title: "Design System Orchestration", progress: 55, icon_name: "book", created_at: "" }
]

export async function getCourses() {
  console.log("Fetching courses from Supabase...")
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!url || !key || url.includes("your-") || !url.startsWith("http")) {
      return fallbackCourses
    }

    const supabase = await createClient()
    const { data } = await supabase.from("courses").select("*") as { data: Course[] | null }

    console.log("Supabase fetch successful");

    return data && data.length > 0 ? data : fallbackCourses
  } catch (err) {
    console.log("Fetch failed, using fallbacks. Error:", err)
    return fallbackCourses
  }
}
