import dayjs from 'dayjs'
import { UjianType } from '../types/cbt-type'

// Ambil waktu sekarang
const now = dayjs()

// Tambahkan satu jam ke waktu sekarang untuk mendapatkan waktu berakhir
const endTime = now.add(1, 'hour')

export const DataPercobaan: UjianType[] = [
  {
    id_ujian: 'ujian-test',
    nama_ujian: 'Simulasi Ujian',
    waktu_ujian: 5,
    tanggal_mulai: now.format('YYYY-MM-DD HH:mm:ss'),
    tanggal_akhir: endTime.format('YYYY-MM-DD HH:mm:ss'),
    skor: 0,
    jumlah_soal: 5,
    max_skor: '100',
    peringkat: 'Top 10',
    total_peserta: '100',
    tag: 'Matematika',
    status: 0,
    dijawab: 45,
    tidak_dijawab: 5,
    benar: 40,
    salah: 5,
    status_lulus: false,
    nilai: null,
  },
]
