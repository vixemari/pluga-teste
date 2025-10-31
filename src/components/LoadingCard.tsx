export default function LoadingCard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-lg text-gray-600">Carregando aplicações...</p>
        <p className="text-sm text-gray-500 mt-2">
          Aguarde enquanto buscamos as melhores ferramentas para você
        </p>
      </div>
    </div>
  )
}
