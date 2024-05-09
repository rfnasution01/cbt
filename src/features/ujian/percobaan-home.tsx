import { useState } from 'react'
import { UjianMapping } from './ujian-mapping'
import { UjianDetail } from './ujian-detail'
import { DataPercobaan } from '@/libs/dummy/data-percobaan'

export function PercobaanHome() {
  const [ujianName, setUjianName] = useState<string>('')
  const [page, setPage] = useState<string>('home')

  return (
    <>
      {page.includes('home') ? (
        <UjianMapping
          data={DataPercobaan}
          disabled={false}
          setUjianName={setUjianName}
          setPage={setPage}
        />
      ) : (
        <UjianDetail
          data={DataPercobaan}
          ujianName={ujianName}
          setPage={setPage}
          isPercobaan
        />
      )}
    </>
  )
}
