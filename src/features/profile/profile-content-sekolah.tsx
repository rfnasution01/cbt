import { BiodataType } from '@/libs/types/biodata-type'

export function ProfileSekolah({
  dataBiodata,
  disabled,
}: {
  dataBiodata: BiodataType
  disabled: boolean
}) {
  return (
    <div className="col-span-6 flex flex-col gap-24 phones:col-span-12">
      <p className="text-[2rem] font-medium">Profile Sekolah</p>
      <div className="flex items-center gap-x-16 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md">
        {disabled ? (
          <div className="flex flex-1 flex-col gap-y-8">
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-y-8 text-[2rem]">
            <div className="flex w-full">
              <p className="w-2/12 ">NPSN</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-9/12">{dataBiodata?.sekolah?.npsn}</p>
            </div>
            <div className="flex w-full">
              <p className="w-2/12 ">Nama</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-9/12">{dataBiodata?.sekolah?.nama}</p>
            </div>
            <div className="flex w-full">
              <p className="w-2/12">Wilayah</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-9/12">{dataBiodata?.sekolah?.wilayah}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
