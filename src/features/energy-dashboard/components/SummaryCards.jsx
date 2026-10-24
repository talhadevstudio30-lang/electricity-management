import { memo } from 'react'
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
          <article className="min-h-[137px] rounded-[23px] border border-[#e5ebf4] bg-white p-[19px] shadow-[0_8px_24px_rgba(39,65,107,0.06)] transition-transform duration-200 hover:-translate-y-[2px] max-sm:min-h-[124px] max-sm:rounded-[19px] max-sm:p-[15px]" key={stat.label}>
            <div className="flex items-center justify-between gap-[10px]">
              <span className="text-[0.76rem] font-semibold text-[#77859b]">{stat.label}</span>
              <span className="grid size-[31px] place-items-center rounded-[11px] bg-[#edf2ff] text-[0.9rem] text-[#5271d9]" aria-hidden="true">{stat.symbol}</span>
            </div>
            <strong className="mt-[14px] block text-[clamp(1.35rem,3vw,1.9rem)] font-extrabold tracking-[-0.055em] text-[#1d2c43] tabular-nums [&_small]:text-[0.75em]">{stat.value}</strong>
            <span className="mt-[3px] block text-[0.7rem] text-[#98a2b1]">{stat.note}</span>
          </article>
        ))}
      </div>
      <aside className="min-h-[124px] rounded-[22px] bg-gradient-to-r from-[#406dd4] to-[#6c61d9] p-[19px_20px] text-white shadow-[0_12px_28px_rgba(82,101,204,0.16)] [&>span]:text-[0.72rem] [&>span]:font-bold [&>span]:uppercase [&>span]:tracking-[0.08em] [&>span]:text-[#dce5ff]">
        <span>Energy tip</span>
        <p className="mb-0 mt-[10px] max-w-[360px] text-base font-semibold leading-[1.5]">Standby power adds up. Unplug chargers and devices you are not using.</p>
      </aside>
    </section>
  )
}

export default memo(SummaryCards)
