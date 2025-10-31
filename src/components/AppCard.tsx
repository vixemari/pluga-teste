import { AppData } from '../types/app'
import { Card, CardContent } from '@/components/ui/card'

interface AppCardProps {
  app: AppData
  onClick: (_: AppData) => void
}

export function AppCard({ app, onClick }: AppCardProps) {
  return (
    <Card
      onClick={() => onClick(app)}
      className="cursor-pointer hover:shadow-lg transition"
    >
      <CardContent className="flex flex-col items-center text-center p-4">
        <img src={app.icon} alt={app.name} className="w-16 h-16 mb-3" />
        <h3 className="font-semibold text-lg">{app.name}</h3>
      </CardContent>
    </Card>
  )
}
