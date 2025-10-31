export default function EmptyCard({ search }: { search: string }) {
  return (
    <div className="flex flex-col justify-center items-center h-64 text-center mt-6">
      <div className="text-6xl mb-4">🔍</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Nenhum resultado encontrado
      </h2>
      <p className="text-gray-600 mb-4">
        Não encontramos nenhuma ferramenta com o termo:
        <br />
        <strong>&quot;{search}&quot;:</strong>
      </p>
      <p className="text-sm text-gray-500">
        Tente buscar por outros termos ou navegue por todas as ferramentas
        disponíveis
      </p>
    </div>
  )
}
