import { useSearch } from '@/libs/hooks/useSearch'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

interface PaginationProps {
  classes?: string
  totalPage: number
}

export const Pagination = ({ classes = '', totalPage }: PaginationProps) => {
  const { currentPage, onPageChange } = useSearch()

  return (
    <div className={`flex items-center gap-12 font-helvetica ${classes}`}>
      <div className="flex items-center gap-12">
        <button
          className="rounded-md disabled:cursor-not-allowed"
          onClick={() => {
            onPageChange(1)
          }}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
        >
          <ChevronsLeft width={16} height={16} />
        </button>
        <button
          className="rounded-md disabled:cursor-not-allowed"
          onClick={() => {
            onPageChange(currentPage - 1)
          }}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
        >
          <ChevronLeft width={16} height={16} />
        </button>
      </div>
      <div className="flex items-center gap-8">
        <span>{currentPage}</span>
        <span>of</span>
        <span>{totalPage}</span>
      </div>
      <div className="flex items-center gap-12">
        <button
          className="rounded-md disabled:cursor-not-allowed"
          onClick={() => {
            onPageChange(currentPage + 1)
          }}
          disabled={currentPage === totalPage}
          aria-disabled={currentPage === totalPage}
        >
          <ChevronRight width={16} height={16} />
        </button>
        <button
          className="rounded-md disabled:cursor-not-allowed"
          onClick={() => {
            onPageChange(totalPage)
          }}
          disabled={currentPage === totalPage}
          aria-disabled={currentPage === totalPage}
        >
          <ChevronsRight width={16} height={16} />
        </button>
      </div>
    </div>
  )
}
