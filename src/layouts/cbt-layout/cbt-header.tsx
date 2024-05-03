import Time from '@/components/atoms/Time'
import { LogoTitle } from '@/components/molecules/Logo'
import { CircleUser } from 'lucide-react'

export function CBTHeader({ biodata }: { biodata?: string }) {
  return (
    <header className="flex border-b-2 border-slate-300">
      <div className="flex flex-1 justify-start p-32">
        <LogoTitle teks1="Smart" teks2="Learning" />
      </div>
      <div className="flex gap-x-32">
        <span className="flex items-center justify-center phones:px-32">
          <Time />
        </span>
        <div className="flex items-center gap-x-8 bg-primary px-32 text-center text-[2rem] text-white hover:cursor-pointer phones:hidden">
          <CircleUser />
          <p>{biodata ?? 'John Doe'}</p>
        </div>
      </div>
    </header>
  )
}
