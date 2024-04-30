import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="scrollbar h-screen overflow-x-auto overflow-y-auto">
      <Outlet />
    </div>
  )
}
