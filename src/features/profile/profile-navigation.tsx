import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

export function ProfileNavigation({
  type,
  setType,
}: {
  type: string
  setType: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="block text-[3rem] font-bold phones:hidden">Data Siswa</h1>
      <div className="flex items-center gap-x-16">
        {['Profile', 'Update'].map((item, idx) => (
          <div
            className={clsx(
              'border-b p-16 text-[1.8rem] hover:cursor-pointer',
              {
                'border-primary text-primary': item
                  ?.toLowerCase()
                  .includes(type),
                'border-transparent hover:border-primary hover:text-primary':
                  !item?.toLowerCase().includes(type) &&
                  !item?.toLowerCase().includes('percobaan'),
                'border border-primary  text-primary': item
                  ?.toLowerCase()
                  .includes('percobaan'),
              },
            )}
            key={idx}
            onClick={() => {
              setType(item.toLowerCase())
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
