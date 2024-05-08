import CountdownTimer from '@/components/atoms/TimeCountDown'
import { hitungSelisihMenit } from '@/libs/helpers/format-time'
import { Timer } from 'lucide-react'
import { useEffect, useState } from 'react'

export function CBTProgress({
  totalSoal = 10,
  idUjian,
  isPercobaan,
}: {
  totalSoal?: number
  idUjian: string
  isPercobaan?: boolean
}) {
  const smartlearningData = JSON.parse(
    localStorage.getItem('smartlearning') || '{}',
  )
  const [dijawab, setDijawab] = useState<number>(
    smartlearningData?.jawaban?.length,
  )

  useEffect(() => {
    if (smartlearningData) {
      setDijawab(smartlearningData?.jawaban?.length)
    }
  }, [smartlearningData])

  const totalDijawab = smartlearningData?.jawaban?.length

  const mulaiUjian = JSON.parse(localStorage.getItem('mulaiujian') || '{}')
  const startTime = new Date(mulaiUjian.startTime)
  const durasi = mulaiUjian?.duration
  const now = new Date()
  const selisih = hitungSelisihMenit(startTime, now)
  const sisaWaktuSoal = durasi - selisih

  return (
    <div className="flex flex-col gap-y-8 px-80 pt-32 text-[2rem] phones:px-32">
      {/* --- Text --- */}
      <div className="flex items-center justify-between gap-x-32">
        <p>
          Dijawab <span className="text-primary">{dijawab ?? 0}</span>/
          {totalSoal}
        </p>
        <div className="flex items-center gap-x-8">
          <span>
            <Timer />
          </span>
          <div className="flex items-center">
            <CountdownTimer
              waktuUjian={sisaWaktuSoal}
              idUjian={idUjian}
              isPercobaan={isPercobaan}
            />
          </div>
        </div>
      </div>
      {/* --- Progressbar --- */}
      <div className="h-[3rem] w-full rounded-full bg-indigo-200">
        <div
          className="h-full rounded-full bg-indigo-500"
          style={{ width: `${(totalDijawab / totalSoal) * 100}%` }}
        />
      </div>
    </div>
  )
}
