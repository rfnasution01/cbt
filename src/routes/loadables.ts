import loadable from '@loadable/component'

// ------------------
// ----- Layouts -----
// ------------------

export const RootLayout = loadable(() => import('@/layouts/root-layout'))
export const CBTLayout = loadable(() => import('@/layouts/cbt-layout'))
export const LoginLayout = loadable(() => import('@/layouts/login-layout'))

// ------------------
// ----- Pages -----
// ------------------

export const NotFoundPage = loadable(() => import('@/pages/not-found'))
export const ComingSoonPage = loadable(() => import('@/pages/coming-soon'))
