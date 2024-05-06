import {
  ActivateAccountType,
  ChangePasswordType,
  CheckNISNType,
  LoginType,
  ResponseLoginType,
} from '@/libs/types'
import { Res, api } from '../api'

export const LoginEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    createLogin: builder.mutation<Res<ResponseLoginType>, { data: LoginType }>({
      query: ({ data }) => ({
        url: `api/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['biodata', 'ujian'],
    }),
    createNewPassword: builder.mutation<void, { data: ChangePasswordType }>({
      query: ({ data }) => ({
        url: `api/change_password`,
        method: 'POST',
        body: data,
      }),
    }),
    getActivate: builder.query<void, ActivateAccountType>({
      query: ({ token, nisn }) => ({
        url: 'api/verifikasi_email',
        params: {
          token,
          nisn,
        },
      }),
    }),
    getNISN: builder.query<Res<CheckNISNType>, { nisn: string }>({
      query: ({ nisn }) => ({
        url: 'api/nisn',
        params: {
          nisn,
        },
      }),
    }),
  }),
})

export const {
  useCreateLoginMutation,
  useCreateNewPasswordMutation,
  useGetActivateQuery,
  useGetNISNQuery,
} = LoginEndpoints
