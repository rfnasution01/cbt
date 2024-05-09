import { useLocation } from 'react-router-dom'

export const usePathname = () => {
  const { pathname } = useLocation()

  const splittedPath = pathname.split('/')
  const firstPathname = splittedPath.at(1)
  const secondPathname = splittedPath.at(2)
  const thirdPathname = splittedPath.at(3)
  const lastPathname = splittedPath.at(-1)

  return {
    pathname,
    splittedPath,
    firstPathname,
    secondPathname,
    thirdPathname,
    lastPathname,
  }
}
