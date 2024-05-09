import { InfoProfile } from './info-profile'
import { InfoProgress } from './info-progress'
import { InfoTask } from './info-task'

export function AsideInfoHome({
  disabled,
  nama,
}: {
  disabled: boolean
  nama: string
}) {
  return (
    <div className="scrollbar h-full overflow-y-auto p-32">
      <div className="scrollbar flex h-full flex-col gap-y-32 overflow-y-auto">
        {/* --- Header --- */}
        <InfoProfile disabled={disabled} nama={nama} />
        <InfoProgress />
        <InfoTask />
      </div>
    </div>
  )
}
