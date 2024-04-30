export default function ComingSoon() {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-y-32">
        <img src="/img/cosmos.png" alt="cosmos" className="w-[24rem]" />
        <h1
          className="text-center font-roboto text-[8rem] font-bold uppercase tracking-1.5"
          style={{
            background:
              '-webkit-linear-gradient(180deg, #FF0000, #0000FF, #00FF00)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            animation: 'glow 4s linear infinite',
          }}
        >
          Coming Soon
        </h1>
        <h5 className="font-nunito text-[3rem] font-light uppercase tracking-1.5 text-slate-500">
          We Will Be Back
        </h5>
      </div>
    </div>
  )
}
