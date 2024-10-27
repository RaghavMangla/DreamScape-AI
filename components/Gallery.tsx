'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

interface ImageType {
  id: number
  src: string
  prompt: string
  negativePrompt: string
}
export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null)

  const images: ImageType[]  = [
    { id: 5, src: "/best.png?height=700&width=400", prompt: "A cyberpunk character with neon accents", negativePrompt: "Historical, organic, plain" },
    { id: 1, src: "/galactic_war.png?height=400&width=400", prompt: "Galactic war", negativePrompt: "Daytime, rural, natural" },
    { id: 2, src: "/romantic_date.png?height=400&width=400", prompt: "Romantic date", negativePrompt: "Daytime, rural, natural" },
    { id: 3, src: "/scary_witch.png?height=700&width=400", prompt: "Scary witch", negativePrompt: "Historical, organic, plain" },
   
    // Add more images as needed
  ]

  return (
    <div className="min-h-screen bg-[#1a1b1e] text-gray-300 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-200">
        AI Generated Images
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="group bg-[#25262b] border-[#2c2e33] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#32343a]">
            <CardContent className="p-3">
              <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-md">
                <img 
                  src={image.src} 
                  alt={`AI Generated Image ${image.id}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 bg-[#2c2e33] p-3">
              <p className="text-sm"><strong>Prompt:</strong> {image.prompt}</p>
              <p className="text-sm"><strong>Negative Prompt:</strong> {image.negativePrompt}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 bg-[#3a3c42] text-gray-200 border-[#4a4c52] hover:bg-[#4a4c52]"
                onClick={() => setSelectedImage(image)}
              >
                View Full Size
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto bg-[#25262b] rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 text-gray-400 hover:bg-[#32343a]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img 
              src={selectedImage.src} 
              alt={`Full size AI Generated Image`} 
              className="w-full h-auto rounded-md shadow-xl"
            />
            <div className="mt-4 text-gray-300">
              <p><strong>Prompt:</strong> {selectedImage.prompt}</p>
              <p><strong>Negative Prompt:</strong> {selectedImage.negativePrompt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
