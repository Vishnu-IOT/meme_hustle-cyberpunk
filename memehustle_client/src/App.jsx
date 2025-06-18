import React from 'react'
import MemeGallery from './pages/MemeGallery'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0c29] to-[#302b63] text-white font-mono">
      <header className="p-6 text-center glitch text-4xl text-neon-pink tracking-wide">
        ⚡ MemeHustle ⚡
        <p className="text-base text-neon-blue">Cyberpunk Meme Marketplace</p>
      </header>
      <main className="px-6 pb-10">
        <MemeGallery />
      </main>
    </div>
  )
}
