import { BiodataType } from '@/libs/types/biodata-type'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export function ProfilePribadi() {
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
    <div className="col-span-8 phones:col-span-12">
      {/* --- Card --- */}
      <div className="flex items-center gap-x-16 rounded-2xl bg-white p-32 ">
        {disabled ? (
          <div className="h-[18rem] w-[18rem] animate-pulse rounded-full bg-slate-200 duration-100" />
        ) : (
          <img
            src="/img/logo.png"
            alt="logo"
            className="block w-[18rem] phones:hidden"
          />
        )}

        {disabled ? (
          <div className="flex flex-1 flex-col gap-y-8">
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
            <div className="h-[2rem] w-full animate-pulse rounded-full bg-slate-200 duration-100" />
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-y-8 text-[2rem]">
            <div className="flex w-full">
              <p className="w-3/12 phones:w-4/12">NISN</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-8/12">{dataBiodata?.pribadi?.nisn}</p>
            </div>
            <div className="flex w-full">
              <p className="w-3/12 phones:w-4/12">Nama</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-8/12">{dataBiodata?.pribadi?.nama}</p>
            </div>
            <div className="flex w-full">
              <p className="w-3/12 phones:w-4/12">Jenis Kelamin</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-8/12">
                {dataBiodata?.pribadi?.jk?.includes('L')
                  ? 'Laki-laki'
                  : 'Perempuan'}
              </p>
            </div>
            <div className="flex w-full">
              <p className="w-3/12 phones:w-4/12">Agama</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-8/12">{dataBiodata?.pribadi?.agama}</p>
            </div>
            <div className="flex w-full">
              <p className="w-3/12 phones:w-4/12">Tanggal Lahir</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-8/12">
                {dayjs(dataBiodata?.pribadi?.nisn)
                  .locale('id')
                  .format('DD MMMM YYYY')}
              </p>
            </div>
            <div className="flex w-full">
              <p className="w-3/12 phones:w-4/12">Email</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-8/12">{dataBiodata?.pribadi?.email}</p>
            </div>
            <div className="flex w-full">
              <p className="w-3/12 phones:w-4/12">Whatsapp</p>
              <p className="w-1/12 text-center">:</p>
              <p className="w-8/12">{dataBiodata?.pribadi?.wa}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
