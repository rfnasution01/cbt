import { createBrowserRouter } from 'react-router-dom'
import { CBTLayout, LoginLayout, NotFoundPage, RootLayout } from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <CBTLayout />,
      },
      {
        path: 'login',
        element: <LoginLayout />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
