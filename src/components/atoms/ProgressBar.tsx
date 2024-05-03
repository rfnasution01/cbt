export function ProgressBar({
  primaryColor = 'bg-slate-400',
  secondaryColor = 'bg-slate-300',
  percent = 90,
  classes,
}: {
  primaryColor?: string
  secondaryColor?: string
  percent?: number
  classes?: string
}) {
  return (
    <div className={`${classes} rounded-full ${secondaryColor}`}>
      <div
        className={`h-full rounded-full ${primaryColor}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
