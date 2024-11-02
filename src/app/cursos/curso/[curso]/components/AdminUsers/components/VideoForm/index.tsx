'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/input'

import { redirect, useRouter } from 'next/navigation'
import { insertCourseInscription } from '@/supabase/insertCourseInscription'
import { uploadCourseContent } from '@/supabase/uploadCourseContent'
import { uploadImage } from '@/supabase/uploadImage'
import { uploadVideoLink } from '@/supabase/uploadVideoLink'

const schema = z.object({
  titulo: z.string().min(3),
  descricao: z.string().min(10),
  link: z.string().min(10),
})

type FormData = z.infer<typeof schema>

export default function VideoForm({ curso }: { curso: string }) {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function translateError(error: string | undefined) {
    if (!error) return
    if (
      error === 'String must contain at least 3 character(s)' ||
      error === 'String must contain at least 10 character(s)'
    ) {
      return 'Preencha o campo acima com mais informações!'
    }
    return error
  }

  function getVideoId(link: string): string {
    if (link.includes('watch')) {
      return link.slice(link.lastIndexOf('=') + 1, link.length)
    }
    return link.slice(link.lastIndexOf('/') + 1, link.length)
  }

  async function handleFormSubmit(data: FormData) {
    if (!loading) {
      setLoading(true)
      const videoId = getVideoId(data.link)

      const response = await uploadVideoLink({
        curso,
        descricao: data.descricao as string,
        titulo: data.titulo as string,
        link: `https://www.youtube.com/embed/${videoId}` as string,
      })

      if (response) {
        router.replace('/cursos')
        router.refresh()
      }

      setLoading(false)
    }
  }

  return (
    <form
      className="min-h-[90%] min-w-[300px] sm:min-w-[450px] w-4/12 px-10 pt-6 pb-4 bg-white shadow drop-shadow shadow-blue-500 rounded flex flex-col"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h1 className="text-blue-700 text-3xl m-auto uppercase font-bold">
        Adicionar Vídeo
      </h1>
      <Input
        type="text"
        title="Título"
        name="titulo"
        placeholder="Preencha o título"
        register={register}
        error={translateError(errors.titulo?.message)}
      />
      <Input
        type="text"
        title="Descrição"
        name="descricao"
        placeholder="Preencha a descrição"
        register={register}
        error={translateError(errors.descricao?.message)}
      />
      <Input
        type="text"
        title="Link do Youtube"
        name="link"
        placeholder="Preencha com o link do vídeo no Youtube"
        register={register}
        error={translateError(errors.link?.message)}
      />
      <button
        type="submit"
        className={
          !loading
            ? 'bg-blue-500 text-white font-bold py-2 px-10 mt-5 rounded-md hover:opacity-80 hover:scale-95 max-w-40 mx-auto duration-150'
            : 'bg-gray-400 text-white font-bold py-2 px-10 mt-5 rounded-md cursor-not-allowed max-w-40 mx-auto'
        }
        disabled={loading}
      >
        Adicionar
      </button>
    </form>
  )
}
