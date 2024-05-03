import { UjianType } from '@/libs/types/cbt-type'
import dayjs from 'dayjs'
import { Calendar, Scroll, Timer, TimerReset } from 'lucide-react'

export function UjianDetailInformation({ ujianNow }: { ujianNow: UjianType }) {
  return (
    <div className="flex flex-col gap-y-32 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md">
      <p className="font-roboto text-[2.4rem]">Informasi Ujian</p>
      <div className="flex flex-col gap-y-12">
        <p className="text-[2rem] font-medium">{ujianNow?.nama_ujian}</p>
        <div className="flex items-center gap-x-4">
          <Calendar size={16} />
          <p>
            {dayjs(ujianNow?.tanggal_mulai).locale('id').format('DD MMMM YYYY')}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <Timer size={16} />
          <p>
            {dayjs(ujianNow?.tanggal_mulai).locale('id').format('hh:mm A')} -{' '}
            {dayjs(ujianNow?.tanggal_akhir).locale('id').format('hh:mm A')}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <Scroll size={16} />
          <p>{ujianNow?.jumlah_soal} soal</p>
        </div>
        <div className="flex items-center gap-x-4">
          <TimerReset size={16} />
          <p>{ujianNow?.waktu_ujian} menit</p>
        </div>
      </div>
    </div>
  )
}
