import { LogoTitle } from '@/components/molecules/Logo'
import { convertSlugToText, convertToSlug } from '@/libs/helpers/format-text'
import clsx from 'clsx'
import Cookies from 'js-cookie'
import { Grid, Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export function HeaderNavigation() {
  const token = Cookies.get('token')
  const searchParams = new URLSearchParams(location.search)
  const typeParams = searchParams.get('type')
  const navigate = useNavigate()

  return (
    <div className="flex w-full items-center justify-between gap-x-80 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 p-32 text-[2rem] text-black">
      <div className="flex items-center gap-x-32">
        <LogoTitle teks1="Smart" teks2="Learning" />
        {['Berita Utama', 'Pengumuman'].map((item, idx) => (
          <Link
            to={`/news?type=${convertToSlug(item)}`}
            className={clsx(
              'flex items-center gap-x-8 rounded-full px-24 py-8 hover:cursor-pointer',
              {
                'text-primary': item === convertSlugToText(typeParams),
              },
            )}
            key={idx}
          >
            {item?.includes('Smart Learning') && <Grid size={12} />}
            <span className="text-nowrap">{item}</span>
          </Link>
        ))}
      </div>

      {/* --- Search --- */}
      <Search />

      {token ? (
        <div
          className="rounded-lg border border-transparent bg-primary px-24 py-12 text-center text-[2rem] text-white hover:cursor-pointer hover:border-primary hover:bg-transparent hover:text-primary"
          onClick={() => {
            Cookies.remove('token')
            navigate('/login')
          }}
        >
          Logout
        </div>
      ) : (
        <div className="flex items-center gap-x-32">
          {['Login', 'Registrasi'].map((item, idx) => (
            <Link
              to={`/${item?.toLowerCase()}`}
              className={clsx(
                'flex-1 rounded-lg border px-24 py-12 text-center text-[2rem]',
                {
                  'border-transparent bg-primary text-white hover:border-primary hover:bg-transparent hover:text-primary':
                    idx % 2 === 0,
                },
                {
                  'border-primary text-primary hover:border-transparent hover:bg-primary hover:text-white':
                    idx % 2 !== 0,
                },
              )}
              key={idx}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
