'use client'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export default function SignUpBox() {
  async function handleLogin() {
    await signIn()
  }

  return (
    <div className="flex flex-col justify-center items-center bg-tertiary px-5 py-10 rounded mx-4 max-w-96">
      <h1 className="text-3xl text-white font-bold text-center mb-2">
        Acesse sua conta!
      </h1>
      <h2 className="text-xl text-white text-center">
        Para mais informações sobre você, clique no botão abaixo e faça seu
        login!
      </h2>
      <button
        type="button"
        className="bg-white flex justify-center items-center gap-x-1 px-4 py-1 rounded-md hover:opacity-85 hover:scale-105 hover:duration-150 mt-6"
        onClick={handleLogin}
      >
        <FcGoogle size={30} />
        <h2 className="text-2xl text-primary">Entrar</h2>
      </button>
    </div>
  )
}
