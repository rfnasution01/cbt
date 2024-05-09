import Time from '@/components/atoms/Time'
import { LogoTitle } from '@/components/molecules/Logo'
import { UjianType } from '@/libs/types/cbt-type'
import { useGetUjianQuery } from '@/store/slices/cbtAPI'
import Cookies from 'js-cookie'
import { CircleUser } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function CBTHeader({
  biodata,
  idUjian,
}: {
  biodata?: string
  idUjian: string
}) {
  const navigate = useNavigate()
  const { data, isError, error } = useGetUjianQuery()
  const [ujian, setUjian] = useState<UjianType[]>([])

  useEffect(() => {
    if (data?.data) {
      setUjian(data?.data)
    }
  }, [data?.data])

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

  const ujianNow = ujian.find((item) => item?.id_ujian === idUjian)?.nama_ujian

  return (
    <header className="flex border-b-2 border-slate-300">
      <div className="flex flex-1 justify-start p-32">
        <LogoTitle teks1="Smart" teks2="Learning" />
      </div>
      <div className="flex flex-1 items-center justify-start p-32 text-[2.4rem] phones:hidden">
        <p>{ujianNow}</p>
      </div>
      <div className="flex gap-x-32">
        <span className="flex items-center justify-center phones:px-32">
          <Time />
        </span>
        <div className="flex items-center gap-x-8 bg-primary px-32 text-center text-[2rem] text-white hover:cursor-pointer phones:hidden">
          <CircleUser />
          <p>{biodata ?? 'John Doe'}</p>
        </div>
      </div>
    </header>
  )
}
