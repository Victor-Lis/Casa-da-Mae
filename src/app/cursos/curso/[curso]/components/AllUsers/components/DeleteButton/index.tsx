'use client'
import type { ContentType } from '@/@types/ContentType'
import { deleteCourseContent } from '@/supabase/deleteCourseContent'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DeleteButton({ content }: { content: ContentType }) {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  async function handleDelete() {
    if (!loading) {
      setLoading(true)
      const response = await deleteCourseContent({
        id: content.id,
        tipo: content.tipo_de_midia,
        fileType: content.tipo,
      })

      //console.log(response)

      if (response) {
        router.replace('/cursos')
        router.refresh()
      }
      setLoading(false)
    }
  }
  return (
    <div className="mx-auto w-9/12 p-1 flex justify-center items-center mb-10">
      <button
        type="button"
        className={
          !loading
            ? 'py-1 px-7 bg-red-500 text-white rounded hover:scale-95 hover:opacity-90 hover:duration-150 cursor-pointer'
            : 'py-1 px-7 bg-gray-400 text-white rounded cursor-not-allowed'
        }
        onClick={handleDelete}
        disabled={loading}
      >
        Excluir
      </button>
    </div>
  )
}
