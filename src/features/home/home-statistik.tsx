import { StatistikHasil } from '@/layouts/result-layout/result-statistik-hasil'
import { UjianType } from '@/libs/types/cbt-type'

export function HomeStatistik({ data }: { data: UjianType[] }) {
  return (
    <div className="flex flex-col gap-y-32">
      {data?.map((item, idx) => (
        <div className="flex flex-col gap-y-32" key={idx}>
          <p className="text-[2rem] font-medium">{item?.nama_ujian}</p>
          <StatistikHasil
            item={data?.find((list) => list?.id_ujian === item?.id_ujian)}
          />
        </div>
      ))}
    </div>
  )
}
