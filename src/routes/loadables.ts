import loadable from '@loadable/component'

// ------------------
// ----- Layouts -----
// ------------------

export const RootLayout = loadable(() => import('@/layouts/root-layout'))
export const CBTLayout = loadable(() => import('@/layouts/cbt-layout'))
export const LoginLayout = loadable(() => import('@/layouts/login-layout'))
export const HomeLayout = loadable(() => import('@/layouts/home-layout'))
export const ResultLayout = loadable(() => import('@/layouts/result-layout'))

// ------------------
// ----- Pages -----
// ------------------

export const NotFoundPage = loadable(() => import('@/pages/not-found'))
export const ComingSoonPage = loadable(() => import('@/pages/coming-soon'))
export const LoginPage = loadable(() => import('@/pages/login'))
export const UpdateProfilePage = loadable(
  () => import('@/pages/update-profile'),
)

export const ProfilePage = loadable(() => import('@/pages/profile'))
export const ChangePasswordPage = loadable(
  () => import('@/pages/change-password'),
)
export const UjianPage = loadable(() => import('@/pages/ujian'))
export const HasilUjianPage = loadable(() => import('@/pages/hasil-ujian'))
