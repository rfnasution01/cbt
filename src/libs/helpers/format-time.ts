export function hitungSelisihMenit(waktuAwal, waktuAkhir) {
  const selisihMilliseconds = waktuAkhir - waktuAwal
  const selisihMenit = Math.floor(selisihMilliseconds / (1000 * 60))
  return selisihMenit
}

export function isSudahDimulai(tanggalMulai) {
  const sekarang = new Date()
  const tglMulai = new Date(tanggalMulai)

  // Jika tanggal hari ini lebih besar atau sama dengan tanggal mulai
  return sekarang >= tglMulai
}

export function isSudahBerakhir(tanggalAkhir) {
  const sekarang = new Date()
  const tglAkhir = new Date(tanggalAkhir)

  // Jika tanggal hari ini lebih besar dari tanggal akhir
  return sekarang > tglAkhir
}
