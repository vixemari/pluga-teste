import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'

interface SearchProps {
  value: string
  onChange: (v: string) => void
  delay?: number
}

export function Search({ value, onChange, delay = 300 }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState(value)

  useEffect(() => {
    setSearchTerm(value)
  }, [value])

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(searchTerm)
    }, delay)

    return () => clearTimeout(timer)
  }, [searchTerm, onChange, delay])

  return (
    <Input
      placeholder="Buscar ferramentas..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  )
}
