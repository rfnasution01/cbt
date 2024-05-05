export function hitungHasilUjian(obj1, obj2) {
  let kesamaan = 0
  let perbedaan = 0

  // Memeriksa setiap kunci dalam objek pertama
  for (const key in obj1) {
    // Memeriksa apakah kunci ini ada di objek kedua
    if (Object.hasOwnProperty.call(obj2, key)) {
      // Memeriksa apakah nilainya sama
      if (obj1[key] === obj2[key]) {
        kesamaan++
      } else {
        perbedaan++
      }
    } else {
      perbedaan++
    }
  }

  // Memeriksa setiap kunci dalam objek kedua
  for (const key in obj2) {
    // Memeriksa apakah kunci ini ada di objek pertama
    if (!Object.hasOwnProperty.call(obj1, key)) {
      perbedaan++
    }
  }

  return { kesamaan: kesamaan, perbedaan: perbedaan }
}
