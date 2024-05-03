import { UjianType } from '@/libs/types/cbt-type'
import { Dispatch, SetStateAction } from 'react'
import { UjianDetailInformation } from './ujian-detail-information'
import { UjianDetailPeraturan } from './ujian-detail-peraturan'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'

export function UjianDetail({
  data,
  ujianName,
  setPage,
}: {
  data: UjianType[]
  ujianName?: string
  setPage?: Dispatch<SetStateAction<string>>
}) {
  const ujianNow = data?.find((item) => item?.id_ujian === ujianName)

  return (
    <div className="flex flex-col gap-32">
      <UjianDetailInformation ujianNow={ujianNow} />
      <UjianDetailPeraturan />
      <div className="flex items-center justify-end">
        <div className="flex w-1/2 items-center gap-32 phones:w-full phones:flex-col">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-x-8 rounded-2xl bg-blue-500 py-12 text-white hover:bg-blue-700 phones:w-full"
            onClick={() => {
              setPage('home')
            }}
          >
            <ArrowLeftFromLine size={16} />
            <p>Kembali</p>
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-x-8 rounded-2xl bg-primary py-12 text-white hover:bg-primary-shade-700 phones:w-full"
          >
            <p>Mulai</p>
            <ArrowRightFromLine size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
