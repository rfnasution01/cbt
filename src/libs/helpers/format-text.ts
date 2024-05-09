/* eslint-disable no-useless-escape */
// input: "example word" => output: "Example Word"
export const capitalizeFirstLetterFromLowercase = (
  string = '',
  separator = ' ',
) => {
  if (!string) {
    return '-'
  }

  return string
    .split(separator) // " " for "EXAMPLE WORD", "_" for "EXAMPLE_WORD", and so on...
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ')
}

export function convertToSlug(text = '') {
  return text
    ?.toLowerCase()
    ?.replace(/\s+/g, '-') // Ganti spasi dengan tanda strip
    ?.replace(/[^\w\-]+/g, '') // Hapus karakter non-word dan non-stripped
    ?.replace(/\-\-+/g, '-') // Ganti dua strip atau lebih dengan satu strip
    ?.replace(/^-+/, '') // Hapus strip dari awal teks
    ?.replace(/-+$/, '') // Hapus strip dari akhir teks
}

export function convertSlugToText(slug = '') {
  // Ubah strip menjadi spasi dan ubah teks menjadi huruf kapital setiap kata
  const text = slug
    ?.replace(/-/g, ' ')
    ?.replace(/\b\w/g, (char) => char.toUpperCase())

  return text
}
