import { useEffect, useState } from 'react'
import { BeritaMapping } from '@/features/berita/berita-mapping'
import { useSelector } from 'react-redux'
import { getSearchSlice } from '@/store/reducer/stateSearch'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/types/berita-type'
import { useGetBeritaQuery } from '@/store/slices/beritaAPI'
import { PengumumanMapping } from '@/features/berita/pengumuman.-mapping'

export default function BeritaPage() {
  const { find } = useSelector(getSearchSlice)
  const { currentPage } = useSearch()
  const pageSize = 3
  const pageNumber = currentPage ?? 1
  const [berita, setBerita] = useState<BeritaType[]>()

  const {
    data,
    isLoading: beritaLoading,
    isFetching: beritaFething,
  } = useGetBeritaQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: find,
  })

  useEffect(() => {
    if (data) {
      setBerita(data?.data)
    }
  }, [data?.data])

  const isLoading = beritaLoading || beritaFething

  return (
    <div className="flex flex-col gap-y-32">
      <BeritaMapping berita={berita} isLoading={isLoading} />
      <PengumumanMapping />
    </div>
  )
}
