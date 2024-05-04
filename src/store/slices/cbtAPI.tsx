import {
  PembahasanType,
  SaveUjianParams,
  SoalUjianParams,
  SoalUjianType,
  StatistikType,
  UjianType,
} from '@/libs/types/cbt-type'
import { Res, api } from '../api'

export const cbtEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getUjian: builder.query<Res<UjianType[]>, void>({
      query: () => ({
        url: 'ujian',
      }),
      providesTags: ['ujian'],
    }),
    getSoalUjian: builder.query<Res<SoalUjianType[]>, SoalUjianParams>({
      query: ({ id_ujian }) => ({
        url: 'ujian/soal',
        params: {
          id_ujian,
        },
      }),
      providesTags: ['soal'],
    }),
    createSaveJawaban: builder.mutation<void, { data: SaveUjianParams }>({
      query: ({ data }) => ({
        url: `jawaban`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['ujian', 'soal', 'hasil'],
    }),
    getResetUjian: builder.query<void, SoalUjianParams>({
      query: ({ id_ujian }) => ({
        url: 'ujian/reset',
        params: {
          id_ujian,
        },
      }),
    }),
    getStatistikUjian: builder.query<Res<StatistikType[]>, SoalUjianParams>({
      query: ({ id_ujian }) => ({
        url: 'ujian/statistik',
        params: {
          id_ujian,
        },
      }),
      providesTags: ['hasil'],
    }),
    getPembahasanUjian: builder.query<Res<PembahasanType[]>, SoalUjianParams>({
      query: ({ id_ujian }) => ({
        url: 'ujian/pembahasan',
        params: {
          id_ujian,
        },
      }),
      providesTags: ['hasil'],
    }),
  }),
})

export const {
  useGetUjianQuery,
  useGetSoalUjianQuery,
  useGetResetUjianQuery,
  useCreateSaveJawabanMutation,
  useGetPembahasanUjianQuery,
  useGetStatistikUjianQuery,
} = cbtEndpoints
