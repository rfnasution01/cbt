import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CountdownTimer = ({ waktuUjian = 10 }: { waktuUjian?: number }) => {
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

  useEffect(() => {
    // Navigasi ke '/home' saat hitungan mundur selesai
    if (time.minutes === 0 && time.seconds === 0) navigate('/app')
  }, [time])

  // Konversi menit menjadi format waktu hh:mm
  const formatTime = (time) => {
    return `${time?.minutes?.toString().padStart(2, '0')}:${time.seconds
      .toString()
      .padStart(2, '0')}`
  }

  return (
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
  )
}

export default CountdownTimer
