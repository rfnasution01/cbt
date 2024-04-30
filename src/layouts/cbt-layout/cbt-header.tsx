import Time from '@/components/atoms/Time'
import { LogoTitle } from '@/components/molecules/Logo'
import { CircleUser } from 'lucide-react'

export function CBTHeader() {
  return (
    <header className="flex border-b-2 border-slate-300">
      <div className="flex flex-1 justify-start p-32">
        <LogoTitle />
      </div>
      <div className="flex flex-1 items-center justify-center text-[3rem] text-secondary phones:hidden">
        TO SNBT TAHUN 2024
      </div>
      <div className="flex flex-1 items-center justify-end gap-x-32 phones:p-32">
        <Time />
        <div className="flex items-center gap-x-8 bg-primary p-32 text-center text-[2.4rem] text-white hover:cursor-pointer phones:hidden">
          <CircleUser />
          <p>John Doe</p>
        </div>
      </div>
    </header>
  )
}
