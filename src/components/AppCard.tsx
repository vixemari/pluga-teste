import { AppData } from '../types/app'
import { Card, CardContent } from '@/components/ui/card'

interface AppCardProps {
  app: AppData
  onClick: (_: AppData) => void
}

const isLightColor = (color: string): boolean => {
  const hex = color.replace('#', '')

  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  return luminance > 0.5
}

export function AppCard({ app, onClick }: AppCardProps) {
  const textColor = isLightColor(app.color) ? 'text-gray-800' : 'text-white'

  return (
    <Card
      onClick={() => onClick(app)}
      className="cursor-pointer hover:shadow-lg transition col-span-1"
      style={{ backgroundColor: app.color }}
    >
      <CardContent className="flex flex-col items-center text-center p-4">
        <img src={app.icon} alt={app.name} className="w-16 h-16 mb-3" />
        <h3 className={`font-semibold text-lg ${textColor}`}>{app.name}</h3>
      </CardContent>
    </Card>
  )
}
