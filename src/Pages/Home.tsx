import { useContext } from 'react'

import { AppCard } from '../components/Card'
import { AppContext } from '../context/AppContext'
import Pagination from '../components/Pagination'
import { Search } from '../components/Search'
import ErrorCard from '../components/ErrorCard'
import LoadingCard from '../components/LoadingCard'
import EmptyCard from '../components/EmptyCard'

export default function Home() {
  const {
    appsPaginated,
    loading,
    error,
    totalPages,
    search,
    setSearch,
    filteredApps,
  } = useContext(AppContext)

  if (loading) {
    return <LoadingCard />
  }

  if (error) {
    return <ErrorCard />
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Search value={search} onChange={setSearch} />

      {/* Estado: busca sem resultados */}
      {search && filteredApps.length === 0 ? (
        <EmptyCard search={search} />
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {appsPaginated.map(app => (
              <AppCard key={app.id} app={app} onClick={() => {}} />
            ))}
          </div>
          {totalPages > 1 && <Pagination />}
        </>
      )}
    </div>
  )
}
