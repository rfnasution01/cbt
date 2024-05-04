import { StatistikType, UjianType } from '@/libs/types/cbt-type'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StatistikSoalPieChart } from './result-statistik-soal'
import { StatistikDijawabBarChart } from './result-statistik-dijawab'
import { StatistikBenarBarChart } from './result-statistik-benar'
import { useGetUjianQuery } from '@/store/slices/cbtAPI'
import Cookies from 'js-cookie'
import Loading from '@/components/atoms/Loading'
import { StatistikHasil } from './result-statistik-hasil'

export function ResultStatistikNilai({
  data,
  idUjian,
  setType,
  setKategori,
}: {
  data: StatistikType[]
  idUjian: string
  setType: Dispatch<SetStateAction<string>>
  setKategori: Dispatch<SetStateAction<string>>
}) {
  const navigate = useNavigate()
  const {
    data: dataUjian,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetUjianQuery()
  const [ujian, setUjian] = useState<UjianType[]>([])
  const disabled = isLoading || isFetching

  useEffect(() => {
    if (dataUjian?.data) {
      setUjian(dataUjian?.data)
    }
  }, [dataUjian?.data])

  useEffect(() => {
    if (isError) {
      const errorMsg = error as {
        data?: {
          message?: string
        }
        status?: number
      }
      if (errorMsg?.status === 401) {
        Cookies.remove('token')
        navigate('/login')
      }
    }
  }, [isError, error])

  const item = ujian?.find((list) => list?.id_ujian === idUjian)

  return (
    <div className="flex flex-col gap-y-24">
      <p className="text-[2rem] font-bold">Hasil</p>
      {disabled ? <Loading /> : <StatistikHasil item={item} />}

      {/* --- Nilai --- */}
      <p className="text-[2rem] font-bold">Nilai</p>
      <div className="grid grid-cols-12 gap-32">
        {data?.map((item, idx) => (
          <div
            className="col-span-3 rounded-2xl border-white bg-white p-32 shadow phones:col-span-12"
            key={idx}
          >
            <div className="flex flex-col gap-y-12">
              <p className="text-[2rem] font-bold">{item?.nama_kategori}</p>
              <p>
                Dijawab: <span className="text-primary">{item?.dijawab}</span> /{' '}
                {item?.jumlah_soal}
              </p>
              <p>Benar: {item?.benar}</p>
              <p>Salah: {item?.salah}</p>
              <button
                type="button"
                className="rounded-2xl bg-primary px-24 py-12 text-white hover:bg-primary-shade-500"
                onClick={() => {
                  setType('pembahasan')
                  setKategori(item?.id_kategori)
                  navigate(
                    `/pembahasan?soal=${idUjian}&kategori=${item?.id_kategori}`,
                  )
                }}
              >
                Pembahasan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- Statistik --- */}
      <p className="text-[2rem] font-bold">Statistik</p>
      <div className="flex gap-32 phones:flex-col">
        <StatistikSoalPieChart jsonData={data} />
        <StatistikDijawabBarChart jsonData={data} />
        <StatistikBenarBarChart jsonData={data} />
      </div>
    </div>
  )
}
