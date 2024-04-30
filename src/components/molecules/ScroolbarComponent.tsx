import { ReactNode } from 'react'

export default function ScrollbarComponent({
  classes,
  children,
}: {
  classes?: string
  children: ReactNode
}) {
  return (
    <div
      className={`${classes} scrollbar h-full overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50`}
    >
      {children}
    </div>
  )
}
