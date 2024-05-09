import { BiodataType, PostBiodataParams } from '@/libs/types/biodata-type'
import { Res, api } from '../api'
import { ResponseLoginType } from '@/libs/types'

export const biodataEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getBiodata: builder.query<Res<BiodataType>, void>({
      query: () => ({
        url: 'biodata',
      }),
      providesTags: ['biodata'],
    }),
    createBiodata: builder.mutation<
      Res<ResponseLoginType>,
      { data: PostBiodataParams }
    >({
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
