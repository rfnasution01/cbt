import Loading from '@/components/atoms/Loading'
import { PembahasanType, StatistikType } from '@/libs/types/cbt-type'
import { Dispatch, SetStateAction } from 'react'
import { ResultStatistikNilai } from './result-statistik-nilai'

export function ResultStatistik({
  data,
  setType,
  setKategori,
  idUjian,
  isLoading,
  dataPembahasan,
  setNoSoal,
}: {
  data: StatistikType[]
  dataPembahasan: PembahasanType[]
  idUjian: string
  setType: Dispatch<SetStateAction<string>>
  setKategori: Dispatch<SetStateAction<string>>
  setNoSoal: Dispatch<SetStateAction<number>>
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
          dataPembahasan={dataPembahasan}
          setNoSoal={setNoSoal}
        />
      )}
    </div>
  )
}
