import { AppData } from '../types/app'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

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
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const textColor = isLightColor(app.color) ? 'text-gray-800' : 'text-white'

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  return (
    <Card
      onClick={() => onClick(app)}
      className="cursor-pointer hover:shadow-lg transition col-span-1"
      style={{ backgroundColor: app.color }}
    >
      <CardContent className="flex flex-col items-center text-center p-4">
        <div className="relative w-16 h-16 mb-3">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          {!imageError && (
            <img
              src={app.icon}
              alt={app.name}
              className={`w-16 h-16 rounded-full transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
          {imageError && (
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-2xl">🔧</span>
            </div>
          )}
        </div>
        <h3 className={`font-semibold text-lg ${textColor}`}>{app.name}</h3>
      </CardContent>
    </Card>
  )
}
