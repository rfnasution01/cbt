import clsx from 'clsx'
import { CBTSoalHeader } from './cbt-soal-header'
import { SoalUjianType } from '@/libs/types/cbt-type'
import { Dispatch, SetStateAction } from 'react'
import Loading from '@/components/atoms/Loading'
import { CBTSoalQuestion } from './cbt-soal-question'
import { CBTSoalOptions } from './cbt-soal-options'
import { CBTSoalButton } from './cbt-soal-button'

export function CBTSoalHome({
  isShow,
  noSoal,
  dataSoal,
  setUkuranSoal,
  isShowSoal,
  setIsShowSoal,
  isDisabled,
  ukuranSoal,
  idUjian,
  setNoSoal,
}: {
  isShow: boolean
  noSoal: number
  dataSoal: SoalUjianType[]
  setUkuranSoal: Dispatch<SetStateAction<string>>
  isShowSoal: boolean
  setIsShowSoal: Dispatch<SetStateAction<boolean>>
  setNoSoal: Dispatch<SetStateAction<number>>
  isDisabled: boolean
  ukuranSoal: string
  idUjian: string
}) {
  const soalNow = dataSoal?.find(
    (item) => Number(item?.number) == noSoal,
  )?.question
  const idSoalNow = dataSoal?.find((item) => Number(item?.number) == noSoal)?.id
  const jawabanNow = dataSoal?.find(
    (item) => Number(item?.number) == noSoal,
  )?.options
  const typeSoalNow = dataSoal?.find(
    (item) => Number(item?.number) == noSoal,
  )?.type
  const nomorSoalNow = dataSoal?.find(
    (item) => Number(item?.number) == noSoal,
  )?.number

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
      <CBTSoalHeader
        noSoal={noSoal}
        totalSoal={dataSoal?.length}
        setUkuranSoal={setUkuranSoal}
        isShow={isShowSoal}
        setIsShow={setIsShowSoal}
      />
      <div className="scrollbar h-full flex-1 overflow-y-auto">
        {isShowSoal &&
          (isDisabled ? (
            <Loading />
          ) : (
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
              <CBTSoalOptions
                optionsSoal={jawabanNow}
                typeSoal={typeSoalNow}
                ukuranSoal={ukuranSoal}
                noSoal={Number(nomorSoalNow)}
                kodeSoal={idUjian}
                idSoal={idSoalNow}
              />
              <CBTSoalButton
                noSoal={noSoal}
                kodeSoal={idUjian}
                setNoSoal={setNoSoal}
                totalSoal={dataSoal?.length}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
