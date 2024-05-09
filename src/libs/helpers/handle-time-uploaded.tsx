import React from 'react'
import dayjs from 'dayjs'

interface Props {
  uploadTime: string
}

const HandleTimeUploaded: React.FC<Props> = ({ uploadTime }) => {
  const calculateTimeDifference = () => {
    const currentTime = dayjs()
    const uploadedTime = dayjs(uploadTime)

    const timeDifference = currentTime.diff(uploadedTime, 'minute')

    if (timeDifference < 1) {
      return 'Baru saja'
    } else if (timeDifference < 60) {
      return `${timeDifference} menit`
    } else if (timeDifference < 24 * 60) {
      const hours = Math.floor(timeDifference / 60)
      return `${hours} jam`
    } else if (timeDifference < 7 * 24 * 60) {
      const days = Math.floor(timeDifference / (24 * 60))
      return `${days} hari`
    } else if (timeDifference < 30 * 24 * 60) {
      const weeks = Math.floor(timeDifference / (7 * 24 * 60))
      return `${weeks} minggu`
    } else {
      const months = Math.floor(timeDifference / (30 * 24 * 60))
      return `${months} bulan`
    }
  }

  return <div>{calculateTimeDifference()}</div>
}

export default HandleTimeUploaded
