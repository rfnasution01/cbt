import { ProfileNavigation } from '@/features/profile'
import { ProfilePribadi } from '@/features/profile/profile-content-pribadi'
import { ProfileSekolah } from '@/features/profile/profile-content-sekolah'
import UpdateProfile from '@/features/update-profile'
import { BiodataType } from '@/libs/types/biodata-type'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect, useState } from 'react'

export default function ProfilePage() {
  const [type, setType] = useState<string>('profile')

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
    <div className="flex flex-col gap-y-32">
      <ProfileNavigation type={type} setType={setType} />
      {type.includes('profile') ? (
        <div className="grid grid-cols-12 gap-32">
          <ProfilePribadi dataBiodata={dataBiodata} disabled={disabled} />
          <ProfileSekolah dataBiodata={dataBiodata} disabled={disabled} />
        </div>
      ) : (
        <UpdateProfile
          nama={dataBiodata?.pribadi?.nama}
          nisn={dataBiodata?.pribadi?.nisn}
          dataBiodata={dataBiodata}
        />
      )}
    </div>
  )
}
