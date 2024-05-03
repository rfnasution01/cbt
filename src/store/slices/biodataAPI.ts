import { BiodataType, PostBiodataParams } from '@/libs/types/biodata-type'
import { Res, api } from '../api'

export const biodataEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getBiodata: builder.query<Res<BiodataType>, void>({
      query: () => ({
        url: 'biodata',
      }),
      providesTags: ['biodata'],
    }),
    createBiodata: builder.mutation<void, { data: PostBiodataParams }>({
      query: ({ data }) => ({
        url: `biodata`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['biodata'],
    }),
  }),
})

export const { useGetBiodataQuery, useCreateBiodataMutation } = biodataEndpoints
