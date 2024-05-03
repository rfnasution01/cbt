export function CardNews2Skeleton() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="transform-gpu transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
        <div className="grid grid-cols-12 items-center gap-x-32">
          <div className="col-span-8">
            <div className="flex flex-col gap-y-4 text-[1.6rem] phones:text-[2rem]">
              {/* --- Title --- */}
              <div className="h-[3rem] w-6/12 animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
              {/* --- Tag --- */}
              <div className="h-[2rem] w-3/12 animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
              {/* --- Info --- */}
              <div className="flex w-8/12 flex-row items-center gap-x-16">
                <div className="h-[2rem] w-6/12 animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
                <div className="h-[2rem] w-6/12 animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="h-[8rem] animate-pulse bg-slate-200 duration-100 phones:h-[12rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}
