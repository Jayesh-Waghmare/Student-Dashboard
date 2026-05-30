export default function Loading() {
  return (
    <div className="flex min-h-screen bg-[#0d0d0d] text-white">
      <div className="w-52 bg-[#111] border-r border-white/5 hidden md:block" />
      <div className="flex-1 p-6 md:p-8 space-y-8 max-w-5xl mx-auto w-full">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-white/[0.03] rounded-lg animate-pulse" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 h-44 bg-white/[0.03] rounded-2xl animate-pulse" />
          <div className="h-44 bg-white/[0.03] rounded-2xl animate-pulse" />
          
          <div className="md:col-span-2 lg:col-span-3 space-y-4">
            <div className="h-4 w-24 bg-white/[0.03] rounded animate-pulse" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-xl bg-white/[0.03] h-48 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
