import { handleSaveAnswer } from '@/libs/helpers/handle-save-answer'
import { SoalUjianOptionsType } from '@/libs/types/cbt-type'
import clsx from 'clsx'
import { useState } from 'react'

export function CBTSoalOptions({
  optionsSoal,
  typeSoal,
  ukuranSoal,
  noSoal,
  kodeSoal,
  idSoal,
}: {
  optionsSoal: SoalUjianOptionsType[]
  typeSoal: string
  ukuranSoal: string
  noSoal: number
  kodeSoal: string
  idSoal: string
}) {
  // Mendapatkan data jawaban dari localStorage
  const smartlearningData = JSON.parse(
    localStorage.getItem('smartlearning') || '{}',
  )
  const jawabanNoSoal = smartlearningData?.jawaban
    ? smartlearningData?.jawaban?.find((jawaban) => jawaban?.no === noSoal)
    : null

  // State untuk menyimpan jawaban
  const [jawaban, setJawaban] = useState<string[]>([])

  // Fungsi untuk menangani penyimpanan jawaban
  const handleSaveAnswerAndUpdate = (item: SoalUjianOptionsType) => {
    // Panggil fungsi untuk menyimpan jawaban
    handleSaveAnswer(item, kodeSoal, noSoal, typeSoal, idSoal)

    // Perbarui state jawaban
    const updatedJawaban = [...jawaban]
    const index = updatedJawaban.indexOf(item.id)
    if (index === -1) {
      updatedJawaban.push(item.id)
    } else {
      updatedJawaban.splice(index, 1)
    }
    setJawaban(updatedJawaban)
  }

  return (
    <div className="flex flex-col gap-y-12">
      {optionsSoal &&
        optionsSoal
          .slice()
          .sort((a, b) => Number(a?.urutan) - Number(b?.urutan))
          .map((item, idx) => (
            <div
              className={clsx(
                'flex items-center gap-12 rounded-lg border border-slate-300 p-16 hover:cursor-pointer hover:bg-emerald-500 hover:text-white',
                {
                  'border-transparent bg-emerald-500 text-white hover:bg-emerald-700':
                    jawabanNoSoal && jawabanNoSoal?.jawab?.includes(item?.id),
                },
              )}
              onClick={() => handleSaveAnswerAndUpdate(item)}
              key={idx}
            >
              <div className="">
                <div
                  className={clsx('border-2 phones:rounded-full', {
                    'h-[1.6rem] w-[1.6rem]': ukuranSoal?.includes('sm'),
                    'h-[2rem] w-[2rem]': ukuranSoal?.includes('md'),
                    'h-[2.4rem] w-[2.4rem]': ukuranSoal?.includes('lg'),
                    'border-transparent bg-white':
                      jawabanNoSoal && jawabanNoSoal?.jawab?.includes(item?.id),
                  })}
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: item?.label }} />
            </div>
          ))}
    </div>
  )
}
