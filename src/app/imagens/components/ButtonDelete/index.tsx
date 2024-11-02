'use client'
import { deleteImage } from '@/supabase/deleteImage'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { FiTrash2 } from 'react-icons/fi'

export default function ButtonDelete({ id }: { id: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  async function handleDeleteImage() {
    if (!loading) {
      setLoading(true)
      const data = await deleteImage({ fileName: id, dir: 'contribuicoes' })
      if (data) {
        router.replace('/arearestrita')
      }
      setLoading(false)
    }
  }
  return (
    <button
      type="button"
      className={
        !loading
          ? 'absolute top-2 left-2 bg-red-600 p-2 text-white rounded hover:opacity-85 hover:duration-150 cursor-pointer'
          : 'absolute top-2 left-2 bg-gray-400 p-2 text-white rounded cursor-not-allowed'
      }
      onClick={handleDeleteImage}
      disabled={loading}
    >
      <FiTrash2 color="#fff" size={20} />
    </button>
  )
}
