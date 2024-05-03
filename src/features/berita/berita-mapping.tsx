import { MenuTitle } from '@/components/atoms/MenuTitle'
import { CardNews, CardNewsSkeleton } from '@/components/molecules/card'
import { BeritaType } from '@/libs/types/berita-type'
import DataNotFound from '@/pages/data-not-found'

export function BeritaMapping({
  berita,
  isLoading,
}: {
  berita: BeritaType[]
  isLoading?: boolean
}) {
  return (
    <div className="scrollbar flex flex-col gap-y-32 overflow-y-auto">
      <MenuTitle title="News" />
      {isLoading ? (
        <CardNewsSkeleton />
      ) : berita?.length === 0 ? (
        <DataNotFound />
      ) : (
        <CardNews data={berita} />
      )}
    </div>
  )
}
