import { convertToSlug } from '@/libs/helpers/format-text'
import TimeSinceUploaded from '@/libs/helpers/handle-time-uploaded'
import { BeritaType } from '@/libs/types/berita-type'
import { useNavigate } from 'react-router-dom'

export function CardNews2({ data }: { data: BeritaType[] }) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-y-12">
      {data?.slice(0, 5).map((item, idx) => (
        <div
          className="transform-gpu transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
          key={idx}
          onClick={() => {
            navigate(
              `/berita?type=${item?.seo_kategori}&content=${convertToSlug(item.seo)}`,
            )
          }}
        >
          <div className="grid grid-cols-12 items-center gap-x-32">
            <div className="col-span-8">
              <div className="flex flex-col gap-y-4 text-[1.6rem] phones:text-[2rem]">
                {/* --- Title --- */}
                <p className="font-roboto text-[2.6rem]">{item?.judul}</p>
                {/* --- Tag --- */}
                <p>{item?.kategori}</p>
                {/* --- Info --- */}
                <div className="flex flex-row items-center gap-x-16">
                  <p>{item?.hits ?? 0} Suka</p>
                  <div className="flex items-center gap-x-4">
                    &#183; <TimeSinceUploaded uploadTime={item?.tanggal} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <img
                src={item?.photo?.gambar ?? '/img/bg-login.jpg'}
                alt={item?.photo?.keterangan ?? 'logo'}
                className="h-[8rem] w-full rounded-2xl phones:h-[12rem]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
