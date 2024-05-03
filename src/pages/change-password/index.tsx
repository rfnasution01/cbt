import ChangePasswordForm from '@/features/change-password'

export default function ChangePasswordPage() {
  return (
    <div className="flex flex-col gap-y-32">
      <div className="flex items-center justify-between">
        <h1 className="text-[3rem] font-bold">Ganti Password</h1>
      </div>
      <ChangePasswordForm />
    </div>
  )
}
