"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ImageType {
  id: number;
  src: string;
  prompt: string;
  negativePrompt: string;
  model: string;
  embedding?: string;
}
export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const images: ImageType[] = [
    {
      id: 1,
      src: "/best.png?height=700&width=400",
      prompt:
        "An image of a woman standing straight on, head turned slightly to her left, looking directly into the camera with a confident yet curious expression. She has dark brown, wavy hair and fair skin with noticeable freckles. Her eyes are amber brown with a warm light reflecting in them. She wears a tartan plaid garment in navy blue and red with white lines, and the neckline is slightly off her right shoulder. The setting is brightly lit with natural light.",
      negativePrompt:
        "Low Quality | | text logos | | watermarks | | signatures | | out of frame | | jpeg artifacts | | ugly | | poorly drawn | | extra limbs | | extra hands | | extra feet | | backwards limbs | | extra fingers | | extra toes | | unrealistic, incorrect, bad anatomy | | cut off body pieces | | strange body positions | | impossible body positioning | | Mismatched eyes | | cross eyed | | crooked face | | crooked lips | | unclear | | undefined | | mutations | | deformities | | off center | | poor_composition | | duplicate faces, plastic, fake, tiny, negativity, blurry, blurred, doll, unclear, NSFW, nudity, bad hands, bad eyes, deformities, bad fingers, big breasts,  EasyNegative",
     model: "Counterfeit V-2.5",
     embedding: "Easy Negative"
      },
    {
      id: 2,
      src: "/galactic_war.png?height=400&width=400",
      prompt: "Galactic war",
      negativePrompt:  "Low Quality | | text logos | | watermarks | | signatures | | out of frame | | jpeg artifacts | | ugly | | poorly drawn | | extra limbs | | extra hands | | extra feet | | backwards limbs | | extra fingers | | extra toes | | unrealistic, incorrect, bad anatomy | | cut off body pieces | | strange body positions | | impossible body positioning | | Mismatched eyes | | cross eyed | | crooked face | | crooked lips | | unclear | | undefined | | mutations | | deformities | | off center | | poor_composition | | duplicate faces, plastic, fake, tiny, negativity, blurry, blurred, doll, unclear, NSFW, nudity, bad hands, bad eyes, deformities, bad fingers, big breasts,  EasyNegative",
      model: "animagine-xl"
    },
 
    {
      id: 3,
      src: "/romantic_date.png?height=400&width=400",
      prompt: "Romantic date",
      negativePrompt: "nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name",
       model: "animagine-xl"
    },
    {
      id: 4,
      src: "/scary_witch.png?height=700&width=400",
      prompt: "Scary witch",
      negativePrompt: "nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name",
      model: "animagine-xl"
    },
    {
      id: 5,
      src: "/two_girls.png?height=700&width=400",
      prompt:  "An image of two woman standing straight on, head turned slightly to her left, looking directly into the camera with a confident yet curious expression. She has dark brown, wavy hair and fair skin with noticeable freckles. Her eyes are amber brown with a warm light reflecting in them. She wears a tartan plaid garment in navy blue and red with white lines, and the neckline is slightly off her right shoulder. The setting is brightly lit with natural light.",
      negativePrompt: "Low Quality | | text logos | | watermarks | | signatures | | out of frame | | jpeg artifacts | | ugly | | poorly drawn | | extra limbs | | extra hands | | extra feet | | backwards limbs | | extra fingers | | extra toes | | unrealistic, incorrect, bad anatomy | | cut off body pieces | | strange body positions | | impossible body positioning | | Mismatched eyes | | cross eyed | | crooked face | | crooked lips | | unclear | | undefined | | mutations | | deformities | | off center | | poor_composition | | duplicate faces, plastic, fake, tiny, negativity, blurry, blurred, doll, unclear, NSFW, nudity, bad hands, bad eyes, deformities, bad fingers, big breasts,  EasyNegative",
      model: "Counterfeit V-2.5",
     embedding: "Easy Negative"
    },
    {
      id: 6,
      src: "/pink_hair.png?height=700&width=400",
      prompt:
      "An image of a woman standing straight on, head turned slightly to her left, looking directly into the camera with a confident yet curious expression. She has pink, wavy hair and fair skin with noticeable freckles. Her eyes are amber brown with a warm light reflecting in them. She wears a tartan plaid garment in navy blue and red with white lines, and the neckline is slightly off her right shoulder. The setting is brightly lit with natural light.",
    negativePrompt:
      "Low Quality | | text logos | | watermarks | | signatures | | out of frame | | jpeg artifacts | | ugly | | poorly drawn | | extra limbs | | extra hands | | extra feet | | backwards limbs | | extra fingers | | extra toes | | unrealistic, incorrect, bad anatomy | | cut off body pieces | | strange body positions | | impossible body positioning | | Mismatched eyes | | cross eyed | | crooked face | | crooked lips | | unclear | | undefined | | mutations | | deformities | | off center | | poor_composition | | duplicate faces, plastic, fake, tiny, negativity, blurry, blurred, doll, unclear, NSFW, nudity, bad hands, bad eyes, deformities, bad fingers, big breasts,  EasyNegative",
   model: "Counterfeit V-2.5",
   embedding: "Easy Negative"
    },

    // Add more images as needed
  ];

  return (
    <div className="min-h-screen bg-[#1a1b1e] text-gray-300 p-16">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent mb-8 text-center text-gray-200">
        AI Generated Images
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card
            key={image.id}
            className="group bg-[#25262b] border-[#2c2e33] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#32343a] flex flex-col"
          >
            <CardContent className="p-3 flex-grow flex flex-col">
              <div className="w-full aspect-square flex-grow flex items-center justify-center overflow-hidden rounded-md">
              <Image
                  src={image.src}
                  alt={`AI Generated Image ${image.id}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 p-3 rounded-md group-hover:scale-10"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 bg-[#2c2e33] p-3">
            <div className="w-full space-y-2">
                <div>
                  <p className="text-sm font-semibold">Prompt:</p>
                  <p className="text-sm text-gray-400 truncate">{image.prompt}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Negative prompt:</p>
                  <p className="text-sm text-gray-400 truncate">{image.negativePrompt}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Model:</p>
                  <p className="text-sm text-gray-400 truncate">{image.model}</p>
                </div>
                {image?.embedding && (
                <div>
                  <p className="text-sm font-semibold">Embedding:</p>
                  <p className="text-sm text-gray-400 truncate">{image.embedding}</p>
                </div>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 bg-[#3a3c42] text-gray-200 border-[#4a4c52] hover:bg-[#4a4c52]"
                onClick={() => setSelectedImage(image)}
              >
                View Full
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative w-[95vw] h-[90vh] max-w-5xl bg-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-2 text-white hover:bg-white/20 z-[60]"
        onClick={() => setSelectedImage(null)}
      >
        <X className="h-6 w-6" />
      </Button>
      <div className="flex flex-col lg:flex-row gap-8 h-full">
        <div className="lg:w-1/3 flex flex-col overflow-y-auto max-h-[calc(90vh-4rem)] pr-4">
          <div className="space-y-6 flex-shrink-0">
            <div className="bg-black/30 rounded-xl p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Prompt</h3>
              <p className="text-sm text-gray-300">{selectedImage.prompt}</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Negative Prompt</h3>
              <p className="text-sm text-gray-300">{selectedImage.negativePrompt}</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 backdrop-blur-sm mb-8">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Properties</h3>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold text-gray-200">Model:</span>{" "}
                  <span className="text-gray-300">{selectedImage.model}</span>
                </p>
                {selectedImage.embedding && (
                  <p className="text-sm">
                    <span className="font-semibold text-gray-200">Embedding:</span>{" "}
                    <span className="text-gray-300">{selectedImage.embedding}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 flex items-center justify-center">
          <img
            src={selectedImage.src}
            alt={`Full size AI Generated Image`}
            className="max-w-full max-h-[calc(90vh-8rem)] object-contain rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
