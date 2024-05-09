import { RankingSiswa } from '@/libs/types/cbt-type'

export function hitungRataRataPerSekolah(
  data: RankingSiswa[],
): Map<string, number> {
  const sekolahData = new Map<
    string,
    { totalNilai: number; jumlahSiswa: number }
  >()

  // Mengelompokkan total nilai dan jumlah siswa berdasarkan nama sekolah
  data?.forEach((item) => {
    const { sekolah, skor } = item
    const nilai = parseInt(skor) // Mengubah skor ke dalam tipe number

    if (sekolahData.has(sekolah)) {
      const existingData = sekolahData.get(sekolah)
      sekolahData.set(sekolah, {
        totalNilai: existingData.totalNilai + nilai,
        jumlahSiswa: existingData.jumlahSiswa + 1,
      })
    } else {
      sekolahData.set(sekolah, { totalNilai: nilai, jumlahSiswa: 1 })
    }
  })

  // Menghitung rata-rata nilai per sekolah
  const rataRataPerSekolah = new Map<string, number>()
  sekolahData.forEach((value, key) => {
    const rataRata = value.totalNilai / value.jumlahSiswa
    rataRataPerSekolah.set(key, rataRata)
  })

  return rataRataPerSekolah
}
