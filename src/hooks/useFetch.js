import { useEffect, useState } from 'react'

export function useFetch (url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    window.fetch(url)
      .then((result) => result.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return [data, loading, error]
}
