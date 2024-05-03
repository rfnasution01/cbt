export function InfoProfile({
  disabled,
  nama,
}: {
  disabled: boolean
  nama: string
}) {
  return (
    <div className="flex items-center gap-x-8">
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
    </div>
  )
}
