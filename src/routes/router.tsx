import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  ChangePasswordPage,
  HomeLayout,
  LoginLayout,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RootLayout,
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
        ],
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
