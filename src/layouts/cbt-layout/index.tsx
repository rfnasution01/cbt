import ScrollbarComponent from '@/components/molecules/Scroolbar'
import { CBTHeader } from './cbt-header'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect, useState } from 'react'
import { BiodataType } from '@/libs/types/biodata-type'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { CBTProgress } from './cbt-progress'
import {
  useCreateSaveJawabanMutation,
  useGetSoalUjianQuery,
} from '@/store/slices/cbtAPI'
import { SoalUjianType } from '@/libs/types/cbt-type'
import { CBTSoalHome } from './cbt-soal-home'
import { CBTNavigationHome } from './cbt-navigation-home'
import { DialogHelpers } from '@/components/molecules/dialog'
import { CBTModalConfirmation } from './cbt-modal-confirmation'
import { konversiJaawaban } from '@/libs/helpers/format-jawaban'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CBTLayout() {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const kodeUjianParams = searchParams.get('idUjian')
  const [dataSoal, setDataSoal] = useState<SoalUjianType[]>([])
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
  const {
    data,
    isLoading: ujianLoading,
    isFetching: ujianFetching,
    isError: ujianIsError,
    error: ujianError,
  } = useGetSoalUjianQuery(
    {
      id_ujian: kodeUjianParams,
    },
    {
      skip:
        kodeUjianParams === null ||
        kodeUjianParams === undefined ||
        kodeUjianParams === '',
    },
  )

  useEffect(() => {
    if (data?.data) {
      setDataSoal(data?.data)
    }
  }, [data?.data])

  useEffect(() => {
    if (ujianIsError) {
      const errorMsg = ujianError as {
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
  }, [ujianError, ujianIsError])

  // --- Create Soal Ujian ---
  const [
    submitJawaban,
    { isLoading, isSuccess, isError: submitIsError, error: submitError },
  ] = useCreateSaveJawabanMutation()
  const smartlearningData = JSON.parse(
    localStorage.getItem('smartlearning') || '{}',
  )

  const handleSelesai = () => {
    const data = konversiJaawaban(smartlearningData)

    try {
      submitJawaban({ data: data })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Jawaban berhasil disimpan!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      localStorage.removeItem('smartlearning')
      localStorage.removeItem('mulaiujian')
      localStorage.removeItem('bookmarks')
      setTimeout(() => {
        navigate('/hasil-ujian')
      }, 3000)
    }
  }, [isSuccess])

  useEffect(() => {
    if (submitIsError) {
      const errorMsg = submitError as {
        data?: {
          message?: string
        }
        status?: number
      }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      if (errorMsg?.status === 401) {
        Cookies.remove('token')
        navigate('/login')
      }
    }
  }, [submitIsError, submitError])

  const disabled = ujianFetching || ujianLoading || isLoading

  return (
    <ScrollbarComponent classes="flex flex-col">
      <CBTHeader biodata={biodata?.pribadi?.nama} idUjian={kodeUjianParams} />
      <CBTProgress totalSoal={dataSoal?.length} idUjian={kodeUjianParams} />
      <div className="scrollbar h-full flex-1 overflow-y-auto px-80 py-32 phones:px-32">
        <div className="scrollbar grid h-full grid-cols-12 gap-32 overflow-y-auto">
          {/* ---- Soal ---- */}
          <CBTSoalHome
            isShow={isShow}
            noSoal={noSoal}
            dataSoal={dataSoal}
            setUkuranSoal={setUkuranSoal}
            isShowSoal={isShowSoal}
            setIsShowSoal={setIsShowSoal}
            isDisabled={disabled}
            ukuranSoal={ukuranSoal}
            idUjian={kodeUjianParams}
            setNoSoal={setNoSoal}
          />
          {/* ---- Navigasi ---- */}
          <CBTNavigationHome
            isShow={isShow}
            noSoal={noSoal}
            dataSoal={dataSoal}
            isDisabled={disabled}
            setNoSoal={setNoSoal}
            setIsShow={setIsShow}
            setIsShowNav={setIsShowNav}
            isShowNav={isShowNav}
            setIsShowModal={setIsShowModal}
            idUjian={kodeUjianParams}
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
            handleSubmit={handleSelesai}
            totalSoal={dataSoal?.length}
          />
        }
      />
      <ToastContainer />
    </ScrollbarComponent>
  )
}
