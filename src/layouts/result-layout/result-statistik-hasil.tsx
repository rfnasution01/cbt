import { RankingType, UjianType } from '@/libs/types/cbt-type'
import { useGetRankingUjianQuery } from '@/store/slices/cbtAPI'
import { Award, CircleCheck, CircleX, Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'

export function StatistikHasil({
  item,
  idUjian,
}: {
  item: UjianType
  idUjian: string
}) {
  const { data } = useGetRankingUjianQuery({ id_ujian: idUjian })
  const [ranking, setRanking] = useState<RankingType>()

  useEffect(() => {
    if (data?.data) {
      setRanking(data?.data)
    }
  }, [data?.data])

  return (
    <div className="grid grid-cols-12 gap-32">
      {/* Skor  */}
      <div className="col-span-3 flex flex-col items-center justify-center gap-y-32 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
        <span className="block phones:hidden">
          <Award size={64} />
        </span>
        <span className="hidden phones:block">
          <Award size={40} />
        </span>
        <p className="font-medium">
          Skor: <span className="font-bold text-primary">{item?.skor}</span>
        </p>
      </div>
      {/* Peringkat */}
      <div className="col-span-3 flex flex-col items-center justify-center gap-y-32 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
        <span className="block phones:hidden">
          <Trophy size={64} />
        </span>
        <span className="hidden phones:block">
          <Trophy size={40} />
        </span>
        <p className="font-medium">
          Peringkat{' '}
          <span className="font-bold text-primary">
            {ranking?.ranking_siswa}
          </span>{' '}
          / {ranking?.ranking_semua?.length}
        </p>
      </div>

      {/* --- Jawaban Benar --- */}
      <div className="col-span-3 flex flex-col items-center justify-center gap-y-32 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
        <span className="block phones:hidden">
          <CircleCheck size={64} />
        </span>
        <span className="hidden phones:block">
          <CircleCheck size={40} />
        </span>
        <p className="font-medium">
          Jawaban Benar:{' '}
          <span className="font-bold text-primary">{item?.benar}</span>/
          {item?.jumlah_soal}
        </p>
      </div>

      {/* --- Jawaban Benar --- */}
      <div className="col-span-3 flex flex-col items-center justify-center gap-y-32 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
        <span className="block phones:hidden">
          <CircleX size={64} />
        </span>
        <span className="hidden phones:block">
          <CircleX size={40} />
        </span>
        <p className="font-medium">
          Jawaban Salah:{' '}
          <span className="font-bold text-primary">{item?.salah}</span>/
          {item?.jumlah_soal}
        </p>
      </div>
    </div>
  )
}
