'use client'

import { signOut } from 'next-auth/react'

export default function ButtonLogOut() {
  async function handleLogout() {
    await signOut()
  }
  return (
    <button
      type="button"
      onClick={handleLogout}
      className="bg-red-400 text-white text-2xl uppercase px-6 py-1 rounded hover:opacity-85 hover:scale-105 hover:duration-150"
    >
      Sair
    </button>
  )
}
