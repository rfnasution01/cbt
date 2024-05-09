import { ReactNode } from 'react'

export function HeaderWithLogo({
  title,
  logo,
  addFunc,
  icon,
  classes,
  logoClasses,
  iconPosition = 'before',
}: {
  title?: string
  logo?: string
  addFunc?: ReactNode
  icon?: JSX.Element
  classes?: string
  logoClasses?: string
  iconPosition?: 'before' | 'after'
}) {
  return (
    <div
      className={`${classes} flex items-center justify-center gap-x-12 font-roboto`}
    >
      {logo && (
        <img src={logo} alt="logo" className={`${logoClasses} w-[6rem]`} />
      )}
      {icon && iconPosition === 'before' && icon}
      {title && <h6 className="uppercase tracking-1.5">{title}</h6>}
      {icon && iconPosition === 'after' && icon}

      {addFunc && addFunc}
    </div>
  )
}
