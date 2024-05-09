import { DataUpcomingTask } from '@/libs/dummy/data-task'
import clsx from 'clsx'
import { BookOpen, Medal } from 'lucide-react'

export function InfoTask() {
  return (
    <div className="flex flex-col gap-y-24">
      <span className="text-[1.8rem] font-bold uppercase">Upcoming Task</span>
      <div className="flex flex-col gap-y-24">
        {DataUpcomingTask.map((item, idx) => (
          <div
            className="flex transform-gpu items-center gap-x-12 rounded-lg transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow"
            key={idx}
          >
            <span
              className={clsx('p-12 text-center', {
                'text-fuchsia-700': item?.category?.includes('course'),
                'text-amber-700': !item?.category?.includes('course'),
              })}
            >
              {item?.category?.includes('course') ? <BookOpen /> : <Medal />}
            </span>
            <div className="flex flex-1 flex-col gap-y-8">
              <h5 className="font-bold">{item?.title}</h5>
              <h6 className="text-[1.4rem] font-light text-slate-500">
                {item?.date}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
