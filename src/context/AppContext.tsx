import { createContext, useState, useEffect, ReactNode } from 'react'
import { fetchApps } from '../api/appService'
import type { AppData } from '../types/app'

interface AppContextProps {
  apps: AppData[]
  loading: boolean
  error: string | null
  appsPaginated: AppData[]
  currentPage: number
  totalPages: number
  setPage: (page: number) => void
  perPage: number
  search: string
  setSearch: (search: string) => void
  filteredApps: AppData[]
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export function AppProvider({ children }: { children: ReactNode }) {
  const [apps, setApps] = useState<AppData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const perPage = 12

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
  const totalPages = Math.ceil(apps.length / perPage)

  const filteredApps = apps.filter(app =>
    app.name.toLowerCase().includes(search.toLowerCase())
  )

  const appsPaginated = filteredApps.slice((page - 1) * perPage, page * perPage)

  const value = {
    apps,
    loading,
    error,
    appsPaginated,
    currentPage: page,
    totalPages,
    setPage,
    perPage,
    search,
    setSearch,
    filteredApps,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
