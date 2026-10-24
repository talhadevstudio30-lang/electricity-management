import { memo, useMemo } from 'react'
import ApplianceForm from './components/ApplianceForm'
import ApplianceHistory from './components/ApplianceHistory'
import DashboardHeader from './components/DashboardHeader'
import SummaryCards from './components/SummaryCards'
import { useEnergyHistory } from './hooks/useEnergyHistory'

function EnergyDashboard() {
  const { items, error, addItem, removeItem, clearItems } = useEnergyHistory()
  const { totalEnergy, totalCost } = useMemo(() => items.reduce((totals, item) => ({
    totalEnergy: totals.totalEnergy + item.kwh,
    totalCost: totals.totalCost + (Number.isFinite(item.cost) ? item.cost : 0),
  }), { totalEnergy: 0, totalCost: 0 }), [items])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f2f6ff_0%,#f8faff_48%,#f1f8f5_100%)]">

      <div className="mx-auto w-[min(1160px,calc(100%-40px))] pb-16 pt-7 max-sm:w-[calc(100%-24px)] max-sm:pt-[17px]">
        <DashboardHeader />

        <section className="mb-[30px] grid grid-cols-[minmax(0,1.4fr)_minmax(250px,0.6fr)] items-end gap-8 max-[900px]:grid-cols-[minmax(0,1fr)_220px] max-sm:mb-[22px] max-sm:grid-cols-1 max-sm:gap-[17px]">
          <div>
            <p className="mb-[10px] text-xs font-extrabold uppercase tracking-[0.16em] text-[#5579dc]">Your energy, made clearer</p>
            <h1 className="m-0 max-w-[680px] text-[clamp(2.15rem,5vw,3.65rem)] font-extrabold leading-[1.04] tracking-[-0.065em] text-[#17243a]">
              Small changes.<br />Smarter energy choices.
            </h1>
            <p className="mb-0 mt-4 max-w-[590px] text-base leading-[1.7] text-[#738097]">
              Estimate what your everyday appliances use, keep a running history, and make more informed choices at home.
            </p>
          </div>
          <aside className="max-w-[275px] justify-self-end rounded-[20px] border border-[#e5ebf4] bg-white p-[17px_19px] text-[0.83rem] leading-[1.55] text-[#536783] shadow-[0_8px_24px_rgba(39,65,107,0.06)] max-sm:max-w-none max-sm:justify-self-stretch">
            <strong className="mb-1 block text-[0.9rem] text-[#253954]">A clearer picture starts here</strong>
            Energy estimates use your device power, hours used per day, and selected period.
          </aside>
        </section>

        <section className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-5 max-[900px]:grid-cols-1" aria-label="Energy dashboard">
          <ApplianceForm onAdd={addItem} />
          <SummaryCards items={items} totalEnergy={totalEnergy} totalCost={totalCost} />
        </section>

        <ApplianceHistory
          items={items}
          onClear={clearItems}
          onRemove={removeItem}
          storageError={error}
        />
        <p className="mb-0 mt-[22px] text-center text-xs text-[#8e9aab]">Estimates are informational and may differ from your utility bill.</p>
      </div>
    </main>
  )
}

export default memo(EnergyDashboard)
