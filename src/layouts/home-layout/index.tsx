import { Outlet } from 'react-router-dom'
import { AsideNavigationHome } from './aside-navigation'
import { AsideInfoHome } from './aside-info'
import { useEffect, useState } from 'react'
import { BiodataType } from '@/libs/types/biodata-type'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'

export default function HomeLayout() {
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
    <div className="grid h-full grid-cols-12">
      <div className="scrollbar col-span-2 h-full overflow-y-auto bg-white phones:hidden">
        <AsideNavigationHome disabled={disabled} />
      </div>
      <div className="scrollbar col-span-8 h-full overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 phones:col-span-12">
        <Outlet />
      </div>
      <div className="scrollbar col-span-2 h-full overflow-y-auto bg-white phones:hidden">
        <AsideInfoHome disabled={disabled} nama={dataBiodata?.pribadi?.nama} />
      </div>
    </div>
  )
}
