export const handleSaveAnswer = (item, kodeUjian, noSoal, typeSoal, idSoal) => {
  const smartlearningData = localStorage.getItem('smartlearning')
  let newSmartlearningData

  if (!smartlearningData) {
    newSmartlearningData = {
      idSoal: kodeUjian,
      jawaban: [],
    }
  } else {
    newSmartlearningData = JSON.parse(smartlearningData)
  }

  const existingAnswerIndex = newSmartlearningData.jawaban.findIndex(
    (answer) => answer.no === noSoal,
  )

  if (typeSoal === 'MULTIPLE_ANSWER') {
    if (existingAnswerIndex !== -1) {
      // Jika jawaban untuk nomor soal tersebut sudah ada, cek apakah item sudah dipilih sebelumnya
      const existingItemIndex = newSmartlearningData.jawaban[
        existingAnswerIndex
      ].jawab.indexOf(item.id)
      if (existingItemIndex !== -1) {
        // Jika item sudah ada dalam daftar, hapus item dari daftar
        newSmartlearningData.jawaban[existingAnswerIndex].jawab.splice(
          existingItemIndex,
          1,
        )
      } else {
        // Jika item belum ada dalam daftar, tambahkan item ke daftar
        newSmartlearningData.jawaban[existingAnswerIndex].jawab.push(item.id)
      }
    } else {
      // Jika jawaban untuk nomor soal tersebut belum ada, tambahkan jawaban baru beserta item
      newSmartlearningData.jawaban.push({
        no: noSoal,
        idSoal: idSoal,
        jawab: [item.id],
      })
    }
  } else {
    // Untuk jenis soal selain multiple, lakukan penanganan seperti sebelumnya
    if (existingAnswerIndex !== -1) {
      newSmartlearningData.jawaban[existingAnswerIndex].jawab = item?.id
    } else {
      newSmartlearningData.jawaban.push({
        no: noSoal,
        idSoal: idSoal,
        jawab: item?.id,
      })
    }
  }

  // Simpan kembali data yang telah diperbarui ke localStorage
  localStorage.setItem('smartlearning', JSON.stringify(newSmartlearningData))
}
