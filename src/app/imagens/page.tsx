'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Slides from './components/Slides'

import { supabase } from '@/supabase/index'

export default function Imagens() {
  const [imagesURLs, setImagesURLs] = useState<string[]>([])
  async function getImages() {
    const URLs: string[] = []
    const { data: imagesFromBucket } = await supabase.storage
      .from('contribuicoes')
      .list()

    imagesFromBucket?.map(async image => {
      const url = await supabase.storage
        .from('contribuicoes')
        .getPublicUrl(image.name)

      if (url.data) URLs.push(url.data.publicUrl)
    })

    return URLs
  }

  useEffect(() => {
    async function handleGetImages() {
      const URLs = await getImages()
      setImagesURLs(URLs)
    }

    handleGetImages()
  }, [])

  return (
    <div className="bg-tertiary py-12 overflow-x-hidden">
      <Slides urls={imagesURLs} />
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
