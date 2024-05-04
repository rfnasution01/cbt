import clsx from 'clsx'
import { Check, X } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

export function ModalError({
  isSudahDikerjakan,
  isSudahDimulai,
  isSudahBerakhir,
  setIsShow,
}: {
  isSudahDikerjakan?: boolean
  isSudahBerakhir?: boolean
  isSudahDimulai?: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div className="mb-32 flex flex-col gap-y-32 text-black">
      <div className="flex flex-col gap-y-12">
        <p className="text-[2rem]">
          Hasil ujian tidak bisa ditampilkan karena:
        </p>
        {/* --- Sudah Dimulai --- */}
        <div className="flex items-center gap-x-8 text-[1.8rem]">
          <div
            className={clsx(
              'flex h-[2.4rem] w-[2.4rem] items-center justify-center border-2',
              {
                'border-green-700 text-green-700': isSudahDimulai,
                'border-red-700 text-red-700': !isSudahDimulai,
              },
            )}
          >
            {isSudahDimulai ? <Check size={16} /> : <X size={16} />}
          </div>
          <p
            className={clsx('', {
              ' text-green-700': isSudahDimulai,
              ' text-red-700': !isSudahDimulai,
            })}
          >
            Ujian sudah dimulai
          </p>
        </div>
        {/* --- Sudah berakhir --- */}
        <div className="flex items-center gap-x-8 text-[1.8rem]">
          <div
            className={clsx(
              'flex h-[2.4rem] w-[2.4rem] items-center justify-center border-2',
              {
                'border-green-700 text-green-700': isSudahBerakhir,
                'border-red-700 text-red-700': !isSudahBerakhir,
              },
            )}
          >
            {isSudahBerakhir ? <Check size={16} /> : <X size={16} />}
          </div>
          <p
            className={clsx('', {
              ' text-green-700': isSudahBerakhir,
              ' text-red-700': !isSudahBerakhir,
            })}
          >
            Ujian sudah berakhir
          </p>
        </div>
        {/* --- Sudah dikerjakan --- */}
        <div className="flex items-center gap-x-8 text-[1.8rem]">
          <div
            className={clsx(
              'flex h-[2.4rem] w-[2.4rem] items-center justify-center border-2',
              {
                'border-green-700 text-green-700': isSudahDikerjakan,
                'border-red-700 text-red-700': !isSudahDikerjakan,
              },
            )}
          >
            {isSudahDikerjakan ? <Check size={16} /> : <X size={16} />}
          </div>
          <p
            className={clsx('', {
              ' text-green-700': isSudahDikerjakan,
              ' text-red-700': !isSudahDikerjakan,
            })}
          >
            Ujian belum dikerjakan
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-primary px-24 py-12 text-white"
          onClick={() => setIsShow(false)}
        >
          Kembali
        </button>
      </div>
    </div>
  )
}
