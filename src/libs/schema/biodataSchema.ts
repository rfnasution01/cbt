import zod from 'zod'

export const biodataSchema = zod.object({
  nisn: zod.string({
    required_error: 'NISN harus di isi',
    invalid_type_error: 'Format NISN tidak valid',
  }),
  email: zod
    .string()
    .nonempty({ message: 'Email harus di isi' })
    .email({ message: 'Format email tidak valid' })
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: 'Format email tidak valid',
    }),
  nama: zod.string({
    required_error: 'Nama harus di isi',
    invalid_type_error: 'Format nama tidak valid',
  }),
  jk: zod.string({
    required_error: 'Jenis Kelamin harus di isi',
    invalid_type_error: 'Format jenis kelamin tidak valid',
  }),
  agama: zod.string({
    required_error: 'Agama harus di isi',
    invalid_type_error: 'Format agama tidak valid',
  }),
  tanggal_lahir: zod.string({
    required_error: 'Tanggal lahir harus di isi',
    invalid_type_error: 'Format tanggal lahir tidak valid',
  }),
  wa: zod.string({
    required_error: 'WA harus di isi',
    invalid_type_error: 'Format wa tidak valid',
  }),
})
