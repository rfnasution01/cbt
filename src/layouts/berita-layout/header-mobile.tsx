import { LogoTitle } from '@/components/molecules/Logo'
import { DialogHelpers } from '@/components/molecules/dialog'
import { AlignJustify, Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderNavigationMobile } from './header-navigation-mobile'

export function HeaderMobile() {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-between gap-x-32 p-32 text-[2rem] shadow-md  ">
      <LogoTitle />
      <Search />
      <span
        onClick={() => {
          setIsShow(true)
        }}
      >
        <AlignJustify size={24} />
      </span>
      <DialogHelpers
        title={
          <Link
            to="/"
            className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary"
          >
            CBT<span className="text-primary-shade-200">SmartLearning</span>
          </Link>
        }
        open={isShow}
        setOpen={setIsShow}
        noPadding
        customComponent={<HeaderNavigationMobile setIsShow={setIsShow} />}
      />
    </div>
  )
}
