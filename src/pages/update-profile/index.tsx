import ScrollbarComponent from '@/components/molecules/Scroolbar'
import UpdateProfile from '@/features/update-profile'
import { BiodataType } from '@/libs/types/biodata-type'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect, useState } from 'react'

export default function UpdateProfilePage() {
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
    <ScrollbarComponent>
      <div className="grid h-full grid-cols-12">
        <div className="scrollbar col-span-6 h-full overflow-y-auto p-64 phones:col-span-12">
          <div className="scrollbar flex h-full flex-col gap-y-32 overflow-y-auto">
            {/* --- welcome --- */}
            <div className="flex flex-col gap-y-12">
              {disabled ? (
                <div className="h-[3rem] w-3/12 animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
              ) : (
                <p className="font-roboto text-[2.4rem]">
                  Halo, {dataBiodata?.pribadi?.nama ?? 'John'} !
                </p>
              )}
              <p className="font-roboto text-[2.4rem]">
                Selamat datang di Computer Based Test (CBT) Smart Learning
              </p>
            </div>

            <p className="mb-32 text-[2.4rem]">
              Lengkapi data ini untuk mengaktifkan akun anda
            </p>

            {/* --- From --- */}
            <UpdateProfile
              nama={dataBiodata?.pribadi?.nama}
              nisn={dataBiodata?.pribadi?.nisn}
            />
          </div>
        </div>
        {/* --- Image --- */}
        <div className="col-span-6 phones:col-span-12 phones:hidden">
          <img
            src="/img/bg-login.jpg"
            alt="login"
            className="h-screen w-full object-cover"
          />
        </div>
      </div>
    </ScrollbarComponent>
  )
}
