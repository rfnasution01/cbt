import { UjianType } from '@/libs/types/cbt-type'
import { Dispatch, SetStateAction, useState } from 'react'
import { UjianDetailInformation } from './ujian-detail-information'
import { UjianDetailPeraturan } from './ujian-detail-peraturan'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { DialogHelpers } from '@/components/molecules/dialog'
import { ModalError } from '../hasil-ujian/modal-error'
import { isSudahBerakhir, isSudahDimulai } from '@/libs/helpers/format-time'

export function UjianDetail({
  data,
  ujianName,
  setPage,
}: {
  data: UjianType[]
  ujianName?: string
  setPage?: Dispatch<SetStateAction<string>>
}) {
  const navigate = useNavigate()
  const ujianNow = data?.find((item) => item?.id_ujian === ujianName)
  const [isShow, setIsShow] = useState<boolean>(false)

  const handleStartExam = (item) => {
    // Cek apakah mulaiUjian sudah ada di local storage
    const existingData = localStorage.getItem('mulaiujian')
    let startTime = null

    // Jika sudah ada data, gunakan startTime dari data yang sudah ada
    if (existingData) {
      const existingStartTime = JSON.parse(existingData).startTime
      if (existingStartTime) {
        startTime = existingStartTime
      }
    } else {
      // Jika belum ada data, buat startTime baru
      startTime = new Date().toISOString()
      const duration = item?.waktu_ujian

      const dataToSave = {
        startTime,
        duration,
      }

      localStorage.setItem('mulaiujian', JSON.stringify(dataToSave))
    }
    navigate(`/cbt?idUjian=${item?.id_ujian}`)
  }

  return (
    <div className="flex flex-col gap-32">
      <UjianDetailInformation ujianNow={ujianNow} />
      <UjianDetailPeraturan />
      <div className="flex items-center justify-end">
        <div className="flex w-1/2 items-center gap-32 phones:w-full phones:flex-col">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-x-8 rounded-2xl bg-blue-500 py-12 text-white hover:bg-blue-700 phones:w-full"
            onClick={() => {
              setPage('home')
            }}
          >
            <ArrowLeftFromLine size={16} />
            <p>Kembali</p>
          </button>
          <button
            type="button"
            onClick={() => {
              if (ujianNow?.status === 0) {
                handleStartExam(ujianNow)
              } else {
                setIsShow(true)
              }
            }}
            className="flex flex-1 items-center justify-center gap-x-8 rounded-2xl bg-primary py-12 text-white hover:bg-primary-shade-700 disabled:cursor-not-allowed disabled:hover:bg-primary-shade-500 phones:w-full"
          >
            <p>Mulai</p>
            <ArrowRightFromLine size={16} />
          </button>
        </div>
      </div>
      <DialogHelpers
        title={
          <div className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary-shade-100">
            <Link to="/" className="phones:hidden">
              CBT
              <span className="text-primary-shade-200">SmartLearning</span>
            </Link>
          </div>
        }
        open={isShow}
        setOpen={setIsShow}
        height="auto"
        size="small"
        noPadding
        customComponent={
          <ModalError
            msg="Ujian"
            setIsShow={setIsShow}
            isSudahDikerjakan={
              data?.find((item) => item?.id_ujian === ujianNow?.id_ujian)
                ?.skor !== 1
            }
            isSudahDimulai={isSudahDimulai(
              data?.find((item) => item?.id_ujian !== ujianNow?.id_ujian)
                ?.tanggal_mulai,
            )}
            isSudahBerakhir={isSudahBerakhir(
              data?.find((item) => item?.id_ujian !== ujianNow?.id_ujian)
                ?.tanggal_akhir,
            )}
          />
        }
      />
    </div>
  )
}
