import Loading from '@/components/atoms/Loading'
import { UjianType } from '@/libs/types/cbt-type'

export function HomeCard({
  disabled,
  ujian,
}: {
  ujian: UjianType[]
  disabled: boolean
}) {
  const ujianDijawab = ujian.filter((item) => item?.status === 1)
  const ujianDikerjakan = ujian.filter((item) => item?.status === 0)

  return (
    <>
      {disabled ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-12 gap-32">
          {/* --- Total Ujian --- */}
          <div className="col-span-4 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
            <div className="flex flex-col items-center justify-center gap-y-12">
              <p className="font-roboto text-[5rem]">{ujian?.length}</p>
              <p className="text-center text-[2rem]">
                Total Ujian Yang Dimiliki
              </p>
            </div>
          </div>
          {/* --- Ujian Dijawab--- */}
          <div className="col-span-4 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
            <div className="flex flex-col items-center justify-center gap-y-12">
              <p className="font-roboto text-[5rem]">{ujianDijawab?.length}</p>
              <p className="text-center text-[2rem]">Ujian Yang Dijawab</p>
            </div>
          </div>
          {/* --- Ujian Belum Dijawab--- */}
          <div className="col-span-4 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-6">
            <div className="flex flex-col items-center justify-center gap-y-12">
              <p className="font-roboto text-[5rem]">
                {ujianDikerjakan?.length}
              </p>
              <p className="text-center text-[2rem]">
                Ujian Yang Belum Dikerjakan
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
