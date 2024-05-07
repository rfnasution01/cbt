import {
  PembahasanType,
  RankingType,
  StatistikType,
  UjianType,
} from '@/libs/types/cbt-type'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StatistikSoalPieChart } from './result-statistik-soal'
import { StatistikBenarBarChart } from './result-statistik-benar'
import {
  useGetRankingUjianQuery,
  useGetUjianQuery,
} from '@/store/slices/cbtAPI'
import Cookies from 'js-cookie'
import Loading from '@/components/atoms/Loading'
import { StatistikHasil } from './result-statistik-hasil'
import { ResultRanking } from './result-ranking'
import { StatistikSekolahPieChart } from './result-statistik-sekolah'
import { StatistikNilaiPerSekolah } from './result-statistik-nilai-per-sekolah'

export function ResultStatistikNilai({
  data,
  idUjian,
  setType,
  setKategori,
  dataPembahasan,
  setNoSoal,
}: {
  data: StatistikType[]
  idUjian: string
  setType: Dispatch<SetStateAction<string>>
  setKategori: Dispatch<SetStateAction<string>>
  setNoSoal: Dispatch<SetStateAction<number>>
  dataPembahasan: PembahasanType[]
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

  // Fungsi untuk mengambil item dengan urutan terkecil dalam setiap grup kategori
  const itemUrutanTerkecilPerKategori = dataPembahasan.reduce((acc, curr) => {
    // Mengecek apakah kategori sudah ada di akumulator
    if (!acc[curr.id_kategori]) {
      acc[curr.id_kategori] = curr
    } else {
      // Jika sudah ada, bandingkan urutan dan perbarui jika lebih kecil
      if (curr.urutan < acc[curr.id_kategori].urutan) {
        acc[curr.id_kategori] = curr
      }
    }
    return acc
  }, {})

  // --- Ranking ---
  const { data: dataRanking } = useGetRankingUjianQuery({ id_ujian: idUjian })
  const [ranking, setRanking] = useState<RankingType>()

  useEffect(() => {
    if (dataRanking?.data) {
      setRanking(dataRanking?.data)
    }
  }, [dataRanking?.data])

  return (
    <div className="flex flex-col gap-y-24">
      <p className="text-[2rem] font-bold">Hasil</p>
      {disabled ? (
        <Loading />
      ) : (
        <StatistikHasil item={item} idUjian={idUjian} />
      )}

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
                  // Filter item berdasarkan id_kategori yang sama dengan targetKategori
                  const filteredItems = Object.values(
                    itemUrutanTerkecilPerKategori,
                  ).filter(
                    (list: PembahasanType) =>
                      list?.id_kategori === item?.id_kategori,
                  )

                  // Jika tidak ada item yang cocok, kembalikan null atau tangani kasus khusus sesuai kebutuhan
                  if (filteredItems.length !== 0) {
                    // Ambil semua nilai urutan dari item yang terfilter
                    const urutanArray = filteredItems.map(
                      (item: PembahasanType) => item?.urutan,
                    )

                    // Temukan nilai terkecil dari urutanArray
                    const smallestUrutan = Math.min(...urutanArray)
                    setType('pembahasan')
                    setKategori(item?.id_kategori)
                    setNoSoal(smallestUrutan)
                    navigate(
                      `/pembahasan?idUjian=${idUjian}&nomor=${smallestUrutan}&kategori=${item?.id_kategori}`,
                    )
                  }
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
        {/* <StatistikDijawabBarChart jsonData={data} /> */}
        <StatistikBenarBarChart jsonData={data} />
      </div>
      <div className="flex gap-32 phones:flex-col">
        <StatistikSoalPieChart jsonData={data} />
        <StatistikSekolahPieChart jsonData={ranking?.ranking_semua} />
      </div>
      <StatistikNilaiPerSekolah jsonData={ranking?.ranking_semua} />

      <ResultRanking idUjian={idUjian} />
    </div>
  )
}
