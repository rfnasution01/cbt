export type BiodataType = {
  pribadi: BiodataPribadiType
  sekolah: BiodataSekolahType
  pilihan: {
    pilihan1: string
    pilihan2: string
  }
}

export type BiodataPribadiType = {
  nisn: string
  nama: string
  jk: string
  agama: string
  tanggal_lahir: string
  email: string
  wa: string
}

export type BiodataSekolahType = {
  id: string
  npsn: string
  nama: string
}
