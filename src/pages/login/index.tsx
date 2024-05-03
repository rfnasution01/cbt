import { LogoTitle } from '@/components/molecules/Logo'
import LoginForm from '@/features/login'

export default function LoginPage() {
  return (
    <div className="scrollbar flex h-4/6 max-h-[80%] w-3/12 flex-col justify-center overflow-y-auto rounded-2xl bg-white p-32 shadow hover:shadow-md phones:h-4/6 phones:max-h-screen phones:w-10/12">
      <div className="flex flex-col gap-y-48">
        {/* --- Logo --- */}
        <LogoTitle teks1="CBT" teks2="SmartLearning" />
        {/* --- Form --- */}
        <LoginForm />
      </div>
    </div>
  )
}
