import { LogoTitle } from '@/components/molecules/Logo'
import { ListBeritaType } from '@/libs/types/berita-type'
import { useGetListBeritaKategoriQuery } from '@/store/slices/beritaAPI'
import { useGetListPengumumanKategoriQuery } from '@/store/slices/pengumunanAPI'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export function BeritaHeader() {
  const { data: dataBerita } = useGetListBeritaKategoriQuery()
  const [listBerita, setListBerita] = useState<ListBeritaType[]>()

  useEffect(() => {
    if (dataBerita?.data) {
      setListBerita(dataBerita?.data)
    }
  }, [dataBerita?.data])

  const { data: dataKategori } = useGetListPengumumanKategoriQuery()
  const [listKategori, setListKategori] = useState<ListBeritaType[]>()

  useEffect(() => {
    if (dataKategori?.data) {
      setListKategori(dataKategori?.data)
    }
  }, [dataKategori?.data])

  return (
    <header className="flex border-b-2 border-slate-300 p-32">
      <div className="flex flex-1 justify-start">
        <LogoTitle teks1="Smart" teks2="Learning" />
      </div>

      <div className="flex gap-x-32">
        <div className="flex items-center gap-x-32">
          {listBerita?.map((item, idx) => (
            <div
              className={clsx(
                'text-[2rem] hover:cursor-pointer hover:text-primary',
              )}
              key={idx}
            >
              {item?.kategori}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-x-32">
          {listKategori?.map((item, idx) => (
            <div
              className={clsx(
                'text-[2rem] hover:cursor-pointer hover:text-primary',
              )}
              key={idx}
            >
              {item?.kategori}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
