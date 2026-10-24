import { useState } from 'react'
import { loadEnergyHistory, saveEnergyHistory } from '../utils/energy'

export function useEnergyHistory() {
  const [initialData] = useState(loadEnergyHistory)
  const [items, setItems] = useState(initialData.items)
  const [error, setError] = useState(initialData.error)

  function updateItems(updatedItems) {
    setError(saveEnergyHistory(updatedItems))
    setItems(updatedItems)
  }

  function addItem(item) {
    const newItem = {
      ...item,
      id: window.crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    updateItems([newItem, ...items])
  }

  function removeItem(id) {
    updateItems(items.filter((item) => item.id !== id))
  }

  function clearItems() {
    updateItems([])
  }

  return { items, error, addItem, removeItem, clearItems }
}
