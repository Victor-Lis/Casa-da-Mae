'use client'
import { deleteImage } from '@/supabase/deleteImage'
import { useRouter } from 'next/navigation'

import { FiTrash2 } from 'react-icons/fi'

export default function ButtonDelete({ id }: { id: string }) {
  const router = useRouter()

  async function handleDeleteImage() {
    const data = await deleteImage({ fileName: id })
    if (data) {
      router.replace('/arearestrita')
    }
  }
  return (
    <button
      type="button"
      className="absolute top-2 left-2 bg-red-600 p-2 text-white rounded hover:opacity-85 hover:duration-150"
      onClick={handleDeleteImage}
    >
      <FiTrash2 color="#fff" size={20} />
    </button>
  )
}
