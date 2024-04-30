import { Link } from 'react-router-dom'

export function LogoTitle() {
  return (
    <Link
      to="/"
      className="flex items-center justify-center text-center font-roboto text-[4rem] tracking-1.5 hover:cursor-pointer"
    >
      <h5 className=" border border-transparent pb-8 text-primary">Soal</h5>
      <h5 className="border-b-2 border-primary pb-8 text-secondary">Pintar</h5>
    </Link>
  )
}
