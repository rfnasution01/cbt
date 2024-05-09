import { DataKunciJawaban } from '@/libs/dummy/data-percobaan-kunci-jawaban'
import { konversiJaawaban } from '@/libs/helpers/format-jawaban'
import { hitungHasilUjian } from '@/libs/helpers/handle-hasil-percobaan'
import { CircleCheck } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function CBTModalConfirmation({
  setIsShow,
  totalSoal,
}: {
  setIsShow: Dispatch<SetStateAction<boolean>>
  totalSoal: number
}) {
  const navigate = useNavigate()
  const smartlearningData = JSON.parse(
    localStorage.getItem('smartlearning') || '{}',
  )

  const [isHasil, setIsHasil] = useState<boolean>(false)
  const [isBenar, setBenar] = useState<number>(0)

  const totalDijawab = smartlearningData?.jawaban?.length

  const handleSubmit = () => {
    const data = konversiJaawaban(smartlearningData)
    const hasilUjian = hitungHasilUjian(data?.jawaban, DataKunciJawaban)
    setBenar(hasilUjian?.kesamaan)
  }

  return (
    <div className="mb-32 flex flex-col gap-y-16 text-[2rem] text-black">
      {isHasil ? (
        <div className="flex flex-col items-center justify-center gap-y-16">
          <CircleCheck size={90} />
          <p className="text-[3rem]">Skor: {isBenar * 20}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-y-8">
          <p>
            Total soal dikerjakan:{' '}
            <span className="text-primary">{totalDijawab ?? 0}</span> /{' '}
            {totalSoal}
          </p>
          <p>Yakin ingin menyimpan jawaban?</p>
        </div>
      )}
      <div className="flex items-center justify-end">
        {!isHasil && (
          <div className="flex w-6/12 items-center gap-x-32">
            <button
              type="button"
              onClick={() => setIsShow(false)}
              className="flex-1 rounded-2xl bg-blue-500 px-24 py-12 text-[1.6rem] text-white hover:bg-blue-700"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={() => {
                handleSubmit()
                if (isHasil) {
                  setIsShow(false)
                } else {
                  setIsHasil(true)
                  localStorage.removeItem('bookmarks')
                  localStorage.removeItem('smartlearning')
                  localStorage.removeItem('mulaiujian')
                  localStorage.setItem('simulasi', 'yes')
                  setTimeout(() => {
                    navigate('/ujian')
                  }, 2000)
                }
              }}
              className="flex-1 rounded-2xl bg-emerald-500 px-24 py-12 text-[1.6rem] text-white hover:bg-emerald-700"
            >
              Kirim
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
