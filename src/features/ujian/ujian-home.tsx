import { UjianType } from '@/libs/types/cbt-type'
import { useGetUjianQuery } from '@/store/slices/cbtAPI'
import { useEffect, useState } from 'react'
import { UjianMapping } from './ujian-mapping'
import { UjianDetail } from './ujian-detail'

export function UjianHome() {
  const [ujianName, setUjianName] = useState<string>('')
  const [page, setPage] = useState<string>('home')
  const { data, isLoading, isFetching } = useGetUjianQuery()
  const [ujian, setUjian] = useState<UjianType[]>([])
  const disabled = isLoading || isFetching

  useEffect(() => {
    if (data?.data) {
      setUjian(data?.data)
    }
  }, [data?.data])

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
