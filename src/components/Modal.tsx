import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { AppData } from '../types/app'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import { Button } from './ui/button'

interface ModalProps {
  app: AppData | null
}

export default function Modal({ app }: ModalProps) {
  const { getRecents, setSelectedCard } = useContext(AppContext)

  const recentApps = getRecents().filter(
    recentApp => recentApp.app_id !== app?.app_id
  )

  const onClose = () => {
    setSelectedCard(null)
  }

  return (
    <Dialog
      open={!!app}
      onOpenChange={isOpen => {
        if (!isOpen) onClose()
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes do App</DialogTitle>
          <DialogDescription>.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-row justify-evenly items-center text-center">
          <div
            style={{ backgroundColor: app?.color }}
            className="p-4 rounded-full"
          >
            <img
              src={app?.icon}
              alt={app?.name}
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold mb-2">{app?.name}</h2>
            <a href={app?.link} target="_blank" rel="noopener noreferrer">
              <Button className="mt-2 px-8 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full">
                Acessar
              </Button>
            </a>
          </div>
        </div>
        <h3 className="mt-4 font-semibold align-center text-lg">
          Ultimas Ferramentas Utilizadas:
        </h3>
        <div className="mt-2 flex flex-wrap gap-4 justify-center">
          {recentApps.map(app => (
            <div key={app.app_id} className="flex flex-col items-center">
              <div
                style={{ backgroundColor: app?.color }}
                className="p-4 rounded-full"
              >
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <h3 className="text-sm font-semibold">{app.name}</h3>
            </div>
          ))}
          {recentApps.length === 0 && (
            <p className="text-gray-500">Nenhuma ferramenta recente.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
