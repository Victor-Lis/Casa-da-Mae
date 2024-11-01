'use client'

import StyledBox from '../../../../../StyledBox'

import type { FormEvent } from 'react'
import { useState } from 'react'

import { uploadImage } from '@/supabase/uploadImage'
import { useRouter } from 'next/navigation'

type ImagesProps = {
  dir: string
  title: string
  description: string
  replaceTo?: string
}

export default function Imagens({
  dir,
  title,
  description,
  replaceTo,
}: ImagesProps) {
  const router = useRouter()
  const [file, setFile] = useState<any | null>()

  async function handleSubmitFile(e: FormEvent) {
    e.preventDefault()

    if (file) {
      const fileType = file.name.slice(file.name.indexOf('.'), file.length)

      const response = await uploadImage({
        file,
        dir,
        fileType,
      })

      if (typeof response === 'string') alert(response)

      if (response) {
        router.replace(replaceTo ? replaceTo : '/imagens')
        router.refresh()
      }
    }
  }

  return (
    <StyledBox extraClass="overflow-x-hidden">
      <h1 className="text-white text-5xl w-full text-center font-bold mb-8 max-sm:text-3xl">
        {title}
      </h1>
      <h1 className="text-white text-2xl w-full text-center max-sm:text-xl">
        {description}
      </h1>
      <form
        className="w-full flex justify-center items-center my-5"
        onSubmit={handleSubmitFile}
      >
        <input
          type="file"
          className="
            w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-tertiary file:text-white
            hover:file:opacity-85 hover:file:duration-150 hover:file:cursor-pointer
          "
          onChange={e =>
            setFile(e.target.files?.length ? e.target?.files[0] : '')
          }
        />
        <button
          type="submit"
          className="
            py-2 px-4
            rounded border-0
            text-sm font-semibold
            bg-blue-600 text-white
            hover:opacity-85 hover:duration-150 hover:cursor-pointer
          "
        >
          Enviar
        </button>
      </form>
    </StyledBox>
  )
}
