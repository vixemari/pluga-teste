import { SkeletonCard } from './SkeletonCard'
import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingCard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Skeleton className="w-full h-12 mb-6" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-8">
        <Skeleton className="w-64 h-10" />
      </div>
    </div>
  )
}
