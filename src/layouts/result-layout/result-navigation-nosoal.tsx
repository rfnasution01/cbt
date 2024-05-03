import { PembahasanType } from '@/libs/types/cbt-type'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function ResultNavigationNoSoal({
  totalSoal = 20,
  noSoal,
  setNoSoal,
  kodeSoal,
  kategori,
  data,
}: {
  kodeSoal: string
  totalSoal?: number
  noSoal: number
  kategori: string
  setNoSoal: Dispatch<SetStateAction<number>>
  data: PembahasanType[]
}) {
  const navigate = useNavigate()
  const isOpenNow = (nomor: number) => {
    if (nomor === noSoal) {
      return true
    }
    return false
  }

  const handleSetNomorSoal = (nomor: number) => {
    let queryParam = `/pembahasan?idUjian=${kodeSoal}&nomor=${nomor}`

    if (kategori) {
      queryParam += `&kategori=${kategori}`
    }

    navigate(queryParam)
    setNoSoal(nomor)
  }

  function checkPositiveScoreSelectedAnswer(index) {
    const typeNow = data?.find((item) => Number(item?.urutan) === index)?.type

    const pilihanNow = data?.find(
      (item) => Number(item?.urutan) === index,
    )?.pilihan

    const jawabanNow = data?.find(
      (item) => Number(item?.urutan) === index,
    )?.jawaban

    const isMultipleAnswer = Array.isArray(jawabanNow)
    let skor = 0
    // Parse pilihan menjadi objek array
    const pilihanData = pilihanNow && JSON.parse(pilihanNow)
    if (isMultipleAnswer && typeNow === 'MULTIPLE_ANSWER') {
      // Jika jawabanNow adalah array, iterasi melalui setiap jawaban
      jawabanNow.forEach((jawabanId) => {
        // Temukan objek pilihan yang sesuai dengan id jawaban
        const pilihanJawaban = pilihanData.find((item) => item.id === jawabanId)
        // Jika objek ditemukan, tambahkan skornya ke skor total
        if (pilihanJawaban) {
          skor += Number(pilihanJawaban.skor)
        }
      })
    } else {
      skor = pilihanData?.find((item) => item?.id === jawabanNow)?.skor
    }

    // Mengecek jika skor lebih dari 0 pada pilihan dengan ID yang sama dengan jawaban saat ini (jawabanNow)
    if (skor > 0) {
      return true
    } else if (skor <= 0) {
      return false
    } else {
      return undefined
    }
  }

  return (
    <div className="grid grid-cols-12 gap-24">
      {Array.from({ length: totalSoal }, (_, index) => (
        <div
          className={clsx(
            'col-span-2 flex items-center justify-center rounded-lg p-12 text-[1.8rem] font-medium tracking-1.25 hover:cursor-pointer hover:bg-blue-500 hover:text-white',
            {
              'bg-blue-500 text-slate-50':
                isOpenNow(index + 1) &&
                noSoal === index + 1 &&
                (checkPositiveScoreSelectedAnswer(index + 1) === true ||
                  checkPositiveScoreSelectedAnswer(index + 1) === false ||
                  checkPositiveScoreSelectedAnswer(index + 1) === undefined),
              'bg-emerald-500 text-slate-50':
                checkPositiveScoreSelectedAnswer(index + 1) === true &&
                !isOpenNow(index + 1),
              'bg-red-500 text-slate-50':
                checkPositiveScoreSelectedAnswer(index + 1) === false &&
                !isOpenNow(index + 1),
              'bg-slate-200 text-slate-500':
                checkPositiveScoreSelectedAnswer(index + 1) === undefined &&
                !isOpenNow(index + 1),
            },
          )}
          key={index}
          onClick={() => {
            handleSetNomorSoal(index + 1)
          }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  )
}
