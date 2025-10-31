import { createContext, useState, useEffect, useMemo, ReactNode } from 'react'
import { fetchApps } from '../api/appService'
import type { AppData } from '../types/app'

interface AppContextProps {
  apps: AppData[]
  loading: boolean
  error: string | null
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export function AppProvider({ children }: { children: ReactNode }) {
  const [apps, setApps] = useState<AppData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadApps = async () => {
      setLoading(true)
      try {
        const data = await fetchApps()
        setApps(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    loadApps()
  }, [])

  const value = useMemo(
    () => ({
      apps,
      loading,
      error,
    }),
    [apps, loading, error]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
