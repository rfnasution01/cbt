import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  BeritaLayout,
  CBTLayout,
  ChangePasswordPage,
  HasilUjianPage,
  HomeLayout,
  HomePage,
  LoginLayout,
  LoginPage,
  NewsLayout,
  NotFoundPage,
  PercobaanLayout,
  PostLayout,
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
          const isUpdate = localStorage.getItem('isUpdate')

          if (!jwtPayload) {
            return redirect('/login')
          } else if (jwtPayload && isUpdate === 'yes') {
            return redirect('/update-profile')
          }

          return null
        },
        children: [
          {
            path: '',
            element: <HomePage />,
          },
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
          const isUpdate = localStorage.getItem('isUpdate')

          if (!jwtPayload) {
            return redirect('/login')
          } else if (jwtPayload && isUpdate === 'yes') {
            return redirect('/update-profile')
          }

          return null
        },
      },
      {
        path: 'percobaan',
        element: <PercobaanLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')
          const isUpdate = localStorage.getItem('isUpdate')

          if (!jwtPayload) {
            return redirect('/login')
          } else if (jwtPayload && isUpdate === 'yes') {
            return redirect('/update-profile')
          }

          return null
        },
      },
      {
        path: 'berita',
        element: <BeritaLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')
          const isUpdate = localStorage.getItem('isUpdate')

          if (!jwtPayload) {
            return redirect('/login')
          } else if (jwtPayload && isUpdate === 'yes') {
            return redirect('/update-profile')
          }

          return null
        },
      },
      {
        path: 'news',
        element: <NewsLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')
          const isUpdate = localStorage.getItem('isUpdate')

          if (!jwtPayload) {
            return redirect('/login')
          } else if (jwtPayload && isUpdate === 'yes') {
            return redirect('/update-profile')
          }

          return null
        },
      },
      {
        path: 'post',
        element: <PostLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')
          const isUpdate = localStorage.getItem('isUpdate')

          if (!jwtPayload) {
            return redirect('/login')
          } else if (jwtPayload && isUpdate === 'yes') {
            return redirect('/update-profile')
          }

          return null
        },
      },
      {
        path: 'pembahasan',
        element: <ResultLayout />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')
          const isUpdate = localStorage.getItem('isUpdate')

          if (!jwtPayload) {
            return redirect('/login')
          } else if (jwtPayload && isUpdate === 'yes') {
            return redirect('/update-profile')
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
