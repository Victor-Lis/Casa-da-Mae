'use client'

import { SessionProvider, type SessionProviderProps } from 'next-auth/react'

export const AuthProvider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>
}
