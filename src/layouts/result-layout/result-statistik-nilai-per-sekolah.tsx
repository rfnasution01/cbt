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

    // Jika sekolah belum ada dalam sekolahData, inisialisasi data baru
    if (!sekolahData[sekolah]) {
      sekolahData[sekolah] = {
        totalSkor: 0,
        jumlahSiswa: 0,
      }
    }

    // Tambahkan skor siswa ke total skor sekolah, jika skor bukan NaN
    if (!isNaN(parseInt(skor))) {
      sekolahData[sekolah].totalSkor += parseInt(skor)
    }

    // Tambahkan jumlah siswa sekolah
    sekolahData[sekolah].jumlahSiswa++
  })

  // Membuat array untuk labels (nama sekolah) dan data (rata-rata skor)
  const labels = Object.keys(sekolahData)
  const data = labels.map((sekolah) => {
    const { totalSkor, jumlahSiswa } = sekolahData[sekolah]
    // Hitung rata-rata skor, jika jumlah siswa bukan 0, jika tidak berikan nilai 0
    return jumlahSiswa !== 0 ? totalSkor / jumlahSiswa : 0
  })

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
      <h2>Statistik Rata-Rata Nilai Siswa Per Sekolah</h2>
      <Bar data={barData} options={options} />
    </div>
  )
}
