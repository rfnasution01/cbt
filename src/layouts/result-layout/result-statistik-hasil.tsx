import { RankingType, UjianType } from '@/libs/types/cbt-type'
import { useGetRankingUjianQuery } from '@/store/slices/cbtAPI'
import clsx from 'clsx'
import { Award, Trophy } from 'lucide-react'
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
      {/* --- Hasil --- */}
      <div className="col-span-3 flex flex-col items-center justify-center gap-y-32 rounded-2xl bg-white p-12 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
        <div className="flex flex-col items-center">
          <div
            className={clsx(
              'flex h-80 w-80 items-center justify-center rounded-full border-8',
              {
                'border-emerald-500': Number(item?.skor) > 300,
                'border-rose-500': Number(item?.skor) <= 300,
              },
            )}
          >
            {item?.status === 1 ? item?.skor : 0}
          </div>
        </div>
        <div className="text-center">
          {item?.status_lulus ? (
            <div className="flex flex-col gap-y-4">
              <p>Selamat!</p>
              <p>Anda lulus</p>
            </div>
          ) : (
            <div className="flex flex-col gap-y-4">
              <p>Sayang sekali!</p>
              <p>Anda belum lulus</p>
            </div>
          )}
        </div>
      </div>
      {/* Skor  */}
      <div className="col-span-3 flex flex-col items-center justify-center gap-y-32 rounded-2xl bg-white p-12 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
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
      <div className="col-span-3 flex flex-col items-center justify-center gap-y-32 rounded-2xl bg-white p-12 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
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

      {/* --- Deskripsi --- */}
      <div className="col-span-3 flex flex-col gap-y-12 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
        <p className="p-12 font-semibold">Deskripsi</p>
        <div className="col-span-6 gap-y-12 rounded-2xl border-b px-12">
          Soal Dijawab:{' '}
          <span className="font-bold text-primary">{item?.dijawab}</span>/
          {item?.jumlah_soal}
        </div>
        <div className="col-span-6 gap-y-12 rounded-2xl border-b px-12">
          Soal Tidak Dijawab:{' '}
          <span className="font-bold text-primary">{item?.tidak_dijawab}</span>/
          {item?.jumlah_soal}
        </div>
        <div className="col-span-6 gap-y-12 rounded-2xl border-b px-12">
          Soal Benar:{' '}
          <span className="font-bold text-primary">{item?.benar}</span>/
          {item?.jumlah_soal}
        </div>
        <div className="col-span-6 gap-y-12 rounded-2xl border-b px-12">
          Soal Salah:{' '}
          <span className="font-bold text-primary">{item?.salah}</span>/
          {item?.jumlah_soal}
        </div>
      </div>
    </div>
  )
}
