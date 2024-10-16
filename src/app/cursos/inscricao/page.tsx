'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/input'
// import { insertStudentInProject } from "@/connetions/supabase/insertStudentInProject";
import { redirect, useRouter } from 'next/navigation'

export type AlunoType = {
  nome: string
  email: string
  curso:
    | 'Contabilidade'
    | 'Fluxo de Caixa'
    | 'Contas a Receber'
    | 'Contas a Pagar'
    | 'Controle de Estoque'
}

const schema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  curso: z.enum([
    'Contabilidade',
    'Fluxo de Caixa',
    'Contas a Receber',
    'Contas a Pagar',
    'Controle de Estoque',
  ]),
})

type FormData = z.infer<typeof schema>

export default function Inscricao() {
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
    if (error === 'String must contain at least 3 character(s)') {
      return 'O campo acima precisa conter ao menos 3 dígitos!'
    }
    if (error.includes('received null')) {
      return 'O campo acima precisa ser selecionado!'
    }
    return error
  }

  async function handleFormSubmit(data: FormData) {
    console.log(data)
    // await insertStudentInProject({ aluno })
    alert('Inscrição Realizada!')
    // router.replace('/cursos')
  }

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-secondary bg-cover bg-center py-[5%]">
      <form
        className="min-h-[90%] min-w-[300px] sm:min-w-[450px] w-4/12 px-10 pt-6 pb-4 bg-white shadow drop-shadow shadow-blue-500 rounded flex flex-col"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <h1 className="text-blue-700 text-3xl m-auto uppercase font-bold">
          Preencha e se inscreva!
        </h1>
        <Input
          type="text"
          name="nome"
          placeholder="Preencha seu nome *completo*"
          register={register}
          error={translateError(errors.nome?.message)}
        />
        <Input
          type="text"
          name="email"
          placeholder="Preencha seu email"
          register={register}
          error={translateError(errors.email?.message)}
        />
        <Input
          type="radio"
          name="curso"
          register={register}
          error={translateError(errors.curso?.message)}
          options={[
            { label: 'Contabilidade para Leigos', value: 'Contabilidade' },
            { label: 'Fluxo de Caixa', value: 'Fluxo de Caixa' },
            {
              label: 'Controle de Contas a Receber',
              value: 'Contas a Receber',
            },
            { label: 'Controle de Contas a Pagar', value: 'Contas a Pagar' },
            { label: 'Controle de Estoque', value: 'Controle de Estoque' },
          ]}
        />
        <p className="text-red-500 mt-3 text-center">
          Não será possível cancelar seu pedido de inscrição após enviar a
          ficha, então verifique com cuidado!
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-10 mt-5 rounded-md hover:opacity-80 hover:scale-95 max-w-40 mx-auto duration-150"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
