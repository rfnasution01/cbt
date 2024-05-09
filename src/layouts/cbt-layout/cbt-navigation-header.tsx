import clsx from 'clsx'
import {
  ChevronDown,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

export function CBTNavigationHeader({
  setIsShow,
  isShow,
  isShowNav,
  setIsShowNav,
}: {
  setIsShow: Dispatch<SetStateAction<boolean>>
  isShow: boolean
  setIsShowNav: Dispatch<SetStateAction<boolean>>
  isShowNav: boolean
}) {
  return (
    <div className="flex flex-col">
      <div
        className={clsx(
          'flex items-center bg-primary px-32 py-24 text-[2rem] text-white hover:cursor-pointer',
          { 'justify-between': isShow, 'justify-center': !isShow },
        )}
      >
        {isShow && <p className="uppercase">Jawaban</p>}
        <span
          onClick={() => {
            setIsShow(!isShow)
          }}
          className="block phones:hidden"
        >
          {isShow ? <ChevronsRight /> : <ChevronsLeft />}
        </span>
        <span
          className="hidden phones:block"
          onClick={() => {
            setIsShowNav(!isShowNav)
          }}
        >
          {isShowNav ? <ChevronDown /> : <ChevronUp />}
        </span>
      </div>
    </div>
  )
}
