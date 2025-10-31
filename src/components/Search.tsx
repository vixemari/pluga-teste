import { Input } from '@/components/ui/input'

interface SearchProps {
  value: string
  onChange: (v: string) => void
}

export function Search({ value, onChange }: SearchProps) {
  return (
    <Input
      placeholder="Buscar ferramentas..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
    />
  )
}
