"use client"

import { useState } from "react"
import { User, Bell } from "lucide-react"
import { Sidebar } from "@/components/Sidebar"
import { AnimatePresence, motion } from "framer-motion"

export default function SettingsPage() {
  const [name, setName] = useState("Sarah Vance")
  const [email, setEmail] = useState("sarah@devacademy.io")
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [reminders, setReminders] = useState(false)
  const [saved, setSaved] = useState(false)

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    console.log("save:", { name, email, emailNotifs, reminders })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="flex min-h-screen bg-background text-white selection:bg-accent/10">
      <Sidebar />
      <main className="flex-1 p-6 max-w-2xl relative z-10">
        <h1 className="text-2xl font-bold tracking-tight text-white mb-6">
          Settings
        </h1>

        <form onSubmit={handleSave} className="space-y-4">
          <section className="bg-surface rounded-xl border border-white/[0.04] p-5 overflow-hidden">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.04]">
              <User size={15} className="text-gray-500" />
              <h2 className="text-sm font-semibold text-white">
                Profile
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="profile-name" className="block text-[10px] font-bold text-muted uppercase tracking-widest mb-1.5 font-mono">
                  Name
                </label>
                <input
                  id="profile-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:border-accent-border focus:ring-1 focus:ring-accent-border/30 transition-all"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="profile-email" className="block text-[10px] font-bold text-muted uppercase tracking-widest mb-1.5 font-mono">
                  Email
                </label>
                <input
                  id="profile-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:border-accent-border focus:ring-1 focus:ring-accent-border/30 transition-all"
                />
              </div>
            </div>
          </section>

          <section className="bg-surface rounded-xl border border-white/[0.04] p-5 overflow-hidden">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.04]">
              <Bell size={15} className="text-gray-500" />
              <h2 className="text-sm font-semibold text-white">
                Notifications
              </h2>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-2.5 text-sm text-foreground cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={emailNotifs}
                  onChange={e => setEmailNotifs(e.target.checked)}
                  className="w-4 h-4 rounded border-border bg-background accent-accent cursor-pointer focus:ring-0 focus:ring-offset-0"
                />
                <span>Email announcements</span>
              </label>
              <label className="flex items-center gap-2.5 text-sm text-foreground cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={reminders}
                  onChange={e => setReminders(e.target.checked)}
                  className="w-4 h-4 rounded border-border bg-background accent-accent cursor-pointer focus:ring-0 focus:ring-offset-0"
                />
                <span>Daily reminders</span>
              </label>
            </div>
          </section>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 active:bg-accent/80 text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>

      <AnimatePresence>
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-6 right-6 bg-success-bg border border-success-text/20 text-success-text px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 select-none z-50 text-xs font-sans font-semibold"
          >
            <span className="text-sm">✓</span>
            <span>Changes saved successfully</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 
