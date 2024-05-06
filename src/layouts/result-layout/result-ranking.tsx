import { BiodataType } from '@/libs/types/biodata-type'
import { RankingType } from '@/libs/types/cbt-type'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useGetRankingUjianQuery } from '@/store/slices/cbtAPI'
import clsx from 'clsx'
import { debounce } from 'lodash'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ResultRanking({ idUjian }: { idUjian: string }) {
  const { data } = useGetRankingUjianQuery({ id_ujian: idUjian })
  const [ranking, setRanking] = useState<RankingType>()
  const [numberStart, setNumberStart] = useState<number>(4400)
  const dataPerPage = 100
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    if (data?.data) {
      setRanking(data?.data)
    }
  }, [data?.data])

  // --- Biodata ---
  const { data: dataBiodata } = useGetBiodataQuery()
  const [biodata, setBiodata] = useState<BiodataType>()

  useEffect(() => {
    if (dataBiodata?.data) {
      setBiodata(dataBiodata?.data)
    }
  }, [dataBiodata?.data])

  const handleSearch = debounce((searchValue: string) => {
    setSearch(searchValue)
  }, 300)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setNumberStart(0)
    handleSearch(value)
  }

  const handleFiltereSekolah = (searchValue: string) => {
    setNumberStart(0)
    handleSearch(searchValue)
  }

  const filterData = (search: string) => {
    return ranking?.ranking_semua.filter((item) => {
      return (
        item.nama.toLowerCase().includes(search.toLowerCase()) ||
        item.nisn.toLowerCase().includes(search.toLowerCase()) ||
        item.sekolah.toLowerCase().includes(search.toLowerCase())
      )
    })
  }

  const filteredData = filterData(search)

  const maxPage = Math.ceil(filteredData?.length / dataPerPage)
  const pageNow = Math.ceil(numberStart / dataPerPage)

  const rankNow = ranking?.ranking_semua?.find(
    (item) => item?.nisn === biodata?.pribadi?.nisn,
  )?.ranking

  const start = Math.ceil(Number(rankNow) / 100) * 100 - 100

  return (
    <div className="flex flex-col gap-y-32">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-32">
          <p className="text-[2rem] font-bold">List Ranking</p>
          <button
            type="button"
            onClick={() => {
              setNumberStart(start)
            }}
            className="rounded-2xl bg-primary px-24 py-12 text-white"
          >
            Lihat Rank Saya
          </button>
          <button
            type="button"
            onClick={() => {
              handleFiltereSekolah(biodata?.sekolah?.nama.toLocaleLowerCase())
            }}
            className="rounded-2xl bg-primary px-24 py-12 text-white"
          >
            Lihat Rank Sekolah Saya
          </button>
        </div>
        <input
          type="text"
          className="w-6/12 rounded-lg border border-gray-300 p-16 text-[2rem] focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 phones:w-1/2"
          placeholder="Search"
          onChange={(e) => onSearch(e)}
        />
      </div>
      <div className="scrollbar h-[70vh] overflow-y-auto rounded-2xl bg-white">
        <table
          className="w-full table-auto"
          style={{ borderCollapse: 'separate', borderSpacing: '0px 16px' }}
        >
          <thead className="sticky top-0 bg-white">
            <tr className="text-left">
              <th className="text-center">#</th>
              <th className="py-16 text-center">Rank</th>
              <th className="pl-8">Nama</th>
              <th className="pl-8">NISN</th>
              <th className="text-center">Sekolah</th>
              <th className="pl-8">Jenis Kelamin</th>
              <th className="pl-8">Skor</th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              ?.slice(numberStart, numberStart + 100)
              .map((item, idx) => (
                <tr
                  key={idx}
                  className={clsx('hover:cursor-pointer hover:bg-slate-50', {
                    'bg-primary text-white':
                      biodata?.pribadi?.nisn === item?.nisn,
                  })}
                >
                  <td className="text-center">{numberStart + idx + 1}</td>
                  <td className="text-center">{item?.ranking}</td>
                  <td className="pl-8 align-middle">{item?.nama}</td>
                  <td className="pl-8 align-middle">{item?.nisn}</td>
                  <td className="pl-8 align-middle">{item?.sekolah}</td>
                  <td className="pl-8 align-middle">
                    {item?.jk.toLowerCase() === 'p' ? 'Perempuan' : 'Laki-laki'}
                  </td>
                  <td>{item?.skor}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end gap-x-32">
        <span
          className={clsx('border p-4', {
            'hover:cursor-pointer': numberStart - 100 >= 0,
            'hover:cursor-not-allowed': numberStart - 100 < 0,
          })}
          onClick={() => {
            if (numberStart - 100 >= 0) {
              setNumberStart(numberStart - dataPerPage)
            }
          }}
        >
          <ChevronLeft />
        </span>
        <p>
          <span className="text-primary">{pageNow + 1}</span> / {maxPage}
        </p>
        <span
          className={clsx('border p-4', {
            'hover:cursor-pointer': pageNow < maxPage - 1,
            'hover:cursor-not-allowed': pageNow >= maxPage - 1,
          })}
          onClick={() => {
            if (pageNow < maxPage - 1) {
              setNumberStart(numberStart + dataPerPage)
            }
          }}
        >
          <ChevronRight />
        </span>
      </div>
    </div>
  )
}
