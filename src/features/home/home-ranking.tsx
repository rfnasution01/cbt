import { RankingType } from '@/libs/types/cbt-type'
import { useGetRankingUjianQuery } from '@/store/slices/cbtAPI'
import { useEffect, useState } from 'react'

export function Ranking({
  idUjian,
  isPeserta,
  isRanking,
}: {
  idUjian: string
  isRanking?: boolean
  isPeserta?: boolean
}) {
  const { data: dataUjian } = useGetRankingUjianQuery(
    { id_ujian: idUjian },
    { skip: idUjian === '' },
  )
  const [ranking, setRanking] = useState<RankingType>()

  useEffect(() => {
    if (dataUjian?.data) {
      setRanking(dataUjian?.data)
    }
  }, [dataUjian?.data])
  return (
    <div className="">
      {isRanking && <p>{ranking?.ranking_siswa}</p>}
      {isPeserta && <p>{ranking?.ranking_semua?.length}</p>}
    </div>
  )
}
