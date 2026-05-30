import { Sidebar } from "@/components/Sidebar"
import { StatCard } from "@/components/StatCard"

export default function ProgressPage() {
  const weeklyActivity = [
    { day: "Mon", hours: 2.0 },
    { day: "Tue", hours: 1.5 },
    { day: "Wed", hours: 0.5 },
    { day: "Thu", hours: 3.0 },
    { day: "Fri", hours: 4.5 },
    { day: "Sat", hours: 8.0 },
    { day: "Sun", hours: 6.5 },
  ]

  const milestones = [
    { title: "Mastered TypeScript Generics", desc: "Completed the advanced type manipulation module", date: "May 27" },
    { title: "RSC Deep Dive Complete", desc: "Finished server components & suspense architecture", date: "May 22" },
    { title: "Optimized Database Indexes", desc: "Improved query plans and indexing structures", date: "May 15" },
  ]

  const maxHours = Math.max(...weeklyActivity.map(a => a.hours), 8)

  const yLabels = [
    `${maxHours.toFixed(0)}h`,
    `${(maxHours * 0.75).toFixed(0)}h`,
    `${(maxHours * 0.5).toFixed(0)}h`,
    `${(maxHours * 0.25).toFixed(0)}h`,
    "0h",
  ]

  return (
    <div className="flex min-h-screen bg-background text-white selection:bg-accent/10">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8 pb-24 md:pb-8 relative z-10">
        <div className="max-w-5xl mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Your Learning Progress</h1>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-6">
            <StatCard
              title="COMPLETION RATE"
              value="65%"
              target="Target: 80% by end of term"
              isHero={true}
            />
            <StatCard
              title="STUDY TIME"
              value="34 hrs"
              target="Target: 40 hrs weekly"
              isHero={false}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-xl bg-card border border-border p-6 flex flex-col justify-between overflow-hidden">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-6">STUDY TIME BREAKDOWN (WEEKLY)</h3>

                <div className="relative h-48 flex gap-3 pl-8 pr-2">

                  <div className="absolute inset-y-0 left-0 w-8 flex flex-col justify-between text-[9px] text-muted font-bold text-right pr-2 select-none h-[128px] font-mono">
                    {yLabels.map((lbl, idx) => (
                      <span key={idx}>{lbl}</span>
                    ))}
                  </div>

                  <div className="absolute inset-y-0 left-8 right-2 flex flex-col justify-between pointer-events-none h-[128px]">
                    <div className="w-full border-b border-border/20 h-0" />
                    <div className="w-full border-b border-border/20 h-0" />
                    <div className="w-full border-b border-border/20 h-0" />
                    <div className="w-full border-b border-border/20 h-0" />
                    <div className="w-full border-b border-border/40 h-0" />
                  </div>

                  <div className="flex-1 flex items-end justify-between h-[128px] z-10">
                    {weeklyActivity.map((act, i) => {
                      const pct = Math.max((act.hours / maxHours) * 100, 6)
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end relative">
                          <span className="absolute -top-6 text-[9px] font-bold text-accent-text opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-surface px-1.5 py-0.5 rounded border border-border shadow-md z-10 pointer-events-none font-mono">{act.hours}h</span>
                          <div className="w-full max-w-[24px] bg-background rounded-t-[3px] overflow-hidden h-32 relative flex items-end border border-border/40">
                            <div
                              className="w-full bg-accent-text rounded-t-[2px] hover:bg-accent transition-colors duration-200"
                              style={{ height: `${pct}%` }}
                            />
                          </div>
                          <span className="text-[9px] font-bold text-muted uppercase tracking-wider mt-1 font-mono">{act.day}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-card border border-border p-6 overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-6">Milestones Achieved</h3>
                <div className="space-y-5">
                  {milestones.map((m, i) => (
                    <div key={i} className="border-l border-border pl-3.5 space-y-1 relative">
                      <div className="absolute top-1.5 -left-1 w-2 h-2 rounded-full bg-success-text" />
                      <h4 className="text-xs font-semibold text-foreground leading-tight">{m.title}</h4>
                      <p className="text-[11px] text-muted leading-normal">{m.desc}</p>
                      <span className="text-[10px] text-success-text font-bold block uppercase tracking-wider font-mono">{m.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
