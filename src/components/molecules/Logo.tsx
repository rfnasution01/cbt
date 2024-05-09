import { Link } from 'react-router-dom'

export function LogoTitle({
  teks1,
  teks2,
  isSmall,
}: {
  teks1?: string
  teks2?: string
  isSmall?: boolean
}) {
  return (
    <Link
      to="/"
      className={`flex items-center justify-center text-center font-roboto ${isSmall ? 'text-[2.4rem]' : 'text-[3rem]'} tracking-1.5 hover:cursor-pointer`}
    >
      <h5 className=" border border-transparent pb-8 text-primary">{teks1}</h5>
      <h5 className="border-b-2 border-primary pb-8 text-secondary">{teks2}</h5>
    </Link>
  )
}
