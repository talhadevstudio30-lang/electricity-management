import { memo, useMemo, useState } from 'react'
import { exportEnergyHistory, formatNumber, formatPeriod } from '../utils/energy'

const ApplianceHistoryItem = memo(function ApplianceHistoryItem({ item, onRemove }) {
  return (
    <article className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-5 rounded-[17px] border border-[#e4eaf3] bg-white p-[14px_15px] transition-colors hover:border-[#d7e1f5] hover:bg-[#fbfcff] max-sm:grid-cols-[minmax(0,1fr)_auto] max-sm:gap-[10px] max-sm:p-[13px_13px]">
      <div className="min-w-0">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.9rem] font-bold text-[#2a3a51]" title={item.name}>{item.name}</div>
        <div className="mt-[5px] flex flex-wrap gap-x-3 gap-y-[7px] text-[0.7rem] text-[#929daf]">
          <span>{item.watts.toLocaleString()} W</span>
          <span>{item.hours} h / day</span>
          <span>{formatPeriod(item.days)}</span>
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="flex items-center gap-[22px] text-right max-sm:col-start-1 max-sm:row-start-2 max-sm:justify-start max-sm:gap-[23px] max-sm:text-left">
        <div>
          <span className="block text-[0.65rem] text-[#98a3b1]">Energy</span>
          <strong className="mt-[3px] block text-[0.83rem] tabular-nums text-[#3c5271]">{formatNumber(item.kwh, 3)} kWh</strong>
        </div>
        <div>
          <span className="block text-[0.65rem] text-[#98a3b1]">Estimated cost</span>
          <strong className="mt-[3px] block text-[0.83rem] tabular-nums text-[#3c5271]">{Number.isFinite(item.cost) ? formatNumber(item.cost) : '—'}</strong>
        </div>
      </div>
      <button
        aria-label={`Remove ${item.name}`}
        className="grid size-[37px] cursor-pointer place-items-center rounded-xl border border-[#e2e8f2] bg-white p-0 text-[#9a7180] transition-colors hover:border-[#f0dadd] hover:bg-[#fff5f6] hover:text-[#c55067] max-sm:col-start-2 max-sm:row-span-2 max-sm:row-start-1 [&_svg]:size-[15px]"
        onClick={() => onRemove(item.id)}
        title="Remove estimate"
        type="button"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M10 11v6m4-6v6M5.5 7l1 13h11l1-13M9 7V4h6v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </article>
  )
})

function ApplianceHistory({ items, onRemove, onClear, storageError }) {
  const [query, setQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('recent')

  const visibleItems = useMemo(() => {
    const filtered = items.filter((item) => item.name.toLowerCase().includes(query.trim().toLowerCase()))
    return filtered.sort((first, second) => (
      sortOrder === 'usage'
        ? second.kwh - first.kwh
        : new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime()
    ))
  }, [items, query, sortOrder])

  function clearHistory() {
    if (items.length > 0 && window.confirm('Clear all saved energy estimates? This cannot be undone.')) {
      onClear()
    }
  }

  const actionButtonClass = 'inline-flex min-h-10 cursor-pointer items-center justify-center gap-[7px] rounded-xl border border-[#e2e8f2] bg-white px-3 text-[0.76rem] font-bold text-[#5f6f86] transition-colors hover:border-[#ccd7f1] hover:bg-[#f5f7ff] hover:text-[#4f6ed7] disabled:cursor-not-allowed disabled:opacity-45'
  const controlClass = 'min-h-10 rounded-xl border border-[#e5eaf1] bg-white text-[0.78rem] text-[#53627a] outline-none focus:border-[#91a6ed] focus:ring-[3px] focus:ring-[#5d7de2]/10'

  return (
    <section className="mt-5 rounded-[26px] border border-[#e5ebf4] bg-white p-[26px] shadow-[0_8px_24px_rgba(39,65,107,0.06)] max-sm:rounded-[22px] max-sm:p-[20px_17px]" id="history" aria-labelledby="history-title">
      <div className="mb-[19px] flex items-center justify-between gap-[18px] max-sm:flex-col max-sm:items-start">
        <div>
          <h2 className="m-0 text-[1.2rem] font-bold tracking-[-0.035em] text-[#1b2a40]" id="history-title">Appliance history</h2>
          <p className="mb-0 mt-[5px] text-[0.82rem] text-[#8491a4]">Your estimates stay saved in this browser.</p>
        </div>
        <div className="flex items-center gap-[9px] max-sm:grid max-sm:w-full max-sm:grid-cols-[minmax(0,1fr)_auto]">
          <label className="relative">
            <svg className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#93a0b2]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              aria-label="Search appliances"
              className={`${controlClass} w-[180px] bg-white py-0 pl-9 pr-[11px] max-sm:w-full`}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search appliances"
              type="search"
              value={query}
            />
          </label>
          <select
            aria-label="Sort appliance history"
            className={`${controlClass} bg-white py-0 pl-[10px] pr-[27px] max-sm:col-span-full max-sm:w-full`}
            onChange={(event) => setSortOrder(event.target.value)}
            value={sortOrder}
          >
            <option value="recent">Most recent</option>
            <option value="usage">Highest usage</option>
          </select>
          <button
            className={`${actionButtonClass} [&_svg]:size-[15px]`}
            disabled={items.length === 0}
            onClick={() => exportEnergyHistory(visibleItems)}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Export
          </button>
          <button
            className={actionButtonClass}
            disabled={items.length === 0}
            onClick={clearHistory}
            type="button"
          >
            Clear
          </button>
        </div>
      </div>

      {visibleItems.length > 0 ? (
        <div className="grid content-start gap-[10px]">
          {visibleItems.map((item) => (
            <ApplianceHistoryItem item={item} key={item.id} onRemove={onRemove} />
          ))}
        </div>
      ) : (
        <div className="grid min-h-[180px] justify-items-center content-center rounded-[19px] border border-dashed border-[#dce4ef] p-[25px] text-center text-[#8d9aab]">
          <span className="mb-[11px] grid size-[46px] place-items-center rounded-2xl bg-[#eef2ff] text-[1.3rem] text-[#6e86df]" aria-hidden="true">⚡</span>
          <strong className="text-[0.91rem] text-[#53647e]">{items.length === 0 ? 'Your history is ready for its first estimate' : 'No appliances found'}</strong>
          <p className="mb-0 mt-[5px] text-[0.78rem]">{items.length === 0 ? 'Add an appliance above to start tracking your energy.' : 'Try another name or clear your search.'}</p>
        </div>
      )}
      {storageError && <p className="mb-0 mt-[18px] text-[0.8rem] text-[#9c5a26]" role="alert">{storageError}</p>}
    </section>
  )
}

export default memo(ApplianceHistory)
