import { PembahasanType } from '@/libs/types/cbt-type'
import { Dispatch, SetStateAction, useState } from 'react'
import { ResultNavigationHome } from './result-navigastion-home'
import { ResultPembahsanHome } from './result-pembahasan-home'

export function ResultPembahasan({
  data,
  kategori,
  noSoal,
  setNoSoal,
  kodeSoal,
  totalSoal,
  setUkuranSoal,
  ukuranSoal,
}: {
  data: PembahasanType[]
  kategori: string
  totalSoal: number
  noSoal: number
  setNoSoal: Dispatch<SetStateAction<number>>
  kodeSoal: string
  setUkuranSoal: Dispatch<SetStateAction<string>>
  ukuranSoal: string
}) {
  const [isShow, setIsShow] = useState<boolean>(true)
  const [isShowSoal, setIsShowSoal] = useState<boolean>(true)
  const [isShowNav, setIsShowNav] = useState<boolean>(true)

  return (
    <div className="scrollbar h-full flex-1 overflow-y-auto">
      <div className="scrollbar grid h-full grid-cols-12 gap-32 overflow-y-auto">
        {/* ---- Soal ---- */}
        <ResultPembahsanHome
          isShow={isShow}
          noSoal={noSoal}
          data={data}
          setUkuranSoal={setUkuranSoal}
          isShowSoal={isShowSoal}
          setIsShowSoal={setIsShowSoal}
          ukuranSoal={ukuranSoal}
          idUjian={kodeSoal}
          setNoSoal={setNoSoal}
          kategori={kategori}
        />
        {/* ---- Navigasi ---- */}
        <ResultNavigationHome
          isShow={isShow}
          noSoal={noSoal}
          data={data}
          setNoSoal={setNoSoal}
          setIsShow={setIsShow}
          setIsShowNav={setIsShowNav}
          isShowNav={isShowNav}
          idUjian={kodeSoal}
          kategori={kategori}
          totalSoal={totalSoal}
        />
      </div>
    </div>
  )
}
