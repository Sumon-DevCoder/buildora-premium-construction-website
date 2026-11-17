import { useEffect, useState } from 'react'

/**
 * Run an async data function and track its state.
 * `fetcher` must be a stable reference (a function from services/api.js) or
 * be re-created only when `deps` change.
 *
 * @returns {{ data: any, loading: boolean, error: Error | null }}
 */
export function useApi(fetcher, deps = []) {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState((prev) => ({ ...prev, loading: true, error: null }))

    fetcher()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null })
      })
      .catch((error) => {
        if (!cancelled) setState({ data: null, loading: false, error })
      })

    // Ignore late responses after unmount or when deps change.
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
