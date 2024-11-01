'use client'
import type { ImageType } from '@/@types/ImageType'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Slides from './components/Slides'

import { getImages } from '@/supabase/getImages'

export default function Imagens() {
  const [imagesURLs, setImagesURLs] = useState<ImageType[]>([])

  useEffect(() => {
    async function handleGetImages() {
      const URLs = await getImages({ dir: 'contribuicoes' })
      setImagesURLs(URLs)
    }

    handleGetImages()
  }, [])

  return (
    <div className="bg-tertiary py-12 overflow-x-hidden">
      <Slides images={imagesURLs} />
      <main className="flex flex-col justify-center items-center w-full">
        <h1 className="mt-10 text-3xl font-bold px-4 py-2 bg-secondary text-center text-white rounded">
          Fotos/Vídeos
        </h1>
        <p className="mt-5 text-white text-2xl text-center">
          Acima estão presentes as imagens de algumas das doações realizadas
          pela instituição Casa da Mãe
        </p>
      </main>
    </div>
  )
}
