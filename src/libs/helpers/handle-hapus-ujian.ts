export function handleHapusUjian(nomor) {
  // Mendapatkan data dari localStorage
  const dataLocalStorage = JSON.parse(localStorage.getItem('smartlearning'))

  // Mencari objek yang memiliki nomor 2
  const newData = dataLocalStorage.filter((obj) => obj.no !== nomor)
  //   console.log(newData);

  // Menyimpan data yang telah diubah kembali ke localStorage
  localStorage.setItem('smartlearning', JSON.stringify(newData))
}
