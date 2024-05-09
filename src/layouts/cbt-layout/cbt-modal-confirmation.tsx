import { Dispatch, SetStateAction } from 'react'

export function CBTModalConfirmation({
  setIsShow,
  handleSubmit,
  totalSoal,
}: {
  setIsShow: Dispatch<SetStateAction<boolean>>
  handleSubmit: () => void
  totalSoal: number
}) {
  const smartlearningData = JSON.parse(
    localStorage.getItem('smartlearning') || '{}',
  )

  const totalDijawab = smartlearningData?.jawaban?.length

  return (
    <div className="mb-32 flex flex-col gap-y-16 text-[2rem] text-black">
      <div className="flex flex-col gap-y-8">
        <p>
          Total soal dikerjakan:{' '}
          <span className="text-primary">{totalDijawab ?? 0}</span> /{' '}
          {totalSoal}
        </p>
        <p>Yakin ingin menyimpan jawaban?</p>
      </div>
      <div className="flex items-center justify-end">
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
              setIsShow(false)
            }}
            className="flex-1 rounded-2xl bg-emerald-500 px-24 py-12 text-[1.6rem] text-white hover:bg-emerald-700"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  )
}
