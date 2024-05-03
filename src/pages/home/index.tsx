import { HomeStatistik } from '@/features/home'
import { HomeCard } from '@/features/home/home-card'
import { UjianType } from '@/libs/types/cbt-type'
import { useGetUjianQuery } from '@/store/slices/cbtAPI'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const { data, isLoading, isFetching, isError, error } = useGetUjianQuery()
  const [ujian, setUjian] = useState<UjianType[]>([])
  const disabled = isLoading || isFetching

  useEffect(() => {
    if (data?.data) {
      setUjian(data?.data)
    }
  }, [data?.data])

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
    <div className="flex flex-col gap-32">
      <HomeCard ujian={ujian} disabled={disabled} />
      <HomeStatistik data={ujian} />
    </div>
  )
}
