import { useContext } from 'react'

import { AppCard } from '../components/Card'
import { AppContext } from '../context/AppContext'
import Pagination from '../components/Pagination'
import { Search } from '../components/Search'

export default function Home() {
  const { appsPaginated, loading, error, totalPages, search, setSearch } =
    useContext(AppContext)

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">Carregando aplicações...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-red-500">Erro: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Search value={search} onChange={setSearch} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {appsPaginated.map(app => (
          <AppCard key={app.id} app={app} onClick={() => {}} />
        ))}
      </div>

      {totalPages > 1 && <Pagination />}
    </div>
  )
}
