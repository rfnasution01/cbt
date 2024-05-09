import Loading from '@/components/atoms/Loading'
import { UjianType } from '@/libs/types/cbt-type'
import { Airplay, Album, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function HomeCard({
  disabled,
  ujian,
}: {
  ujian: UjianType[]
  disabled: boolean
}) {
  const ujianDijawab = ujian.filter((item) => item?.status === 1)
  const ujianLulus = ujian.filter((item) => item?.status_lulus === true)
  const navigate = useNavigate()

  return (
    <>
      {disabled ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-12 gap-32">
          {/* --- Total Ujian --- */}
          <div
            onClick={() => {
              navigate('/ujian')
            }}
            className="col-span-4 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-12"
          >
            <div className="flex items-center gap-32">
              <div className="flex flex-1 flex-col justify-center gap-y-12">
                <p className="font-nunito text-[2rem]">Ujian Yang Dimiliki</p>
                <p className="font-roboto text-[4rem]">{ujian?.length}</p>
              </div>
              <span className="rounded-2xl bg-indigo-300 p-16 text-indigo-700">
                <Album size={60} />
              </span>
            </div>
          </div>
          {/* --- Ujian Dijawab--- */}
          <div
            onClick={() => {
              navigate('/ujian')
            }}
            className="col-span-4 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-12"
          >
            <div className="flex items-center gap-32">
              <div className="flex flex-1 flex-col justify-center gap-y-12">
                <p className="font-nunito text-[2rem]">Ujian Yang Dijawab</p>
                <p className="font-roboto text-[4rem]">
                  <span className="text-primary">{ujianDijawab?.length}</span> /{' '}
                  {ujian?.length}
                </p>
              </div>
              <span className="rounded-2xl bg-green-300 p-16 text-green-700">
                <Airplay size={60} />
              </span>
            </div>
          </div>
          {/* --- Ujian Lulus--- */}
          <div
            onClick={() => {
              navigate('/hasil-ujian')
            }}
            className="col-span-4 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md phones:col-span-12"
          >
            <div className="flex items-center gap-32">
              <div className="flex flex-1 flex-col justify-center gap-y-12">
                <p className="font-nunito text-[2rem]">Ujian Yang Lulus</p>
                <p className="font-roboto text-[4rem]">
                  <span className="text-primary">{ujianLulus?.length}</span> /{' '}
                  {ujian?.length}
                </p>
              </div>
              <span className="rounded-2xl bg-yellow-300 p-16 text-yellow-700">
                <Trophy size={60} />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
