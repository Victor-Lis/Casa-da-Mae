'use client'
import type { ContentType } from '@/@types/ContentType'
import { setContentAsFavorite } from '@/supabase/setContentAsFavorite'
import { FaRegStar } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function FavoriteButton({ content }: { content: ContentType }) {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  async function handleFavorite() {
    if (!loading) {
      setLoading(true)
      const response = await setContentAsFavorite({
        id: content.id,
      })

      if (response) {
        router.replace('/cursos')
        router.refresh()
      }
      setLoading(false)
    }
  }
  return (
    <button
      type="button"
      // className={
      //   !loading && !content.is_favorite
      //     ? 'p-1.5 bg-yellow-500 text-white rounded hover:scale-95 hover:opacity-90 hover:duration-150 cursor-pointer'
      //     : 'p-1.5 bg-gray-400 text-white rounded cursor-not-allowed'
      // }
      className={
        !loading
          ? 'p-1.5 bg-yellow-500 text-white rounded hover:scale-95 hover:opacity-90 hover:duration-150 cursor-pointer'
          : 'p-1.5 bg-gray-400 text-white rounded cursor-not-allowed'
      }
      onClick={handleFavorite}
      // disabled={loading && content.is_favorite}
      disabled={loading}
    >
      <FaRegStar size={20} color="#FFF" />
    </button>
  )
}
