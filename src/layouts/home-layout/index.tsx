import { AsideNavigationHome } from './aside-navigation'
import { AsideInfoHome } from './aside-info'
import { useEffect, useState } from 'react'
import { BiodataType } from '@/libs/types/biodata-type'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { ContentHome } from './content'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function HomeLayout() {
  const navigate = useNavigate()
  const [dataBiodata, setDataBiodata] = useState<BiodataType>()
  const {
    data: biodataData,
    isLoading: biodataIsLoading,
    isFetching: biodataIsFetching,
    isError,
    error,
  } = useGetBiodataQuery()
  const disabled = biodataIsFetching || biodataIsLoading

  useEffect(() => {
    if (biodataData?.data) {
      setDataBiodata(biodataData?.data)
    }
  }, [biodataData?.data])

  useEffect(() => {
    if (isError) {
      const errorMsg = error as {
        data?: {
          message?: string
        }
        status?: number
      }
      if (errorMsg?.status === 401) {
        Cookies.remove('token')
        navigate('/login')
      }
    }
  }, [isError, error])

  return (
    <div className="grid h-full grid-cols-12">
      <div className="scrollbar col-span-2 h-full overflow-y-auto bg-white phones:hidden">
        <AsideNavigationHome disabled={disabled} />
      </div>
      <ContentHome />
      <div className="scrollbar col-span-2 h-full overflow-y-auto bg-white phones:hidden">
        <AsideInfoHome disabled={disabled} nama={dataBiodata?.pribadi?.nama} />
      </div>
    </div>
  )
}
