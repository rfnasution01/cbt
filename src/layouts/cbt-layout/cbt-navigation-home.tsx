import { SoalUjianType } from '@/libs/types/cbt-type'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { CBTNavigationHeader } from './cbt-navigation-header'
import { Loader2 } from 'lucide-react'
import { CBTNavigationNumber } from './cbt-navigation-number'

export function CBTNavigationHome({
  isShow,
  noSoal,
  dataSoal,
  isDisabled,
  setNoSoal,
  setIsShow,
  setIsShowNav,
  isShowNav,
  setIsShowModal,
  idUjian,
}: {
  isShow: boolean
  noSoal: number
  dataSoal: SoalUjianType[]
  setNoSoal: Dispatch<SetStateAction<number>>
  setIsShowNav: Dispatch<SetStateAction<boolean>>
  setIsShowModal: Dispatch<SetStateAction<boolean>>
  setIsShow: Dispatch<SetStateAction<boolean>>
  isDisabled: boolean
  isShowNav: boolean
  idUjian: string
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
        <CBTNavigationHeader
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
                  <CBTNavigationNumber
                    kodeSoal={idUjian}
                    totalSoal={dataSoal.length}
                    noSoal={noSoal}
                    setNoSoal={setNoSoal}
                  />
                </div>
                {/* --- Selesai --- */}
                <div
                  className="flex"
                  onClick={() => {
                    if (!isDisabled) {
                      setIsShowModal(true)
                    }
                  }}
                >
                  <div className="rounded-xl bg-emerald-500 px-32 py-16 font-bold uppercase tracking-1.5 text-white hover:cursor-pointer hover:bg-emerald-700">
                    Selesai{' '}
                    {isDisabled && (
                      <span className="animate-spin duration-200">
                        <Loader2 size={16} />
                      </span>
                    )}
                  </div>
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
