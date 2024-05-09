import ScrollbarComponent from '@/components/molecules/Scroolbar'
import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <ScrollbarComponent classes="flex items-center justify-center">
      <Outlet />
    </ScrollbarComponent>
  )
}
