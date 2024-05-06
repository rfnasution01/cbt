import { UjianType } from '@/libs/types/cbt-type'
import { Ranking } from './home-ranking'
import { useNavigate } from 'react-router-dom'

export function HomeStatistik({ data }: { data: UjianType[] }) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-y-32">
      <div className="flex flex-col gap-y-32">
        <p className="text-[2rem] font-medium">Statistik Ujian</p>
        <div className="rounded-2xl bg-white p-32">
          <table
            className="w-full table-auto"
            style={{ borderCollapse: 'separate', borderSpacing: '0px 16px' }}
          >
            <thead>
              <tr className="text-left">
                <th className="text-center">No</th>
                <th className="pl-8">Nama Ujian</th>
                <th className="pl-8">Minimal Lulus</th>
                <th className="pl-8">Skor</th>
                <th className="pl-8">Peserta</th>
                <th className="pl-8">Ranking</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => (
                <tr
                  key={idx}
                  className={'hover:cursor-pointer hover:bg-slate-50'}
                >
                  <td className="text-center">{idx + 1}</td>
                  <td className="pl-8 align-middle">{item?.nama_ujian}</td>
                  <td className="pl-8 align-middle">{item?.nilai_lulus}</td>
                  <td className="pl-8 align-middle">{item?.skor}</td>
                  <td className="pl-8 align-middle">
                    <Ranking idUjian={item?.id_ujian} isPeserta />
                  </td>
                  <td className="pl-8 align-middle">
                    <Ranking idUjian={item?.id_ujian} isRanking />
                  </td>
                  <td className="text-center">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`pembahasan?idUjian=${item?.id_ujian}`)
                      }
                      className="rounded-2xl bg-primary px-24 py-4 text-white hover:bg-primary"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
