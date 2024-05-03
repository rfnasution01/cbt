import { convertToSlug } from '@/libs/helpers/format-text'
import HandleTimeUploaded from '@/libs/helpers/handle-time-uploaded'
import { BeritaDetailType } from '@/libs/types/berita-type'
import { useNavigate } from 'react-router-dom'

export function CardDetailNews({ data }: { data: BeritaDetailType[] }) {
  const navigate = useNavigate()

  return (
    <div className="scrollbar flex w-full gap-x-16 overflow-x-auto">
      {data?.slice(0, 5)?.map((item, idx) => (
        <div
          className="flex w-4/12 flex-shrink-0 transform-gpu flex-col gap-y-8 text-[1.6rem] transition-transform duration-300 hover:scale-95 hover:cursor-pointer phones:w-9/12  phones:gap-y-4 phones:text-[2rem]"
          key={idx}
          onClick={() => {
            navigate(
              `/post?type=${item?.seo_kategori}&content=${convertToSlug(item?.seo)}`,
            )
          }}
        >
          {/* --- Image --- */}
          <img
            src={item?.photo?.[0]?.gambar ?? '/img/registrasi-bg.png'}
            alt={item?.photo?.[0]?.keterangan ?? 'logo'}
            className="h-[30rem] w-full object-cover phones:h-[20rem]"
          />
          {/* --- Title --- */}
          <p className="font-roboto text-[3rem]">{item?.judul}</p>
          {/* --- Tag --- */}
          <p>{item?.kategori}</p>
          {/* --- Info --- */}
          <div className="flex flex-row items-center gap-x-16">
            <p>{item?.hits ?? 0} Suka</p>
            <div className="flex items-center gap-x-4">
              &#183; <HandleTimeUploaded uploadTime={item?.tanggal} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
