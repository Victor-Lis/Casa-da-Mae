'use client'

import { toggleInscriptionStatus } from '@/supabase/toggleInscriptionStatus'
import { useRouter } from 'next/navigation'
import { CgArrowsExchangeAltV } from 'react-icons/cg'

export default function ButtonToggleStatus({
  id,
  status_aprovacao,
}: { id: string; status_aprovacao: boolean }) {
  const router = useRouter()

  async function handleToggleStatus() {
    const response = await toggleInscriptionStatus({ id, status_aprovacao })
    if (response) {
      router.refresh()
    }
  }

  return (
    <button
      type="button"
      className="bg-blue-500 p-2 rounded hover:opacity-85 hover:scale-95 hover:duration-150"
      onClick={handleToggleStatus}
    >
      <CgArrowsExchangeAltV size={20} color="#fff" />
    </button>
  )
}
