import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

export function CBTNavigationNumber({
  totalSoal = 20,
  noSoal,
  setNoSoal,
  kodeSoal,
}: {
  kodeSoal: string
  totalSoal?: number
  noSoal: number
  setNoSoal: Dispatch<SetStateAction<number>>
}) {
  const navigate = useNavigate()
  const isOpenNow = (nomor: number) => {
    if (nomor === noSoal) {
      return true
    }
    return false
  }

  const smartlearningData = JSON.parse(
    localStorage.getItem('smartlearning') || '{}',
  )

  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')

  const handleSetNomorSoal = (nomor: number) => {
    navigate(`/cbt?idUjian=${kodeSoal}&nomor=${nomor}`)
    setNoSoal(nomor)
  }

  return (
    <div className="grid grid-cols-12 gap-24">
      {Array.from({ length: totalSoal }, (_, index) => (
        <div
          className={clsx(
            'col-span-2 flex items-center justify-center rounded-lg p-12 text-[1.8rem] font-medium tracking-1.25 hover:cursor-pointer hover:bg-blue-500 hover:text-white',
            {
              'bg-blue-500 text-slate-50':
                isOpenNow(index + 1) && noSoal === index + 1,
              'bg-emerald-500 text-slate-50': smartlearningData?.jawaban?.find(
                (jawaban) =>
                  jawaban?.no === index + 1 &&
                  !(isOpenNow(index + 1) && noSoal === index + 1),
              ),
              'bg-yellow-500 text-slate-50': bookmarks?.includes(
                (index + 1).toString(),
              ),
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
