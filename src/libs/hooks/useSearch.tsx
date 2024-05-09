import { useNavigate, useSearchParams } from 'react-router-dom'

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' })
  const navigate = useNavigate()

  const currentPage = parseInt(searchParams.get('page') as string) || 1
  const pageString = searchParams.get('page')

  const id = searchParams.get('id') || undefined

  const clickHandler = (pageNumber: number) => {
    setSearchParams((prev) => {
      const id = prev.get('id') || null

      return {
        page: pageNumber.toString(),
        ...(id !== null ? { id } : {}),
      }
    })
  }

  const pageHandler = (pageString: string) => {
    setSearchParams(() => {
      return {
        page: pageString,
      }
    })
  }

  const clickToNavigate = (pageString: string) => {
    navigate(pageString)
  }

  return {
    searchParams,
    setSearchParams,
    currentPage,
    pageString,
    onPageChange: clickHandler,
    onPageClick: clickToNavigate,
    onPageHandler: pageHandler,
    id,
  }
}
