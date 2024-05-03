import { ProfilePribadi } from './profile-content-pribadi'
import { ProfileSekolah } from './profile-content-sekolah'

export function ProfileContent({ type }: { type: string }) {
  return (
    <div className="grid grid-cols-12 gap-32">
      {type?.toLowerCase().includes('pribadi') ? (
        <ProfilePribadi />
      ) : (
        <ProfileSekolah />
      )}
    </div>
  )
}
