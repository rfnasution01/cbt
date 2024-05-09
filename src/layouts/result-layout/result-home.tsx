import { Dispatch, SetStateAction, useState } from 'react'
import { ResultHeader } from './result-header'
import { PembahasanType, StatistikType } from '@/libs/types/cbt-type'
import { ResultStatistik } from './result-statistik'
import { ResultPembahasan } from './result-pembahasan'

export function ResultHome({
  dataStatistik,
  dataPembahasan,
  idUjian,
  isLoading,
  noSoal,
  setNoSoal,
  totalSoal,
}: {
  dataStatistik: StatistikType[]
  dataPembahasan: PembahasanType[]
  idUjian: string
  isLoading: boolean
  noSoal: number
  setNoSoal: Dispatch<SetStateAction<number>>
  totalSoal: number
}) {
  const [type, setType] = useState<string>('statistik')
  const [ukuranSoal, setUkuranSoal] = useState<string>('sm')
  const [kategori, setKategori] = useState<string>()

  return (
    <div className="scrollbar flex h-full flex-col gap-y-32 overflow-y-auto px-80 py-32 text-[2rem] phones:px-32">
      <ResultHeader
        type={type}
        setType={setType}
        setUkuranSoal={setUkuranSoal}
      />
      {type.includes('statistik') ? (
        <ResultStatistik
          data={dataStatistik}
          setKategori={setKategori}
          setType={setType}
          idUjian={idUjian}
          isLoading={isLoading}
          dataPembahasan={dataPembahasan}
          setNoSoal={setNoSoal}
        />
      ) : (
        <ResultPembahasan
          data={dataPembahasan}
          kategori={kategori}
          totalSoal={totalSoal}
          noSoal={noSoal}
          setNoSoal={setNoSoal}
          kodeSoal={idUjian}
          setUkuranSoal={setUkuranSoal}
          ukuranSoal={ukuranSoal}
        />
      )}
    </div>
  )
}
