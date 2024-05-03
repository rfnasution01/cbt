import { handleBookmark } from '@/libs/helpers/handle-bookmarks'
import clsx from 'clsx'
import { Bookmark, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function CBTSoalButton({
  kodeSoal,
  setNoSoal,
  noSoal,
  totalSoal,
}: {
  kodeSoal: string
  setNoSoal: Dispatch<SetStateAction<number>>
  noSoal: number
  totalSoal: number
}) {
  const navigate = useNavigate()

  const handleButton = (nomor: number) => {
    navigate(`/cbt?idUjian=${kodeSoal}&nomor=${nomor}`)
    setNoSoal(nomor)
  }

  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')

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

      {/* -- Ragu Ragu -- */}
      <div
        onClick={() => handleBookmark(noSoal)}
        className={clsx(
          'flex items-center justify-center gap-x-8 rounded-xl  px-32 py-12 text-white hover:cursor-pointer hover:bg-yellow-700 phones:w-full phones:py-8',
          {
            'bg-yellow-700':
              bookmarks && bookmarks?.includes(noSoal.toString()),
          },
          {
            'bg-yellow-500': !(
              bookmarks && bookmarks?.includes(noSoal.toString())
            ),
          },
        )}
      >
        <span>
          <Bookmark
            size={16}
            color={bookmarks?.includes(noSoal?.toString()) ? 'yellow' : 'white'}
            fill={
              bookmarks?.includes(noSoal?.toString()) ? 'yellow' : 'transparent'
            }
          />
        </span>
        <p>Ragu Ragu</p>
      </div>
    </div>
  )
}
