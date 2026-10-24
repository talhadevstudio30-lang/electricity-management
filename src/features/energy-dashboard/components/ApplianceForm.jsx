import { useState } from 'react'
import { calculateEnergy, formatNumber, PERIODS } from '../utils/energy'

function ApplianceForm({ onAdd }) {
  const [itemName, setItemName] = useState('')
  const [watts, setWatts] = useState('')
  const [hours, setHours] = useState('')
  const [period, setPeriod] = useState('30')
  const [customPeriod, setCustomPeriod] = useState(false)
  const [customDays, setCustomDays] = useState('')
  const [includeRate, setIncludeRate] = useState(false)
  const [rate, setRate] = useState('')

  const days = customPeriod ? Number(customDays) : Number(period)
  const energy = calculateEnergy(watts, hours, days)
  const estimatedCost = energy * Number(rate)

  function handleSubmit(event) {
    event.preventDefault()
    const validDays = Number.isFinite(days) && days > 0
    const validPowerAndHours = Number(watts) > 0 && Number(hours) > 0 && Number(hours) <= 24
    const validRate = !includeRate || (rate !== '' && Number(rate) >= 0)

    if (!validDays || !validPowerAndHours || !validRate) return

    onAdd({
      name: itemName.trim(),
      watts: Number(watts),
      hours: Number(hours),
      days,
      kwh: energy,
      rate: includeRate ? Number(rate) : null,
      cost: includeRate ? estimatedCost : null,
    })
    setItemName('')
    setWatts('')
    setHours('')
  }

  function toggleCustomPeriod() {
    setCustomPeriod((current) => !current)
    setCustomDays('')
  }

  return (
    <section className="rounded-[26px] border border-white/80 bg-white/70 p-[27px] shadow-[0_24px_80px_rgba(39,65,107,0.09)] backdrop-blur-[22px] max-sm:rounded-[22px] max-sm:p-[20px_17px]" aria-labelledby="calculator-title">
      <div className="mb-[23px] flex items-start justify-between gap-4">
        <div>
          <h2 className="m-0 text-[1.2rem] font-extrabold tracking-[-0.035em] text-[#1b2a40]" id="calculator-title">Add an appliance</h2>
          <p className="mb-0 mt-[5px] text-[0.84rem] text-[#8290a4]">Create an estimate for a device</p>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-[14px] bg-[#edf2ff] text-[#4b6fe1] [&_svg]:size-[19px]" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M13.2 2.8 5.5 13h5.3l-.5 8.2L18.5 11h-5.3l0-8.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <form className="grid gap-[17px]" onSubmit={handleSubmit}>
        <div>
          <label className="mb-[7px] block text-[0.8rem] font-bold text-[#52627a]" htmlFor="device-name">Appliance name</label>
          <input
            autoComplete="off"
            className="min-h-12 w-full rounded-[14px] border border-[#e4eaf2] bg-white/80 px-[14px] text-[0.9rem] text-[#24344c] outline-none transition-all placeholder:text-[#a5afbd] hover:border-[#c8d4ee] hover:bg-white focus:border-[#7694ed] focus:bg-white focus:ring-4 focus:ring-[#5d7de2]/[0.13]"
            id="device-name"
            maxLength={60}
            onChange={(event) => setItemName(event.target.value)}
            placeholder="e.g. Air conditioner"
            required
            value={itemName}
          />
        </div>

        <div className="grid grid-cols-2 gap-[13px]">
          <div>
            <label className="mb-[7px] block text-[0.8rem] font-bold text-[#52627a]" htmlFor="device-watts">Power (watts)</label>
            <input
              className="min-h-12 w-full rounded-[14px] border border-[#e4eaf2] bg-white/80 px-[14px] text-[0.9rem] text-[#24344c] outline-none transition-all placeholder:text-[#a5afbd] hover:border-[#c8d4ee] hover:bg-white focus:border-[#7694ed] focus:bg-white focus:ring-4 focus:ring-[#5d7de2]/[0.13]"
              id="device-watts"
              max="1000000"
              min="0.01"
              onChange={(event) => setWatts(event.target.value)}
              placeholder="e.g. 1200"
              required
              step="any"
              type="number"
              value={watts}
            />
          </div>
          <div>
            <label className="mb-[7px] block text-[0.8rem] font-bold text-[#52627a]" htmlFor="device-hours">Hours per day</label>
            <input
              className="min-h-12 w-full rounded-[14px] border border-[#e4eaf2] bg-white/80 px-[14px] text-[0.9rem] text-[#24344c] outline-none transition-all placeholder:text-[#a5afbd] hover:border-[#c8d4ee] hover:bg-white focus:border-[#7694ed] focus:bg-white focus:ring-4 focus:ring-[#5d7de2]/[0.13]"
              id="device-hours"
              max="24"
              min="0.01"
              onChange={(event) => setHours(event.target.value)}
              placeholder="e.g. 5"
              required
              step="any"
              type="number"
              value={hours}
            />
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-[10px]">
          <div>
            <label className="mb-[7px] block text-[0.8rem] font-bold text-[#52627a]" htmlFor="calculation-period">
              {customPeriod ? 'Custom period (days)' : 'Estimate period'}
            </label>
            {customPeriod ? (
              <input
                autoFocus
                className="min-h-12 w-full rounded-[14px] border border-[#e4eaf2] bg-white/80 px-[14px] text-[0.9rem] text-[#24344c] outline-none transition-all placeholder:text-[#a5afbd] hover:border-[#c8d4ee] hover:bg-white focus:border-[#7694ed] focus:bg-white focus:ring-4 focus:ring-[#5d7de2]/[0.13]"
                id="calculation-period"
                max="36500"
                min="1"
                onChange={(event) => setCustomDays(event.target.value)}
                placeholder="Enter number of days"
                required
                step="1"
                type="number"
                value={customDays}
              />
            ) : (
              <select
                className="min-h-12 w-full cursor-pointer rounded-[14px] border border-[#e4eaf2] bg-white/80 px-[14px] text-[0.9rem] text-[#24344c] outline-none transition-all hover:border-[#c8d4ee] hover:bg-white focus:border-[#7694ed] focus:bg-white focus:ring-4 focus:ring-[#5d7de2]/[0.13]"
                id="calculation-period"
                onChange={(event) => setPeriod(event.target.value)}
                value={period}
              >
                {PERIODS.map((option) => (
                  <option key={option.days} value={option.days}>{option.label}</option>
                ))}
              </select>
            )}
          </div>
          <button className="min-h-[46px] cursor-pointer whitespace-nowrap rounded-[13px] border border-[#dbe4f5] bg-[#f2f6ff]/80 px-[13px] text-[0.79rem] font-bold text-[#5471ca] transition hover:-translate-y-px hover:bg-[#e9efff]" onClick={toggleCustomPeriod} type="button">
            {customPeriod ? 'Use preset' : 'Custom days'}
          </button>
        </div>

        <label className="flex cursor-pointer items-center gap-[11px] rounded-[15px] border border-[#e7ebf2] bg-white/50 p-[13px_14px]" htmlFor="include-rate">
          <input
            checked={includeRate}
            id="include-rate"
            onChange={(event) => setIncludeRate(event.target.checked)}
            className="size-[17px] accent-[#5c75df]"
            type="checkbox"
          />
          <span className="grid gap-0.5">
            <strong className="text-[0.82rem] text-[#40516b]">Include an electricity rate</strong>
            <span className="text-[0.72rem] text-[#8b97a8]">Optional: enter your cost per kWh</span>
          </span>
        </label>

        {includeRate && (
          <div>
            <label className="mb-[7px] block text-[0.8rem] font-bold text-[#52627a]" htmlFor="unit-rate">Rate per kWh</label>
            <input
              className="min-h-12 w-full rounded-[14px] border border-[#e4eaf2] bg-white/80 px-[14px] text-[0.9rem] text-[#24344c] outline-none transition-all placeholder:text-[#a5afbd] hover:border-[#c8d4ee] hover:bg-white focus:border-[#7694ed] focus:bg-white focus:ring-4 focus:ring-[#5d7de2]/[0.13]"
              id="unit-rate"
              min="0"
              onChange={(event) => setRate(event.target.value)}
              placeholder="e.g. 0.18"
              required
              step="any"
              type="number"
              value={rate}
            />
          </div>
        )}

        <div className="flex items-center justify-between gap-4 rounded-[17px] border border-[#aec6ff]/45 bg-gradient-to-r from-[#eef4ff]/90 to-[#effcf8]/80 p-[15px_17px]" aria-live="polite">
          <div className="text-[0.75rem] text-[#79889e]">
            <strong className="mb-[3px] block text-[0.83rem] text-[#40536f]">Live estimate</strong>
            Based on {days > 0 ? `${days} ${days === 1 ? 'day' : 'days'}` : 'your selected period'}
          </div>
          <div className="flex items-end gap-4 text-right">
            <div>
              <span className="block text-[0.65rem] text-[#8a96a8]">Energy</span>
              <strong className="mt-0.5 block text-base tabular-nums text-[#4162c7]">{formatNumber(energy, 3)} kWh</strong>
            </div>
            {includeRate && (
              <div>
                <span className="block text-[0.65rem] text-[#8a96a8]">Cost</span>
                <strong className="mt-0.5 block text-base tabular-nums text-[#4162c7]">{formatNumber(estimatedCost)}</strong>
              </div>
            )}
          </div>
        </div>

        <button className="flex min-h-[51px] cursor-pointer items-center justify-center gap-[9px] rounded-[15px] border-0 bg-gradient-to-r from-[#5278e6] to-[#695cdb] text-[0.92rem] font-extrabold text-white shadow-[0_10px_22px_rgba(89,105,222,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(89,105,222,0.3)] hover:saturate-[1.12] active:translate-y-0 [&_svg]:size-[18px]" type="submit">
          Add estimate
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </form>
    </section>
  )
}

export default ApplianceForm
