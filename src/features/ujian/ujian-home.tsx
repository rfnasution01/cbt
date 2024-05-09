import { UjianType } from '@/libs/types/cbt-type'
import { useGetUjianQuery } from '@/store/slices/cbtAPI'
import { useEffect, useState } from 'react'
import { UjianMapping } from './ujian-mapping'
import { UjianDetail } from './ujian-detail'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export function UjianHome() {
  const navigate = useNavigate()
  const [ujianName, setUjianName] = useState<string>('')
  const [page, setPage] = useState<string>('home')
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
    <>
      {page.includes('home') ? (
        <UjianMapping
          data={ujian}
          disabled={disabled}
          setUjianName={setUjianName}
          setPage={setPage}
        />
      ) : (
        <UjianDetail data={ujian} ujianName={ujianName} setPage={setPage} />
      )}
    </>
  )
}
