'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/input'
// import { insertStudentInProject } from "@/connetions/supabase/insertStudentInProject";
import { redirect, useRouter } from 'next/navigation'
import { insertCourseInscription } from '@/supabase/insertCourseInscription'
import { uploadCourseContent } from '@/supabase/uploadCourseContent'
import { uploadImage } from '@/supabase/uploadImage'

const schema = z.object({
  titulo: z.string().min(3),
  descricao: z.string().min(10),
})

type FormData = z.infer<typeof schema>

export default function SubmitForm({ curso }: { curso: string }) {
  const router = useRouter()

  const [file, setFile] = useState<any | null>()

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
      error === 'String must contain at least 5 character(s)'
    ) {
      return 'Preencha o campo acima com mais informações!'
    }
    return error
  }

  async function handleFormSubmit(data: FormData) {
    if (!file) return

    const fileType = file.name.slice(file.name.indexOf('.'), file.length)

    const response = await uploadCourseContent({
      curso,
      descricao: data.descricao as string,
      dir: 'cursos',
      file,
      fileType,
      titulo: data.titulo as string,
    })

    if (response) {
      router.replace('/cursos')
      router.refresh()
    }
  }

  return (
    <form
      className="min-h-[90%] min-w-[300px] sm:min-w-[450px] w-4/12 px-10 pt-6 pb-4 bg-white shadow drop-shadow shadow-blue-500 rounded flex flex-col"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h1 className="text-blue-700 text-3xl m-auto uppercase font-bold">
        Adicionar conteúdo
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
      <input
        type="file"
        title="Arquivo"
        name="arquivo"
        placeholder="Selecione o arquivo"
        className="mt-8 w-full border-2 pr-2 rounded-md bg-zinc-300 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-tertiary file:text-white hover:file:opacity-85 hover:file:duration-150 hover:file:cursor-pointer"
        onChange={e => {
          setFile(e.target.files?.length ? e.target?.files[0] : '')
        }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-10 mt-5 rounded-md hover:opacity-80 hover:scale-95 max-w-40 mx-auto duration-150"
      >
        Adicionar
      </button>
    </form>
  )
}
