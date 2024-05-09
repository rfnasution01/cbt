import { PembahasanType } from '@/libs/types/cbt-type'

export function ResultPembahasanDetail({
  data,
  noSoal,
}: {
  data: PembahasanType[]
  noSoal: number
}) {
  const pembahasanNow = data?.find(
    (item) => Number(item?.urutan) == noSoal,
  )?.pembahasan

  return (
    <div className="flex flex-col gap-y-24">
      <p className="text-[2rem] font-bold">Pembahasan</p>
      <div dangerouslySetInnerHTML={{ __html: pembahasanNow }} />
    </div>
  )
}
