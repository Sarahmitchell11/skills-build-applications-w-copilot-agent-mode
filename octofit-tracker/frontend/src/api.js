import { useEffect, useState } from 'react'

function getItems(payload, collectionName) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return []
  if (Array.isArray(payload[collectionName])) return payload[collectionName]
  if (Array.isArray(payload.results)) return payload.results
  if (Array.isArray(payload.items)) return payload.items
  if (Array.isArray(payload.data)) return payload.data
  if (payload.data && Array.isArray(payload.data[collectionName])) return payload.data[collectionName]
  return []
}

export function useCollection(endpoint, collectionName) {
  const [state, setState] = useState({ items: [], loading: true, error: '' })

  useEffect(() => {
    const controller = new AbortController()

    async function loadCollection() {
      try {
        const response = await fetch(endpoint, { signal: controller.signal })
        if (!response.ok) throw new Error(`Unable to load ${collectionName}`)
        const payload = await response.json()
        setState({ items: getItems(payload, collectionName), loading: false, error: '' })
      } catch (error) {
        if (error.name !== 'AbortError') {
          setState({ items: [], loading: false, error: error.message })
        }
      }
    }

    loadCollection()
    return () => controller.abort()
  }, [endpoint, collectionName])

  return state
}