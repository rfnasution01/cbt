export function hitungSelisihMenit(waktuAwal, waktuAkhir) {
  const selisihMilliseconds = waktuAkhir - waktuAwal
  const selisihMenit = Math.floor(selisihMilliseconds / (1000 * 60))
  return selisihMenit
}
