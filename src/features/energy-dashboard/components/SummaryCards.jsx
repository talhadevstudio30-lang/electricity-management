import { formatNumber } from '../utils/energy'

function SummaryCards({ items, totalEnergy, totalCost }) {
  const stats = [
    {
      label: 'Recorded energy',
      symbol: '↗',
      value: <>{formatNumber(totalEnergy, 2)} <small>kWh</small></>,
      note: 'Across all saved estimates',
    },
    {
      label: 'Saved appliances',
      symbol: '⌂',
      value: items.length,
      note: 'In your local history',
    },
    {
      label: 'Estimated cost',
      symbol: '¤',
      value: formatNumber(totalCost),
      note: 'Only estimates with a rate',
    },
    {
      label: 'Average per item',
      symbol: '∿',
      value: <>{formatNumber(items.length ? totalEnergy / items.length : 0, 2)} <small>kWh</small></>,
      note: 'Based on saved estimates',
    },
  ]

  return (
    <section className="max-[900px]:order-first" aria-label="Usage summary">
      <div className="mb-[17px] grid grid-cols-2 gap-[13px] max-sm:gap-[10px]">
        {stats.map((stat) => (
          <article className="min-h-[137px] rounded-[23px] border border-white/80 bg-white/70 p-[19px] shadow-[0_24px_80px_rgba(39,65,107,0.09)] backdrop-blur-[22px] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_20px_55px_rgba(39,65,107,0.13)] max-sm:min-h-[124px] max-sm:rounded-[19px] max-sm:p-[15px]" key={stat.label}>
            <div className="flex items-center justify-between gap-[10px]">
              <span className="text-[0.76rem] font-semibold text-[#77859b]">{stat.label}</span>
              <span className="grid size-[31px] place-items-center rounded-[11px] bg-[#edf2ff] text-[0.9rem] text-[#5271d9]" aria-hidden="true">{stat.symbol}</span>
            </div>
            <strong className="mt-[14px] block text-[clamp(1.35rem,3vw,1.9rem)] font-extrabold tracking-[-0.055em] text-[#1d2c43] tabular-nums [&_small]:text-[0.75em]">{stat.value}</strong>
            <span className="mt-[3px] block text-[0.7rem] text-[#98a2b1]">{stat.note}</span>
          </article>
        ))}
      </div>
      <aside className="relative min-h-[124px] overflow-hidden rounded-[22px] bg-gradient-to-r from-[#406dd4] to-[#6c61d9] p-[19px_20px] text-white shadow-[0_15px_34px_rgba(82,101,204,0.19)] after:absolute after:-bottom-[68px] after:-right-[23px] after:size-[180px] after:rounded-full after:border after:border-white/20 after:shadow-[0_0_0_18px_rgba(255,255,255,0.06),0_0_0_38px_rgba(255,255,255,0.04)] after:content-[''] [&>span]:text-[0.72rem] [&>span]:font-bold [&>span]:uppercase [&>span]:tracking-[0.08em] [&>span]:text-white/70">
        <span>Energy tip</span>
        <p className="relative z-10 mb-0 mt-[10px] max-w-[360px] text-base font-semibold leading-[1.5]">Standby power adds up. Unplug chargers and devices you are not using.</p>
      </aside>
    </section>
  )
}

export default SummaryCards
