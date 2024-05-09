import { IdentitasDataType } from '@/libs/types/identitas-type'
import { Res, api } from '../api'

export const identitasEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getIdentitas: builder.query<Res<IdentitasDataType>, void>({
      query: () => ({
        url: 'api/identitas',
      }),
    }),
  }),
})

export const { useGetIdentitasQuery } = identitasEndpoints
