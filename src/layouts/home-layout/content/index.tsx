import { Outlet } from 'react-router-dom'
import { ContentHeader } from './content-header'

export function ContentHome() {
  return (
    <section className="scrollbar col-span-8 flex h-screen flex-col gap-y-24 overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 phones:col-span-12">
      <ContentHeader />
      <div className="scrollbar h-full overflow-y-auto px-48 pb-48 pt-24">
        <Outlet />
      </div>
    </section>
  )
}
