"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  BookOpen, 
  TrendingUp, 
  Settings, 
} from "lucide-react"

const links = [ 
  { href: "/", label: "Dashboard", icon: LayoutDashboard }, 
  { href: "/courses", label: "Courses", icon: BookOpen }, 
  { href: "/progress", label: "Progress", icon: TrendingUp }, 
  { href: "/settings", label: "Settings", icon: Settings }, 
] 

export function Sidebar() {
  const path = usePathname()

  return (
    <>
      <nav className="flex flex-col bg-surface border-r border-border hidden md:flex shrink-0 min-h-screen sticky top-0 h-screen w-14 lg:w-52 py-6 transition-all duration-300"> 
        <ul className="flex flex-col gap-0.5 px-2 mt-1"> 
          {links.map(({ href, label, icon: Icon }) => ( 
            <li key={href} className="relative"> 
              {path === href && ( 
                <motion.div 
                  layoutId="nav-active" 
                  className="absolute inset-0 bg-accent-subtle rounded-lg"
                /> 
              )} 
              
              <Link 
                href={href} 
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm z-10 justify-center lg:justify-start transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-border ${path === href ? "text-accent-text font-bold" : "text-muted hover:text-foreground"}`} 
              > 
                <Icon size={17} className="shrink-0" /> 
                <span className="hidden lg:inline">{label}</span> 
              </Link> 
            </li> 
          ))} 
        </ul> 
      </nav> 
      <BottomNav />
    </>
  )
}

export function BottomNav() {
  const path = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border flex md:hidden z-50 pb-safe">
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = path === href
        return (
          <Link
            key={href}
            href={href}
            className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-border ${isActive ? "text-accent-text font-bold" : "text-muted hover:text-foreground"}`}
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
