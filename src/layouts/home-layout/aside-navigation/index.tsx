import { LogoTitle } from '@/components/molecules/Logo'
import { NavigationMapping } from './navigation-mapping'
import { ArrowRightFromLine } from 'lucide-react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export function AsideNavigationHome({ disabled }: { disabled: boolean }) {
  const navigate = useNavigate()

  return (
    <div className="scrollbar h-full overflow-y-auto p-32">
      <div className="flex h-full flex-col gap-y-32">
        <LogoTitle teks1="CBT" teks2="SmartLearning" isSmall />
        <NavigationMapping disabled={disabled} />
        <button
          type="button"
          disabled={disabled}
          className="flex items-center justify-center gap-x-8 rounded-2xl bg-primary px-24 py-12 text-white hover:bg-primary-shade-700 disabled:hover:cursor-not-allowed disabled:hover:bg-primary"
          onClick={() => {
            Cookies.remove('token')
            navigate('/login')
          }}
        >
          <p>Logout</p>
          <span>
            <ArrowRightFromLine size={16} />
          </span>
        </button>
      </div>
    </div>
  )
}
