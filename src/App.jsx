import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">🧙 Contatore Magico</h1>
        <button
          onClick={() => setCount(c => c + 1)}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-12 py-6 rounded-2xl text-3xl shadow-2xl transform hover:scale-105 transition-all duration-200"
        >
          ✨ {count}
        </button>
        <p className="text-gray-400 mt-6 text-lg">Clicca per incrementare!</p>
        {count > 0 && (
          <button
            onClick={() => setCount(0)}
            className="mt-4 text-red-400 hover:text-red-300 underline"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}