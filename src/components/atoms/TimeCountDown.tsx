import { konversiJaawaban } from '@/libs/helpers/format-jawaban'
import { useCreateSaveJawabanMutation } from '@/store/slices/cbtAPI'
import clsx from 'clsx'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CountdownTimer = ({
  waktuUjian = 10,
  idUjian,
  isPercobaan,
}: {
  waktuUjian?: number
  idUjian: string
  isPercobaan?: boolean
}) => {
  const [time, setTime] = useState({
    minutes: waktuUjian,
    seconds: 0,
  })
  const navigate = useNavigate()

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Mengurangi satu detik setiap interval
      setTime((prevTime) => {
        if (prevTime.seconds === 0) {
          // Jika detik sudah mencapai 0, kurangi satu menit dan atur detik menjadi 59
          return { minutes: prevTime.minutes - 1, seconds: 59 }
        } else {
          return { ...prevTime, seconds: prevTime.seconds - 1 }
        }
      })
    }, 1000) // 1 detik dalam milidetik

    // Membersihkan interval saat komponen dibongkar
    return () => clearInterval(intervalId)
  }, [])

  // --- Waktu kurang dari 5 menit ---
  useEffect(() => {
    if (time.minutes === 5 && time.seconds === 0) {
      toast.error(`'Waktu tersisa kurang dari 5 Menit`, {
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
    }
  }, [time])

  // --- Waktu habis ---
  useEffect(() => {
    if (time.minutes <= 0) {
      if (isPercobaan) {
        localStorage.removeItem('smartlearning')
        localStorage.removeItem('mulaiujian')
        localStorage.removeItem('bookmarks')
      } else {
        handleSelesai()
      }
      setTimeout(() => {
        navigate('/hasil-ujian')
      }, 1000)
    }
  }, [time])

  // Konversi menit menjadi format waktu hh:mm
  const formatTime = (time) => {
    return `${time?.minutes?.toString().padStart(2, '0')}:${time.seconds
      .toString()
      .padStart(2, '0')}`
  }

  // --- Submit Jawaban ---
  const [
    submitJawaban,
    { isSuccess, isError: submitIsError, error: submitError },
  ] = useCreateSaveJawabanMutation()
  const smartlearningData = JSON.parse(
    localStorage.getItem('smartlearning') || '{}',
  )

  const handleSelesai = () => {
    const data = konversiJaawaban(smartlearningData)

    const dataDefault = {
      id_ujian: idUjian,
      jawaban: [],
    }

    const sendData = data?.id_ujian ? data : dataDefault
    try {
      submitJawaban({ data: sendData })
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

  return (
    <>
      <p>
        Waktu Tersisa :{' '}
        <span
          className={clsx('text-[2rem] font-bold', {
            'transform-gpu animate-pulse text-red-700 duration-500':
              time?.minutes < 20,
            'transform-gpu animate-pulse text-red-500 duration-100':
              time?.minutes < 10,
          })}
        >
          {formatTime(time)}
        </span>
      </p>
      <ToastContainer />
    </>
  )
}

export default CountdownTimer
