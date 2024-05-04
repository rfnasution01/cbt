import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export type Meta = {
  page?: number
  limit?: number
  count?: number
  total?: number
}

export type Res<T, M = undefined> = {
  status: boolean
  message: string
  data: T
  related: T
  meta: Meta
  mapped?: M
}

const baseURL = import.meta.env.VITE_BASE_URL

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      const token = Cookies.get('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['ujian', 'hasil', 'soal', 'biodata', 'ranking'],
  // * it's okay to disable eslint here, because the warning is unnecessary. Each endpoint will be injected from an api slice.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_builder) => ({}),
})
