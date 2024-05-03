import { BiodataType } from '@/libs/types/biodata-type'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect, useState } from 'react'

export function ProfileSekolah() {
  const [dataBiodata, setDataBiodata] = useState<BiodataType>()
  const {
    data: biodataData,
    isLoading: biodataIsLoading,
    isFetching: biodataIsFetching,
  } = useGetBiodataQuery()
  const disabled = biodataIsFetching || biodataIsLoading

  useEffect(() => {
    if (biodataData?.data) {
      setDataBiodata(biodataData?.data)
    }
  }, [biodataData?.data])

  return (
    <div className="col-span-6 flex items-center gap-x-16 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-12">
      {disabled ? (
        <div className="h-[12rem] w-[12rem] animate-pulse rounded-full bg-slate-200 duration-100" />
      ) : (
        <img
          src="/img/logo.png"
          alt="logo"
          className="w-[12rem] phones:w-[12rem]"
        />
      )}

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
  )
}
