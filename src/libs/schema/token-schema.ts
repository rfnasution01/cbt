import zod from 'zod'

export const tokenSchema = zod.object({
  token: zod.string({
    required_error: 'token harus di isi',
    invalid_type_error: 'Format token tidak valid',
  }),
})
