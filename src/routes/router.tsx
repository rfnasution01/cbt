import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  CBTLayout,
  ChangePasswordPage,
  HasilUjianPage,
  HomeLayout,
  LoginLayout,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  ResultLayout,
  RootLayout,
  UjianPage,
  UpdateProfilePage,
} from './loadables'
import Cookies from 'js-cookie'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <HomeLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
        children: [
          {
            path: 'profile',
            element: <ProfilePage />,
          },
          { path: 'ganti-password', element: <ChangePasswordPage /> },
          { path: 'ujian', element: <UjianPage /> },
          { path: 'hasil-ujian', element: <HasilUjianPage /> },
        ],
      },
      {
        path: 'cbt',
        element: <CBTLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
      },
      {
        path: 'pembahasan',
        element: <ResultLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
      },
      {
        path: 'update-profile',
        element: <UpdateProfilePage />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (!jwtPayload) {
            return redirect('/login')
          }

          return null
        },
      },
      {
        path: 'login',
        element: <LoginLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')

          if (jwtPayload) {
            return redirect('/')
          }

          return null
        },
        children: [
          {
            path: '',
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
