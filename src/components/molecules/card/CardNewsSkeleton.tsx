export function CardNewsSkeleton() {
  return (
    <div className="scrollbar flex w-full gap-x-16 overflow-x-auto">
      <div className="flex w-4/12 flex-shrink-0 transform-gpu flex-col gap-y-8 text-[1.6rem] transition-transform duration-300 hover:scale-95 hover:cursor-pointer phones:w-9/12  phones:gap-y-4 phones:text-[2rem]">
        {/* --- Image --- */}
        <div className="h-[30rem] animate-pulse bg-slate-200 duration-100 phones:h-[20rem]" />
        {/* --- Title --- */}
        <div className="h-[3rem] w-6/12 animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
        {/* --- Tag --- */}
        <div className="w-12/12 h-[2rem] animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
        {/* --- Info --- */}
        <div className="flex w-6/12 flex-row items-center gap-x-16">
          <div className="h-[2rem] w-6/12 animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
          <div className="h-[2rem] w-6/12 animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
        </div>
      </div>
    </div>
  )
}
