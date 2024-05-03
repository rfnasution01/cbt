import Loading from '@/components/atoms/Loading'
import { StatistikType } from '@/libs/types/cbt-type'
import { Dispatch, SetStateAction } from 'react'
import { ResultStatistikNilai } from './result-statistik-nilai'

export function ResultStatistik({
  data,
  setType,
  setKategori,
  idUjian,
  isLoading,
}: {
  data: StatistikType[]
  idUjian: string
  setType: Dispatch<SetStateAction<string>>
  setKategori: Dispatch<SetStateAction<string>>
  isLoading: boolean
}) {
  return (
    <div className="flex flex-col gap-y-32">
      {isLoading ? (
        <Loading />
      ) : (
        <ResultStatistikNilai
          data={data}
          setKategori={setKategori}
          setType={setType}
          idUjian={idUjian}
        />
      )}
    </div>
  )
}
