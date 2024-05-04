import ScrollbarComponent from '@/components/molecules/Scroolbar'
import { CBTHeader } from '../cbt-layout/cbt-header'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { PembahasanType, StatistikType } from '@/libs/types/cbt-type'
import { BiodataType } from '@/libs/types/biodata-type'
import { ResultHome } from './result-home'
import {
  useGetPembahasanUjianQuery,
  useGetStatistikUjianQuery,
} from '@/store/slices/cbtAPI'

export default function ResultLayout() {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const kodeUjianParams = searchParams.get('idUjian')
  const noSoalParams = searchParams.get('nomor') ?? 1
  const [noSoal, setNoSoal] = useState<number>(Number(noSoalParams))
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

  const [dataStatistik, setDataStatistik] = useState<StatistikType[]>([])
  const [dataPembahasan, setDataPembahasan] = useState<PembahasanType[]>([])

  const {
    data: dataStatistikUjian,
    isLoading: statistikLoading,
    isFetching: statistikFething,
  } = useGetStatistikUjianQuery(
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
    if (dataStatistikUjian?.data) {
      setDataStatistik(dataStatistikUjian?.data)
    }
  }, [dataStatistikUjian?.data])

  const {
    data: dataPembahasanUjian,
    isLoading: pembahasanLoading,
    isFetching: pembahasanFething,
  } = useGetPembahasanUjianQuery(
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
    if (dataPembahasanUjian?.data) {
      setDataPembahasan(dataPembahasanUjian?.data)
    }
  }, [dataPembahasanUjian?.data])

  return (
    <ScrollbarComponent classes="flex flex-col">
      <CBTHeader biodata={biodata?.pribadi?.nama} idUjian={kodeUjianParams} />
      <ResultHome
        dataStatistik={dataStatistik}
        idUjian={kodeUjianParams}
        dataPembahasan={dataPembahasan}
        isLoading={
          statistikFething ||
          statistikLoading ||
          pembahasanFething ||
          pembahasanLoading
        }
        noSoal={noSoal}
        setNoSoal={setNoSoal}
        totalSoal={dataPembahasan?.length}
      />
    </ScrollbarComponent>
  )
}
