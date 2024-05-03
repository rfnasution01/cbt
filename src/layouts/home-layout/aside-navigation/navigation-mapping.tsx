import { DataNavigation } from '@/libs/dummy/data-navigation'
import { convertToSlug } from '@/libs/helpers/format-text'
import { usePathname } from '@/libs/hooks/usePathname'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export function NavigationMapping({ disabled }: { disabled: boolean }) {
  const { firstPathname } = usePathname()

  const isActivePage = (item: string) => {
    if (
      firstPathname === convertToSlug(item).toLowerCase() ||
      (firstPathname === undefined && item.toLowerCase() === 'dashboard')
    ) {
      return true
    }
    return false
  }

  return (
    <div className="flex flex-col gap-y-12">
      {DataNavigation.map((item, idx) => (
        <Link
          to={
            disabled
              ? ''
              : convertToSlug(item?.title) === 'dashboard'
                ? '/'
                : `/${convertToSlug(item?.title)}`
          }
          className={clsx(
            'flex items-center gap-x-12 border-l-4 p-12',
            {
              'border-transparent hover:border-primary hover:text-primary':
                !isActivePage(item?.title),
              'border-primary text-primary': isActivePage(item?.title),
            },
            { 'hover:cursor-not-allowed ': disabled },
          )}
          key={idx}
        >
          <span>{item?.icon}</span>
          <h5 className="font-sf-pro text-[2rem]">{item?.title}</h5>
        </Link>
      ))}
    </div>
  )
}
