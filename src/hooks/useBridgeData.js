import { useState, useEffect } from 'react'
import data from '../data/mock-bridges.json'

export default function useBridgeData() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return { data, loading, error, selected, setSelected }
}
