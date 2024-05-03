import { PembahasanType } from '@/libs/types/cbt-type'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { ResultNavigationHeader } from './result-navigation-header'
import { ResultNavigationNoSoal } from './result-navigation-nosoal'

export function ResultNavigationHome({
  isShow,
  noSoal,
  data,
  setNoSoal,
  setIsShow,
  setIsShowNav,
  isShowNav,
  idUjian,
  kategori,
  totalSoal,
}: {
  isShow: boolean
  noSoal: number
  data: PembahasanType[]
  setNoSoal: Dispatch<SetStateAction<number>>
  setIsShowNav: Dispatch<SetStateAction<boolean>>
  setIsShow: Dispatch<SetStateAction<boolean>>
  isShowNav: boolean
  idUjian: string
  kategori: string
  totalSoal: number
}) {
  return (
    <div
      className={clsx(
        'scrollbar h-full overflow-y-auto rounded-2xl phones:col-span-12',
        {
          'col-span-3': isShow,
          'col-span-1': !isShow,
        },
      )}
    >
      <div className="flex h-full flex-col">
        <ResultNavigationHeader
          setIsShowNav={setIsShowNav}
          isShowNav={isShowNav}
          isShow={isShow}
          setIsShow={setIsShow}
        />
        {isShowNav && (
          <div className="scrollbar h-full flex-1 overflow-y-auto">
            {isShow ? (
              <div
                className="flex h-full flex-col gap-y-32 bg-white p-32"
                style={{
                  borderBottomLeftRadius: '1rem',
                  borderBottomRightRadius: '1rem',
                }}
              >
                <div className="scrollbar h-full flex-1 overflow-y-auto">
                  <ResultNavigationNoSoal
                    kodeSoal={idUjian}
                    totalSoal={totalSoal}
                    noSoal={noSoal}
                    kategori={kategori}
                    setNoSoal={setNoSoal}
                    data={data}
                  />
                </div>
              </div>
            ) : (
              <div
                onClick={() => setIsShow(true)}
                className="flex h-full items-center justify-center bg-white hover:cursor-pointer"
              >
                <p
                  className="text-[2.4rem] uppercase tracking-6"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                  }}
                >
                  Tampilkan Jawaban Anda
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
