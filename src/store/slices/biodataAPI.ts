import { BiodataType } from '@/libs/types/biodata-type'
import { Res, api } from '../api'

export const biodataEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getBiodata: builder.query<Res<BiodataType>, void>({
      query: () => ({
        url: 'biodata',
      }),
    }),
  }),
})

export const { useGetBiodataQuery } = biodataEndpoints
