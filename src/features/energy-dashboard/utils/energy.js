export const STORAGE_KEY = 'energy-estimator-items'

export const PERIODS = [
  { label: 'Daily', days: 1 },
  { label: 'Weekly', days: 7 },
  { label: 'Monthly', days: 30 },
  { label: 'Semi-annual', days: 180 },
  { label: 'Yearly', days: 365 },
]

export function calculateEnergy(watts, hoursPerDay, days) {
  return (Number(watts) * Number(hoursPerDay) * Number(days)) / 1000
}

export function formatNumber(value, digits = 2) {
  return Number(value || 0).toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })
}

export function formatPeriod(days) {
  const match = PERIODS.find((period) => period.days === days)
  return match ? match.label : `${days} days`
}

export function loadEnergyHistory() {
  try {
    const storedItems = window.localStorage.getItem(STORAGE_KEY)
    if (!storedItems) return { items: [], error: '' }

    const parsedItems = JSON.parse(storedItems)
    if (!Array.isArray(parsedItems)) {
      throw new TypeError('Saved energy history is not a list.')
    }

    const items = parsedItems.filter((item) => (
      item &&
      typeof item.id === 'string' &&
      typeof item.name === 'string' &&
      Number.isFinite(item.kwh) &&
      Number.isFinite(item.watts) &&
      Number.isFinite(item.hours) &&
      Number.isFinite(item.days)
    ))

    return { items, error: '' }
  } catch (error) {
    console.error('Could not load saved energy history.', error)
    return {
      items: [],
      error: 'Saved history could not be loaded from this browser.',
    }
  }
}

export function saveEnergyHistory(items) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    return ''
  } catch (error) {
    console.error('Could not save energy history.', error)
    return 'Your browser could not save this history. Check your storage settings and try again.'
  }
}

export function exportEnergyHistory(items) {
  const columns = ['Device', 'Power (W)', 'Hours per day', 'Period (days)', 'Energy (kWh)', 'Rate', 'Estimated cost', 'Added']
  const escapeCsv = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`
  const rows = items.map((item) => [
    item.name,
    item.watts,
    item.hours,
    item.days,
    item.kwh,
    item.rate ?? '',
    item.cost ?? '',
    new Date(item.createdAt).toLocaleString(),
  ])
  const csv = [columns, ...rows].map((row) => row.map(escapeCsv).join(',')).join('\r\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `energy-history-${new Date().toISOString().slice(0, 10)}.csv`
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
