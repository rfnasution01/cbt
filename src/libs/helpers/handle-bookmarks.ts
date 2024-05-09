export const handleBookmark = (noSoal) => {
  const bookmarksData = JSON.parse(localStorage.getItem('bookmarks') || '[]')
  const index = bookmarksData.indexOf(noSoal.toString())
  if (index !== -1) {
    // Jika nomor soal sudah ada dalam bookmarks, hapus nomor soal dari bookmarks
    bookmarksData.splice(index, 1)
  } else {
    // Jika nomor soal belum ada dalam bookmarks, tambahkan nomor soal ke bookmarks
    bookmarksData.push(noSoal.toString())
  }
  // Simpan kembali data bookmarks yang telah diperbarui ke localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarksData))
}
