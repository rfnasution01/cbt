import { MenuTitle } from '@/components/atoms/MenuTitle'
import { CardDetailNews2, CardNews2Skeleton } from '@/components/molecules/card'
import { BeritaDetailType } from '@/libs/types/berita-type'
import DataNotFound from '@/pages/data-not-found'

export function PostRelated({
  data,
  isLoading,
}: {
  data: BeritaDetailType[]
  isLoading?: boolean
}) {
  return (
    <div className="col-span-3 flex flex-col gap-y-32 phones:col-span-12">
      <MenuTitle title="Related News" />
      {isLoading ? (
        <CardNews2Skeleton />
      ) : data?.length === 0 ? (
        <DataNotFound />
      ) : (
        <CardDetailNews2 data={data} />
      )}
    </div>
  )
}
