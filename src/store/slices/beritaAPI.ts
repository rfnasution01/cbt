import {
  BeritaDetailParams,
  BeritaDetailType,
  BeritaParams,
  BeritaType,
  ListBeritaType,
} from '@/libs/types/berita-type'
import { Res, api } from '../api'

export const beritaEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getBerita: builder.query<Res<BeritaType[]>, BeritaParams>({
      query: ({ page_size, page_number, search }) => ({
        url: 'berita',
        params: {
          page_size,
          page_number,
          ...(search !== null && { search }),
        },
      }),
    }),
    getBeritaKategori: builder.query<Res<BeritaType[]>, BeritaParams>({
      query: ({ page_size, page_number, search, seo_kategori }) => ({
        url: 'berita/kategori',
        params: {
          page_size,
          page_number,
          ...(seo_kategori !== null && { seo_kategori }),
          ...(search !== null && { search }),
        },
      }),
    }),
    getListBeritaKategori: builder.query<Res<ListBeritaType[]>, void>({
      query: () => ({
        url: 'kategori/berita',
      }),
    }),
    getBeritaDetail: builder.query<Res<BeritaDetailType[]>, BeritaDetailParams>(
      {
        query: ({ seo }) => ({
          url: 'berita/detail',
          params: {
            ...(seo !== null && { seo }),
          },
        }),
      },
    ),
  }),
})

export const {
  useGetBeritaQuery,
  useGetBeritaKategoriQuery,
  useGetBeritaDetailQuery,
  useGetListBeritaKategoriQuery,
} = beritaEndpoints
