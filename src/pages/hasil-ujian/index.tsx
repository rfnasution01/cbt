import { HasilUjianMapping } from '@/features/hasil-ujian'
import { UjianType } from '@/libs/types/cbt-type'
import { useGetUjianQuery } from '@/store/slices/cbtAPI'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HasilUjianPage() {
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
    <div className="flex flex-col gap-y-32">
      <div className="flex items-center justify-between">
        <h1 className="text-[3rem] font-bold">Hasil Ujian</h1>
      </div>
      <HasilUjianMapping
        data={ujian?.filter((item) => item?.status === 1)}
        disabled={disabled}
      />
    </div>
  )
}
