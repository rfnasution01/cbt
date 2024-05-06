import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { RankingSiswa } from '@/libs/types/cbt-type'

ChartJS.register(ArcElement, Tooltip, Legend)

export function StatistikSekolahPieChart({
  jsonData,
}: {
  jsonData: RankingSiswa[]
}) {
  // Membuat objek untuk menyimpan jumlah siswa dari setiap sekolah
  const sekolahData = {}

  // Mengelompokkan jumlah siswa berdasarkan nama sekolah
  jsonData?.forEach((item) => {
    const { sekolah, skor } = item
    const jumlah_soal = parseInt(skor) // Mengubah skor ke dalam tipe number
    if (sekolahData[sekolah]) {
      sekolahData[sekolah] += jumlah_soal
    } else {
      sekolahData[sekolah] = jumlah_soal
    }
  })

  // Membuat array untuk labels (nama sekolah) dan data (jumlah siswa)
  const labels = Object.keys(sekolahData)
  const data = Object.values(sekolahData)

  // Mengatur warna secara acak untuk setiap sekolah
  const backgroundColor = labels.map(() => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`
  })

  // Konfigurasi data untuk grafik doughnut
  const doughnutData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColor,
        hoverOffset: 4,
      },
    ],
  }

  return (
    <div className="flex w-6/12 flex-col gap-y-24 rounded-2xl bg-white p-32 phones:w-full">
      <h2>Statistik Jumlah Siswa Per Sekolah</h2>
      <Doughnut data={doughnutData} />
    </div>
  )
}
