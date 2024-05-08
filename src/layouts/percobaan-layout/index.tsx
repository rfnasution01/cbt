import ScrollbarComponent from '@/components/molecules/Scroolbar'
import { CBTHeader } from '../cbt-layout/cbt-header'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect, useState } from 'react'
import { BiodataType } from '@/libs/types/biodata-type'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { CBTProgress } from '../cbt-layout/cbt-progress'
import { CBTSoalHome } from '../cbt-layout/cbt-soal-home'
import { CBTNavigationHome } from '../cbt-layout/cbt-navigation-home'
import { DialogHelpers } from '@/components/molecules/dialog'
import { DataPercobaanSoal } from '@/libs/dummy/data-percobaan-soal'
import { CBTModalConfirmation } from './cbt-modal-confirmation'

export default function PercobaanLayout() {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const kodeUjianParams = searchParams.get('idUjian')
  const noSoalParams = searchParams.get('nomor') ?? 1
  const [noSoal, setNoSoal] = useState<number>(Number(noSoalParams))
  const [isShow, setIsShow] = useState<boolean>(true)
  const [isShowSoal, setIsShowSoal] = useState<boolean>(true)
  const [isShowNav, setIsShowNav] = useState<boolean>(true)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [ukuranSoal, setUkuranSoal] = useState<string>('sm')

  // --- Biodata ---
  const { data: dataBiodata, isError, error } = useGetBiodataQuery()
  const [biodata, setBiodata] = useState<BiodataType>()

  useEffect(() => {
    if (dataBiodata?.data) {
      setBiodata(dataBiodata?.data)
    }
  }, [dataBiodata?.data])

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

  // --- Get Soal Ujian ---

  // --- Create Soal Ujian ---

  return (
    <ScrollbarComponent classes="flex flex-col">
      <CBTHeader biodata={biodata?.pribadi?.nama} idUjian={kodeUjianParams} />
      <CBTProgress
        totalSoal={DataPercobaanSoal?.length}
        idUjian={kodeUjianParams}
        isPercobaan
      />
      <div className="scrollbar h-full flex-1 overflow-y-auto px-80 py-32 phones:px-32">
        <div className="scrollbar grid h-full grid-cols-12 gap-32 overflow-y-auto">
          {/* ---- Soal ---- */}
          <CBTSoalHome
            isPercobaan
            isShow={isShow}
            noSoal={noSoal}
            dataSoal={DataPercobaanSoal}
            setUkuranSoal={setUkuranSoal}
            isShowSoal={isShowSoal}
            setIsShowSoal={setIsShowSoal}
            isDisabled={false}
            ukuranSoal={ukuranSoal}
            idUjian={kodeUjianParams}
            setNoSoal={setNoSoal}
          />
          {/* ---- Navigasi ---- */}
          <CBTNavigationHome
            isShow={isShow}
            noSoal={noSoal}
            dataSoal={DataPercobaanSoal}
            isDisabled={false}
            setNoSoal={setNoSoal}
            setIsShow={setIsShow}
            setIsShowNav={setIsShowNav}
            isShowNav={isShowNav}
            setIsShowModal={setIsShowModal}
            idUjian={kodeUjianParams}
            isPercobaan
          />
        </div>
      </div>
      <DialogHelpers
        title={
          <div className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary-shade-100">
            <Link to="/">
              CBT<span className="text-primary-shade-200">SmartLearning</span>
            </Link>
          </div>
        }
        open={isShowModal}
        setOpen={setIsShowModal}
        height="auto"
        noPadding
        isPhoneAuto
        customComponent={
          <CBTModalConfirmation
            setIsShow={setIsShowModal}
            totalSoal={DataPercobaanSoal?.length}
          />
        }
      />
    </ScrollbarComponent>
  )
}
