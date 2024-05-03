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

export function StatistikDijawabBarChart({
  jsonData,
}: {
  jsonData: StatistikType[]
}) {
  const labels = jsonData?.map((item) => item.nama_kategori)
  const data = {
    labels,
    datasets: [
      {
        label: 'Dijawab',
        data: jsonData?.map((item) => item.dijawab),
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
    <div className="w-4/12 gap-y-24 phones:w-full">
      <div className="flex flex-col rounded-2xl bg-white p-32">
        <h2>Statistik Soal Dijawab</h2>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}
