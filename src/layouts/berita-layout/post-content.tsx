import { MenuTitle } from '@/components/atoms/MenuTitle'
import { CardDetailNews, CardNewsSkeleton } from '@/components/molecules/card'
import { convertSlugToText } from '@/libs/helpers/format-text'
import { BeritaDetailType } from '@/libs/types/berita-type'
import DataNotFound from '@/pages/data-not-found'

export function PostContent({
  data,
  isLoading,
}: {
  data: BeritaDetailType[]
  isLoading?: boolean
}) {
  const searchParams = new URLSearchParams(location.search)
  const contentParams = searchParams.get('content')

  return (
    <div className="col-span-9 flex flex-col gap-y-32 phones:col-span-12">
      <MenuTitle title={convertSlugToText(contentParams)} />
      {isLoading ? (
        <CardNewsSkeleton />
      ) : data?.length === 0 ? (
        <DataNotFound />
      ) : (
        <CardDetailNews data={data} />
      )}
    </div>
  )
}
