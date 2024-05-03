import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-2xl">
      <div className="flex flex-col items-center gap-y-32">
        <span className="animate-spin font-nunito text-[3rem] font-light uppercase tracking-1.5 text-slate-500 duration-300">
          <Loader2 size={40} />
        </span>
      </div>
    </div>
  )
}
