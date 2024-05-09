import clsx from 'clsx'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function ResultSoalButton({
  kodeSoal,
  setNoSoal,
  noSoal,
  totalSoal,
  kategori,
}: {
  kodeSoal?: string
  setNoSoal: Dispatch<SetStateAction<number>>
  noSoal: number
  totalSoal: number
  kategori: string
}) {
  const navigate = useNavigate()

  const handleButton = (nomor: number) => {
    let queryParam = `/pembahasan?idUjian=${kodeSoal}&nomor=${nomor}`

    if (kategori) {
      queryParam += `&kategori=${kategori}`
    }

    navigate(queryParam)
    setNoSoal(nomor)
  }

  return (
    <div className="flex items-center gap-32 text-[1.6rem] phones:flex-col phones:gap-16">
      {/* -- Sebelumnya -- */}
      <div
        onClick={() => {
          if (noSoal > 1) {
            handleButton(noSoal - 1)
          }
        }}
        className={clsx(
          'flex items-center justify-center gap-x-8 rounded-xl bg-slate-500 px-32 py-12 text-white  hover:bg-slate-700 phones:w-full phones:py-8',
          {
            'hover:cursor-not-allowed': !(noSoal > 1),
            'hover:cursor-pointer': noSoal > 1,
          },
        )}
      >
        <span>
          <ChevronsLeft size={16} />
        </span>
        <p>Soal Sebelumnya</p>
      </div>

      {/* -- Selanjutya -- */}
      <div
        onClick={() => {
          if (noSoal <= totalSoal - 1) {
            handleButton(noSoal + 1)
          }
        }}
        className={clsx(
          'flex items-center justify-center gap-x-8 rounded-xl bg-blue-500 px-32 py-12 text-white hover:bg-blue-700 phones:w-full phones:py-8',
          {
            'hover:cursor-pointer': noSoal <= totalSoal - 1,
            'hover:cursor-not-allowed': !(noSoal <= totalSoal - 1),
          },
        )}
      >
        <span>
          <ChevronsRight size={16} />
        </span>
        <p>Soal Selanjutnya</p>
      </div>
    </div>
  )
}
