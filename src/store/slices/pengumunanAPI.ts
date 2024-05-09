import {
  BeritaDetailParams,
  BeritaDetailType,
  BeritaParams,
  BeritaType,
  ListBeritaType,
} from '@/libs/types/berita-type'
import { Res, api } from '../api'

export const pengumumanEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getPengumuman: builder.query<Res<BeritaType[]>, BeritaParams>({
      query: ({ page_size, page_number, search }) => ({
        url: 'pengumuman',
        params: {
          page_size,
          page_number,
          ...(search !== null && { search }),
        },
      }),
    }),
    getListPengumumanKategori: builder.query<Res<ListBeritaType[]>, void>({
      query: () => ({
        url: 'kategori/pengumuman',
      }),
    }),
    getPengumumanKategori: builder.query<Res<BeritaType[]>, BeritaParams>({
      query: ({ page_size, page_number, search, seo_kategori }) => ({
        url: 'pengumuman/kategori',
        params: {
          page_size,
          page_number,
          ...(seo_kategori !== null && { seo_kategori }),
          ...(search !== null && { search }),
        },
      }),
    }),
    getPengumumanDetail: builder.query<
      Res<BeritaDetailType[]>,
      BeritaDetailParams
    >({
      query: ({ seo }) => ({
        url: 'pengumuman/detail',
        params: {
          ...(seo !== null && { seo }),
        },
      }),
    }),
  }),
})

export const {
  useGetListPengumumanKategoriQuery,
  useGetPengumumanQuery,
  useGetPengumumanKategoriQuery,
  useGetPengumumanDetailQuery,
} = pengumumanEndpoints
