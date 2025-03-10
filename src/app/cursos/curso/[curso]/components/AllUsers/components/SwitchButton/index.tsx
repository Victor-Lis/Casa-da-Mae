'use client'
import type { ContentType } from '@/@types/ContentType'
import { moveContentPositionById } from '@/supabase/moveCourseContentPosition'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { FaArrowUpLong, FaArrowDownLong } from 'react-icons/fa6'

export default function SwitchButton({ content }: { content: ContentType }) {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  async function handleSwitch() {
    if (!loading) {
      setLoading(true)

      const props = {
        id: content.id,
        curso: content.curso,
      }
      const response = await moveContentPositionById(props)

      if (!response.error) {
        router.replace('/cursos')
        router.refresh()
      }
      setLoading(false)
    }
  }
  return (
    <button
      type="button"
      className={
        !loading
          ? 'p-1.5 bg-blue-500 text-white rounded hover:scale-95 hover:opacity-90 hover:duration-150 cursor-pointer'
          : 'p-1.5 bg-gray-400 text-white rounded cursor-not-allowed'
      }
      onClick={handleSwitch}
      disabled={loading}
    >
      <FaArrowUpLong className="text-2xl" color="#fff" size={20} />
    </button>
  )
}
