import { PembahasanType } from '@/libs/types/cbt-type'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { ResultPembahasanHeader } from './result-pembahasan-header'
import { CBTSoalQuestion } from '../cbt-layout/cbt-soal-question'
import { ResultPembahasanAnswer } from './result-pembahasan-answer'
import { ResultPembahasanDetail } from './result-pembahasan-detail'
import { ResultSoalButton } from './result-pembahasan-button'

export function ResultPembahsanHome({
  isShow,
  noSoal,
  data,
  setUkuranSoal,
  isShowSoal,
  setIsShowSoal,
  ukuranSoal,
  idUjian,
  setNoSoal,
  kategori,
}: {
  isShow: boolean
  noSoal: number
  data: PembahasanType[]
  setUkuranSoal: Dispatch<SetStateAction<string>>
  isShowSoal: boolean
  setIsShowSoal: Dispatch<SetStateAction<boolean>>
  setNoSoal: Dispatch<SetStateAction<number>>
  ukuranSoal: string
  idUjian: string
  kategori: string
}) {
  const soalNow = data?.find(
    (item) => Number(item?.urutan) == noSoal,
  )?.pertanyaan

  return (
    <div
      className={clsx(
        'scrollbar flex h-full flex-col overflow-y-auto rounded-2xl phones:col-span-12',
        {
          'col-span-9': isShow,
          'col-span-11': !isShow,
        },
      )}
    >
      <ResultPembahasanHeader
        noSoal={noSoal}
        totalSoal={data?.length}
        setUkuranSoal={setUkuranSoal}
        isShow={isShowSoal}
        setIsShow={setIsShowSoal}
        data={data}
      />
      <div className="scrollbar h-full flex-1 overflow-y-auto">
        {isShowSoal && (
          <div
            className={clsx('flex flex-col gap-y-24 bg-white p-32', {
              'text-[2rem]': ukuranSoal?.includes('sm'),
              'text-[2.4rem]': ukuranSoal?.includes('md'),
              'text-[2.8rem]': ukuranSoal?.includes('lg'),
            })}
            style={{
              borderBottomLeftRadius: '1rem',
              borderBottomRightRadius: '1rem',
            }}
          >
            <CBTSoalQuestion question={soalNow} />
            <ResultPembahasanAnswer
              data={data}
              noSoal={noSoal}
              ukuranSoal={ukuranSoal}
            />

            <ResultPembahasanDetail data={data} noSoal={noSoal} />
            <ResultSoalButton
              noSoal={noSoal}
              kodeSoal={idUjian}
              setNoSoal={setNoSoal}
              totalSoal={data?.length}
              kategori={kategori}
            />
          </div>
        )}
      </div>
    </div>
  )
}
