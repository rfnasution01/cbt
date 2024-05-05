import { useSelector } from 'react-redux'
import { HeaderMobile } from './header-mobile'
import { HeaderNavigation } from './header-navigation'
import { MappingBerita } from './mapping-berita'
import { MappingPengumuman } from './mapping-pengumuman'
import { getSearchSlice } from '@/store/reducer/stateSearch'
import { useSearch } from '@/libs/hooks/useSearch'
import { useEffect, useState } from 'react'
import { BeritaType } from '@/libs/types/berita-type'
import { useGetBeritaQuery } from '@/store/slices/beritaAPI'

export default function BeritaLayout() {
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
    <main className="flex h-screen flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="block phones:hidden">
        <HeaderNavigation />
      </div>
      <div className="hidden phones:block">
        <HeaderMobile />
      </div>
      <div className="scrollbar flex max-h-full flex-1 flex-col gap-y-32 overflow-y-auto p-32">
        <div className="grid grid-cols-12 gap-32">
          <div className="col-span-9 phones:col-span-12">
            <MappingBerita berita={berita} isLoading={isLoading} />
          </div>
          <div className="col-span-3 phones:col-span-12">
            <MappingPengumuman />
          </div>
        </div>
      </div>
    </main>
  )
}
