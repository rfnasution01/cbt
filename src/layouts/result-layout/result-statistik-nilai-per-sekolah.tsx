import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js'
import { RankingSiswa } from '@/libs/types/cbt-type'

ChartJS.register(Tooltip, Legend)

export function StatistikNilaiPerSekolah({
  jsonData,
}: {
  jsonData: RankingSiswa[]
}) {
  // Membuat objek untuk menyimpan total skor dan jumlah siswa dari setiap sekolah
  const sekolahData = {}

  // Mengelompokkan total skor dan jumlah siswa berdasarkan nama sekolah
  jsonData?.forEach((item) => {
    const { sekolah, skor } = item
    const nilai = parseInt(skor) // Mengubah skor ke dalam tipe number
    if (sekolahData[sekolah]) {
      sekolahData[sekolah].totalSkor += nilai
      sekolahData[sekolah].jumlahSiswa++
    } else {
      sekolahData[sekolah] = { totalSkor: nilai, jumlahSiswa: 1 }
    }
  })

  // Menghitung rata-rata skor per sekolah
  const rataRataSkorPerSekolah = {}
  Object.keys(sekolahData).forEach((sekolah) => {
    const { totalSkor, jumlahSiswa } = sekolahData[sekolah]
    rataRataSkorPerSekolah[sekolah] = totalSkor / jumlahSiswa
  })

  // Membuat array untuk labels (nama sekolah) dan data (rata-rata skor)
  const labels = Object.keys(rataRataSkorPerSekolah)
  const data = Object.values(rataRataSkorPerSekolah)

  // Konfigurasi data untuk grafik bar
  const barData = {
    labels: labels,
    datasets: [
      {
        label: 'Rata-rata Skor',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Rata-rata Skor',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Sekolah',
        },
      },
    },
  }

  return (
    <div className="flex flex-col gap-y-24 rounded-2xl bg-white p-32 phones:w-full">
      <h2>Statistik Nilai Siswa Per Sekolah</h2>
      <Bar data={barData} options={options} />
    </div>
  )
}
