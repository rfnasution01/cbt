import { HeaderMobile } from './header-mobile'
import { HeaderNavigation } from './header-navigation'
import { PostDetail } from './post-detail'

export default function NewsLayout() {
  return (
    <main className="flex h-screen flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="block phones:hidden">
        <HeaderNavigation />
      </div>
      <div className="hidden phones:block">
        <HeaderMobile />
      </div>
      <div className="scrollbar flex max-h-full flex-1 flex-col gap-y-32 overflow-y-auto px-32 py-32">
        <PostDetail />
      </div>
    </main>
  )
}
