export default function ErrorCard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col justify-center items-center h-64 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Ops! Algo deu errado!
        </h2>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
