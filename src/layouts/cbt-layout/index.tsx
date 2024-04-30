import ScrollbarComponent from '@/components/molecules/Scroolbar'
import { CBTHeader } from './cbt-header'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect, useState } from 'react'
import { BiodataType } from '@/libs/types/biodata-type'

export default function CBTLayout() {
  const token = null
  const { data: dataBiodata } = useGetBiodataQuery(undefined, { skip: !token })
  const [biodata, setBiodata] = useState<BiodataType>()

  useEffect(() => {
    if (dataBiodata?.data) {
      setBiodata(dataBiodata?.data)
    }
  }, [dataBiodata?.data])

  console.log(biodata)

  return (
    <ScrollbarComponent classes="flex flex-col gap-y-32">
      <CBTHeader />
      <div className="flex-1 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum
        sint repudiandae modi ipsam, doloribus eveniet neque voluptatem ut
        obcaecati similique ex aperiam ad officiis, est, porro iusto reiciendis
        nostrum.
      </div>
    </ScrollbarComponent>
  )
}
