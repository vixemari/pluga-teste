import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCard() {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition col-span-1">
      <CardContent className="flex flex-col items-center text-center p-4">
        <Skeleton className="w-16 h-16 mb-3 rounded-full" />
        <Skeleton className="h-6 w-24" />
      </CardContent>
    </Card>
  )
}
