import { UjianHeader, UjianHome } from '@/features/ujian'
import { useState } from 'react'
import ComingSoon from '../coming-soon'

export default function UjianPage() {
  const [type, setType] = useState<string>('percobaan')

  return (
    <div className="flex flex-col gap-y-32">
      <UjianHeader type={type} setType={setType} />
      {type.includes('percobaan') ? <ComingSoon /> : <UjianHome />}
    </div>
  )
}
