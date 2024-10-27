"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

interface ImageData {
  id: number
  src: string
  prompt: string
}

const images: ImageData[] = [
  { id: 1, src: "/modern_night.png", prompt: "A futuristic cityscape at night" },
  { id: 2, src: "/punk.png", prompt: "A cyberpunk character with neon accents" },
  { id: 3, src: "/pleasant.png", prompt: "An AI-generated abstract artwork" },
  { id: 4, src: "/island.png", prompt: "A surreal landscape with floating islands" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <main className="w-full">
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10 text-center m-14">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI-Generated Masterpieces
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your ideas into stunning visuals with our state-of-the-art AI art generator.
              Explore a world where imagination meets artificial intelligence.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/gallery">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
                  Explore Gallery
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {images.map((image) => (
              <motion.div 
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={`AI Generated Art ${image.id}`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div 
                  className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="text-white text-center p-4">{image.prompt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  )
}