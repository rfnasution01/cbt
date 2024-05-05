import { hitungMundur } from '@/libs/helpers/format-time'
import { AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ModalError({
  tgl_dimulai,
  isBelumDimulai,
  isSudahBerakhir,
  isDikerjakan,
  isBelumDikerjakan,
}: {
  isBelumDimulai?: boolean
  tgl_dimulai?: string
  isSudahBerakhir: boolean
  isDikerjakan?: boolean
  isBelumDikerjakan?: boolean
}) {
  const [countdownTime, setCountdownTime] = useState(null)

  useEffect(() => {
    let countdownInterval
    if (isBelumDimulai && tgl_dimulai) {
      const countdown = hitungMundur(tgl_dimulai)
      setCountdownTime(countdown)
      countdownInterval = setInterval(() => {
        const updatedCountdown = hitungMundur(tgl_dimulai)
        setCountdownTime(updatedCountdown)
      }, 1000)
    }

    return () => clearInterval(countdownInterval)
  }, [isBelumDimulai, tgl_dimulai])

  return (
    <div className="mb-32 flex flex-col gap-y-32 text-black">
      {isBelumDimulai && tgl_dimulai && (
        <div className="flex flex-col items-center justify-center gap-y-32 pb-64 text-center text-[2rem]">
          <p className="text-[3rem]">Waktu hingga dimulai</p>
          <div className="flex items-center justify-center gap-x-24">
            <div className="flex flex-col gap-y-16">
              <p className="flex h-[8rem] w-[8rem] items-center justify-center rounded-2xl bg-primary text-[4rem] text-white">
                {countdownTime?.hari}
              </p>
              <p>Hari</p>
            </div>
            <p className="text-[3rem]">:</p>
            <div className="flex flex-col gap-y-16">
              <p className="flex h-[8rem] w-[8rem] items-center justify-center rounded-2xl bg-primary text-[4rem] text-white">
                {countdownTime?.jam}
              </p>
              <p>Jam</p>
            </div>
            <p className="text-[3rem]">:</p>
            <div className="flex flex-col gap-y-16">
              <p className="flex h-[8rem] w-[8rem] items-center justify-center rounded-2xl bg-primary text-[4rem] text-white">
                {countdownTime?.menit}
              </p>
              <p>Menit</p>
            </div>
            <p className="text-[3rem]">:</p>
            <div className="flex flex-col gap-y-16">
              <p className="flex h-[8rem] w-[8rem] items-center justify-center rounded-2xl bg-primary text-[4rem] text-white">
                {countdownTime?.detik}
              </p>
              <p>Detik</p>
            </div>
          </div>
        </div>
      )}

      {isSudahBerakhir && (
        <div className="flex flex-col items-center justify-center gap-y-32 pb-32 text-center text-[2rem]">
          <AlertCircle size={90} />
          <p className="text-[3rem]">Ujian Telah Selesai</p>
        </div>
      )}
      {isDikerjakan && (
        <div className="flex flex-col items-center justify-center gap-y-32 pb-32 text-center text-[2rem]">
          <AlertCircle size={90} />
          <p className="text-[3rem]">Ujian Telah Dikerjakan</p>
        </div>
      )}
      {isBelumDikerjakan && (
        <div className="flex flex-col items-center justify-center gap-y-32 pb-32 text-center text-[2rem]">
          <AlertCircle size={90} />
          <p className="text-[3rem]">Ujian Belum Dikerjakan</p>
        </div>
      )}
    </div>
  )
}
