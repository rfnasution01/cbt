import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <main className="scrollbar h-screen overflow-x-auto overflow-y-auto">
      <Outlet />
    </main>
  )
}
