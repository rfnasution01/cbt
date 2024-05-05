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

export function isTanggalBerlalu(isoStringItem) {
  // Ubah ISO string menjadi objek Date
  const tanggalItem = new Date(isoStringItem)

  // Waktu sekarang
  const sekarang = new Date()

  // Bandingkan tanggal sekarang dengan tanggal dari item
  if (sekarang > tanggalItem) {
    return true // Sudah melewati tanggal
  } else {
    return false // Belum melewati tanggal
  }
}

export function hitungMundur(isoStringItem: string) {
  const sekarang = new Date()
  const tanggalItem = new Date(isoStringItem)

  const selisihWaktu = tanggalItem.getTime() - sekarang.getTime()

  if (selisihWaktu <= 0) {
    return 'Waktu sudah terlewati'
  }

  const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24))
  const jam = Math.floor(
    (selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60))
  const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000)

  return {
    hari,
    jam,
    menit,
    detik,
  }
}
