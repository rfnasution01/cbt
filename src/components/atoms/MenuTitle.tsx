export function MenuTitle({ title }: { title: string }) {
  return (
    <div className="flex font-roboto text-[2.4rem]">
      <p className="border-l-8 border-primary px-16">{title}</p>
    </div>
  )
}
