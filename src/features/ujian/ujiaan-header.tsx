import { DialogHelpers } from '@/components/molecules/dialog'
import clsx from 'clsx'
import { Dispatch, SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'

export function UjianHeader({
  type,
  setType,
}: {
  type: string
  setType: Dispatch<SetStateAction<string>>
}) {
  const isSimulasi = localStorage.getItem('simulasi')
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-between">
      <h1 className="block text-[3rem] font-bold phones:hidden">
        Computer Based Test
      </h1>
      <div className="flex items-center gap-x-16">
        {['Percobaan', 'Ujian'].map((item, idx) => (
          <div
            className={clsx(
              'border-b p-16 text-[1.8rem] hover:cursor-pointer',
              {
                'border-primary text-primary': item
                  ?.toLowerCase()
                  ?.includes(type),
                'border-transparent hover:border-primary hover:text-primary':
                  !item?.toLowerCase()?.includes(type),
              },
            )}
            key={idx}
            onClick={() => {
              if (type === 'percobaan' && isSimulasi !== 'yes') {
                setIsShow(true)
              } else {
                setType(item.toLowerCase())
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <DialogHelpers
        title={
          <div className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary-shade-100">
            <Link to="/" className="phones:hidden">
              CBT
              <span className="text-primary-shade-200">SmartLearning</span>
            </Link>
          </div>
        }
        open={isShow}
        setOpen={setIsShow}
        height="auto"
        size="small"
        noPadding
        customComponent={
          <div className="mb-32 flex flex-col gap-y-16 text-dark-background">
            <p className="text-[2rem]">Kerjakan simulasi terlebih dahulu</p>
            <div className="flex justify-end">
              <button
                onClick={() => setIsShow(false)}
                type="button"
                className="rounded-2xl bg-primary px-24 py-12 text-white hover:bg-primary-shade-700"
              >
                Kembali
              </button>
            </div>
          </div>
        }
      />
    </div>
  )
}
