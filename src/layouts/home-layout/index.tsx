import { Outlet } from 'react-router-dom'
import { AsideNavigationHome } from './aside-navigation'

export default function HomeLayout() {
  return (
    <div className="grid h-full grid-cols-12">
      <div className="col-span-2 bg-white phones:hidden">
        <AsideNavigationHome />
      </div>
      <div className="scrollbar col-span-8 h-full overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 phones:col-span-12">
        <Outlet />
      </div>
      <div className="col-span-2 bg-white phones:hidden">Tes</div>
    </div>
  )
}
