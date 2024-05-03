export type UjianType = {
  id_ujian: string
  nama_ujian: string
  waktu_ujian: number
  tanggal_mulai: string
  tanggal_akhir: string
  skor: string | number
  jumlah_soal: number
  max_skor: string | null
  peringkat: string | null
  total_peserta: string | null
  tag: string | null
  status: number
  dijawab: number
  tidak_dijawab: number
  benar: number
  salah: number
  status_lulus: null | boolean
  nilai: {
    title: string
    skor: number
    true: number
    total: number
  }[]
}

export type SoalUjianParams = {
  id_ujian: string
}

export type SoalUjianType = {
  number: string
  id: string
  question: string
  type: string
  options: SoalUjianOptionsType[]
}

export type SoalUjianOptionsType = {
  id: string
  label: string
  value: string
}

export type SaveUjianParams = {
  id_ujian: string
  jawaban: JawabanType
}

export type JawabanType = {
  [idPertanyaan: string]: string | string[]
}

export type StatistikType = {
  id_kategori: string
  nama_kategori: string
  jumlah_soal: number
  dijawab: number
  tidak_dijawab: number
  benar: number
  salah: number
}

export type PilihanType = {
  id: string
  pilihan: string
  umpan_balik: string
  skor: number
  urutan: number
}

export type PembahasanType = {
  id: string
  urutan: number
  id_kategori: string
  nama_kategori: string
  pertanyaan: string
  pembahasan: string
  type: string
  pilihan: string
  jawaban: string[] | null | string
  status: string | null
}
