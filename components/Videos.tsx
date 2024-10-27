"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Inter, Poppins, Open_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

interface VideoData {
  id: number
  src: string
  title: string
  description: string
  prompts: { [key: number]: string }
  negativePrompts: { [key: number]: string }
}

const videoData: VideoData[] = [
  {
    id: 1,
    src: "/jazz.mp4",
    title: "A futuristic cityscape at night",
    description: "An AI-generated video showcasing a vibrant, neon-lit cityscape with towering skyscrapers and flying vehicles.",
    prompts: {
      0: "A futuristic cityscape at night",
      30: "A cyberpunk character with neon accents",
      60: "An AI-generated abstract artwork",
      90: "A surreal landscape with floating islands",
    },
    negativePrompts: {
      0: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
      30: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
      60: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
      90: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
    },
  },
  {
    id: 2,
    src: "/horror.mp4",
    title: "Eerie forest at twilight",
    description: "An AI-generated video depicting a mysterious, fog-filled forest with shadowy figures and unsettling movements.",
    prompts: {
      0: "Misty forest at dusk",
      30: "Shadowy figures moving between trees",
      60: "Glowing eyes in the darkness",
      90: "Ancient, gnarled trees with faces",
    },
    negativePrompts: {
      0: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
      30: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
      60: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
      90: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
    },
  },
]

export default function Videos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentVideo = videoData[currentIndex]

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoData.length)
    setIsPlaying(false)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoData.length) % videoData.length)
    setIsPlaying(false)
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 ${inter.className}`}>
    <h1 className={`text-5xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-fuchsia-500 m-10 ${poppins.className}`}>
      DreamScape AI: Video Showcase
    </h1> <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, 
            rgba(0,0,0,0.8) 0%, 
            rgba(0,0,0,0.8) 50%, 
            rgba(0,0,0,1) 50%, 
            rgba(0,0,0,1) 100%), 
            url(${currentVideo.src.replace('.mp4', '.jpg')})`,
          backgroundSize: '200% 100%',
        }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden"
            style={{
              boxShadow: '0 0 40px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.1)',
            }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="p-10 md:w-1/2">
                <h2 className={`text-3xl font-semibold mb-5 text-white ${poppins.className}`}>{currentVideo.title}</h2>
                <p className={`text-gray-300 mb-7 ${openSans.className}`}>{currentVideo.description}</p>
                <div className="mb-7">
                  <h3 className={`text-2xl font-semibold mb-4 text-white ${poppins.className}`}>Prompts:</h3>
                  {Object.entries(currentVideo.prompts).map(([time, prompt]) => (
                    <div key={time} className="mb-3">
                      <span className={`text-gray-400 ${openSans.className}`}>{time}s: </span>
                      <span className={`text-sm text-white ${openSans.className}`}>{prompt}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 text-white ${poppins.className}`}>Negative Prompts:</h3>
                  <div className={`text-sm text-gray-300 break-words ${openSans.className}`}>
                    {currentVideo.negativePrompts[0]}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <video
                  ref={videoRef}
                  src={currentVideo.src}
                  className="w-full h-full object-cover"
                  onClick={handlePlayPause}
                />
                {!isPlaying && (
                  <button
                    onClick={handlePlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity hover:bg-opacity-30"
                  >
                    <Play className="w-24 h-24 text-white" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-8">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="p-2 bg-white bg-opacity-10 rounded-full text-white hover:bg-opacity-20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
            <span className="sr-only">Previous video</span>
          </Button>
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="p-2 bg-white bg-opacity-10 rounded-full text-white hover:bg-opacity-20 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
            <span className="sr-only">Next video</span>
          </Button>
        </div>
      </div>
    </div>
  )
}