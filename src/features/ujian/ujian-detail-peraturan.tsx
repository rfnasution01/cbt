export function UjianDetailPeraturan() {
  return (
    <div className="flex flex-col gap-y-32 rounded-2xl bg-white p-32 shadow hover:cursor-pointer hover:shadow-md">
      <p className="font-roboto text-[2.4rem]">Peraturan Ujian</p>
      <ol className="ml-16 flex list-decimal flex-col gap-y-12">
        {[
          'Browser yang bisa digunakan hanya Google Chrome / Mozilla Firefox versi terbaru.',
          'Pastikan koneksi internet stabil.',
          'Jangan membuka tab lain saat mengerjakan tryout.',
          'Jangan menekan tombol Selesai saat mengerjakan soal, kecuali saat anda telah selesai mengerjakan seluruh soal.',
          'Perhatikan sisa waktu ujian, sistem akan mengumpulkan jawaban saat waktu sudah selesai.',
          'Waktu ujian akan dimulai saat tombol "Mulai Tryout" di klik.',
          'Jangan menutup/keluar dari halaman pengerjaan apabila Anda sudah menekan tombol "Mulai Tryout", karena waktu akan terus berjalan dan Anda tidak dapat lagi mengerjakannya apabila waktu sudah habis.',
          'Kerjakan dengan jujur dan serius.',
        ].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
    </div>
  )
}
