"use client"

import { useState } from 'react'
import { Play, Heart, MoreHorizontal, List, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const tracks = [
  { id: 1, title: "Neon Serenade", artist: "AI Composer", plays: 1126137, album: "Digital Dreams", duration: "3:45" },
  { id: 2, title: "Quantum Lullaby", artist: "Neural Noise", plays: 964741, album: "Binary Beats", duration: "4:12" },
  { id: 3, title: "Electric Echoes", artist: "Synth Sentience", plays: 868244, album: "Circuit Symphonies", duration: "3:58" },
  { id: 4, title: "Pixel Pulse", artist: "Data Dreamers", plays: 761712, album: "Algorithm Anthems", duration: "3:30" },
  { id: 5, title: "Cybernetic Sonata", artist: "Machine Melody", plays: 624121, album: "Artificial Harmonies", duration: "4:05" },
]

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-indigo-300">Your Library</h2>
        <Button variant="outline" className="mb-4 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-gray-900">Create playlist</Button>
        <Button variant="outline" className="mb-4 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-gray-900">Browse AI tracks</Button>
        <div className="mt-auto">
          <p className="text-sm text-gray-400 mb-2">Legal</p>
          <p className="text-sm text-gray-400 mb-2">Privacy Policy</p>
          <p className="text-sm text-gray-400 mb-2">Cookies</p>
          <p className="text-sm text-gray-400">About AI Music</p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <Input
            type="search"
            placeholder="What do you want to play?"
            className="w-96 bg-gray-800 text-gray-200 border-gray-700 placeholder-gray-500"
          />
          <Button variant="outline" className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-gray-900">Log in</Button>
        </div>

        <div className="bg-gradient-to-b from-indigo-900 to-gray-900 rounded-lg p-8 mb-8">
          <h1 className="text-7xl font-bold mb-4 text-indigo-200">Top AI Tracks</h1>
          <p className="text-xl mb-4 text-gray-300">Your daily update of the most played AI-generated tracks right now.</p>
          <div className="text-sm text-gray-400 mb-4">AI Music • 17,079,405 plays • about 2hr 45min • 5 tracks</div>
          <div className="flex items-center space-x-4">
            <Button size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-gray-200">
              <Play className="mr-2" /> Play
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-indigo-400 hover:text-indigo-300">
              <Heart />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-indigo-400 hover:text-indigo-300">
              <MoreHorizontal />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-4">
            <span>#</span>
            <span>Title</span>
          </div>
          <span>Album</span>
          <span><Clock /></span>
        </div>

        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`flex items-center justify-between py-2 px-4 hover:bg-gray-800 rounded-md ${
              currentTrack.id === track.id ? 'bg-gray-800' : ''
            }`}
            onClick={() => setCurrentTrack(track)}
          >
            <div className="flex items-center space-x-4">
              <span className="w-4 text-right">{index + 1}</span>
              <div>
                <p className="font-medium text-gray-200">{track.title}</p>
                <p className="text-sm text-gray-400">{track.artist}</p>
              </div>
            </div>
            <span className="text-gray-400">{track.album}</span>
            <span className="text-gray-400">{track.duration}</span>
          </div>
        ))}
      </div>

      {/* Now playing bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg?height=60&width=60" alt="Album cover" className="w-16 h-16 rounded" />
          <div>
            <p className="font-medium text-gray-200">{currentTrack.title}</p>
            <p className="text-sm text-gray-400">{currentTrack.artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-indigo-400 hover:text-indigo-300">
            <Play />
          </Button>
          <div className="text-sm text-gray-400">
            0:00 / {currentTrack.duration}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-indigo-400 hover:text-indigo-300">
            <Heart />
          </Button>
          <Button variant="ghost" size="icon" className="text-indigo-400 hover:text-indigo-300">
            <List />
          </Button>
        </div>
      </div>
    </div>
  )
}