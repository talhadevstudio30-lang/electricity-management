import { useCallback, useState } from 'react'
import { loadEnergyHistory, saveEnergyHistory } from '../utils/energy'

export function useEnergyHistory() {
  const [initialData] = useState(loadEnergyHistory)
  const [items, setItems] = useState(initialData.items)
  const [error, setError] = useState(initialData.error)

  const updateItems = useCallback((updatedItems) => {
    setError(saveEnergyHistory(updatedItems))
    setItems(updatedItems)
  }, [])

  const addItem = useCallback((item) => {
    const newItem = {
      ...item,
      id: window.crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    updateItems([newItem, ...items])
  }, [items, updateItems])

  const removeItem = useCallback((id) => {
    updateItems(items.filter((item) => item.id !== id))
  }, [items, updateItems])

  const clearItems = useCallback(() => {
    updateItems([])
  }, [updateItems])

  return { items, error, addItem, removeItem, clearItems }
}
