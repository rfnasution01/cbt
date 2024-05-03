import Loading from '@/components/atoms/Loading'
import { UjianType } from '@/libs/types/cbt-type'
import DataNotFound from '@/pages/data-not-found'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { Scroll, Timer } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function HasilUjianMapping({
  data,
  disabled,
}: {
  data: UjianType[]
  disabled?: boolean
}) {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-12 gap-32">
      {disabled ? (
        <div className="col-span-12">
          <Loading />
        </div>
      ) : data?.length === 0 ? (
        <div className="col-span-12">
          <DataNotFound />
        </div>
      ) : (
        data?.map((item, idx) => (
          <div
            className="col-span-4 rounded-2xl bg-white shadow hover:cursor-pointer hover:shadow-md phones:col-span-12"
            key={idx}
            onClick={() => {
              navigate(`/pembahasan?idUjian=${item?.id_ujian}`)
            }}
          >
            {/* --- Tanggal --- */}
            <div
              className="bg-primary px-32 py-16 text-white"
              style={{
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }}
            >
              <p>
                {dayjs(item?.tanggal_mulai).locale('id').format('DD MMMM YYYY')}
              </p>
            </div>
            {/* --- Content --- */}
            <div className="flex flex-col gap-y-16 px-32 py-16">
              {/* --- Tag --- */}
              <div className="flex">
                <p
                  className={clsx('border-l-8 px-16 py-8', {
                    'border-rose-700 bg-rose-50': item?.status === 0,
                    'border-emerald-700 bg-emerald-50': item?.status === 1,
                  })}
                >
                  {item?.status === 0 ? 'Belum Dikerjakan' : 'Sudah Dikerjakan'}
                </p>
              </div>
              {/* --- Title --- */}
              <p className="text-[2rem] font-medium">{item?.nama_ujian}</p>
              {/* --- Desc --- */}
              <div className="flex items-center gap-x-16">
                <div className="flex items-center gap-x-4">
                  <Timer size={16} />
                  <p>{item?.waktu_ujian} Menit</p>
                </div>
                <div className="flex items-center gap-x-4">
                  <Scroll size={16} />
                  <p>{item?.jumlah_soal} Soal</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
