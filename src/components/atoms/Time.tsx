import { useState, useEffect } from 'react'

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  return <div className="text-[3rem] font-bold">{formattedTime}</div>
}
