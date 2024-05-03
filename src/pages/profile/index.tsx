import { ProfileNavigation } from '@/features/profile'
import { ProfileContent } from '@/features/profile/profile-content'
import { useState } from 'react'

export default function ProfilePage() {
  const [type, setType] = useState<string>('pribadi')

  return (
    <div className="flex flex-col gap-y-32">
      <ProfileNavigation type={type} setType={setType} />
      <ProfileContent type={type} />
    </div>
  )
}
