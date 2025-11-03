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
  selectedCard: AppData | null
  setSelectedCard: (app: AppData | null) => void
  openModalCard: (app: AppData) => void
  getRecents: () => AppData[]
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export function AppProvider({ children }: { children: ReactNode }) {
  const [apps, setApps] = useState<AppData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const getInitialSearch = () => {
    const params = new URLSearchParams(window.location.search)
    return params.get('search') || ''
  }

  const getInitialPage = () => {
    const params = new URLSearchParams(window.location.search)
    const pageParam = params.get('page')
    return pageParam ? parseInt(pageParam, 10) : 1
  }

  const [page, setPage] = useState(getInitialPage())
  const [search, setSearch] = useState(getInitialSearch())
  const [selectedCard, setSelectedCard] = useState<AppData | null>(null)

  const perPage = 12

  useEffect(() => {
    const loadApps = async () => {
      setLoading(true)
      try {
        const data = await fetchApps()
        data.sort((a, b) => a.name.localeCompare(b.name))
        setApps(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    loadApps()
  }, [])

  useEffect(() => {
    const params = new URLSearchParams()

    if (search) {
      params.set('search', search)
    }

    if (page > 1) {
      params.set('page', page.toString())
    }

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname

    window.history.replaceState({}, '', newUrl)
  }, [search, page])

  useEffect(() => {
    setPage(1)
  }, [search])

  const filteredApps = apps.filter(app =>
    app.name.toLowerCase().includes(search.toLowerCase())
  )

  const appsPaginated = filteredApps.slice((page - 1) * perPage, page * perPage)

  const totalPages = Math.ceil(filteredApps.length / perPage)

  const saveRecents = (app: AppData) => {
    const recents = JSON.parse(localStorage.getItem('recentApps') || '[]')
    const updatedRecents = [
      app,
      ...recents.filter((a: AppData) => a.app_id !== app.app_id),
    ].slice(0, 4)
    localStorage.setItem('recentApps', JSON.stringify(updatedRecents))
  }

  const getRecents = (): AppData[] => {
    return JSON.parse(localStorage.getItem('recentApps') || '[]')
  }

  const openModalCard = (app: AppData) => {
    setSelectedCard(app)
    saveRecents(app)
  }

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
    selectedCard,
    setSelectedCard,
    openModalCard,
    getRecents,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
