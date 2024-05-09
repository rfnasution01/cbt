import { Link } from 'react-router-dom'

export function InfoProfile({
  disabled,
  nama,
}: {
  disabled: boolean
  nama: string
}) {
  return (
    <Link
      to={'/profile'}
      className="flex items-center gap-x-8 hover:cursor-pointer"
    >
      {disabled ? (
        <div className="h-[7rem] w-[7rem] animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
      ) : (
        <img src="/img/logo.png" alt="Logo" className="h-[7rem]" />
      )}

      {disabled ? (
        <div className="h-[3rem] w-6/12 animate-pulse rounded-full bg-slate-200 font-roboto text-[3rem] duration-100" />
      ) : (
        <p className="font-roboto text-[2.4rem]">{nama ?? 'John'}</p>
      )}
    </Link>
  )
}
