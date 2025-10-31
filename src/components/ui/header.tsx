export default function Header() {
  return (
    <header
      className="flex items-center justify-between p-4"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img src="/src/assets/pluga.png" alt="Pluga Logo" className="h-12 w-20" />
    </header>
  )
}
