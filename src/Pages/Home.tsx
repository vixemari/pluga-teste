import { useContext } from 'react'
import { AppCard } from '../components/AppCard'
import { AppContext } from '../context/AppContext'

export default function Home() {
  const { apps } = useContext(AppContext)

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {apps.map(app => (
          <AppCard key={app.id} app={app} onClick={() => {}} />
        ))}
      </div>
    </div>
  )
}
