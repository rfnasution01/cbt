export type BeritaType = {
  id: string
  judul: string
  kategori: string
  seo_kategori: string
  isi: string
  hits: number
  tanggal: string
  photo: PhotoType
  seo: string
}

type PhotoType = {
  keterangan: string
  gambar: string
}

export type BeritaDetailType = {
  id: string
  judul: string
  kategori: string
  seo_kategori: string
  isi: string
  hits: number
  tanggal: string
  photo: PhotoType[]
  seo: string
}
export type BeritaParams = {
  page_size: number
  page_number: number
  search?: string
  seo_kategori?: string
}

export type BeritaDetailParams = {
  seo: string
}
