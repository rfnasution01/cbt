import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { StatistikType } from '@/libs/types/cbt-type'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function StatistikBenarBarChart({
  jsonData,
}: {
  jsonData: StatistikType[]
}) {
  const labels = jsonData?.map((item) => item.nama_kategori)
  const data = {
    labels,
    datasets: [
      {
        label: 'Benar',
        data: jsonData?.map((item) => item.benar),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Jumlah Soal',
        data: jsonData?.map((item) => item.jumlah_soal),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Statistik Soal Dijawab',
      },
    },
  }

  return (
    <div className="scrollbar w-6/12 gap-y-24 overflow-x-auto phones:w-full">
      <div className="scrollbar flex w-full flex-col overflow-x-auto rounded-2xl bg-white p-32">
        <h2>Statistik Soal Benar</h2>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}
