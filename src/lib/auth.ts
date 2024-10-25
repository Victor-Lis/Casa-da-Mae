import type { UserType } from '@/@types/User'
import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'
import { SupabaseAdapter } from '@auth/supabase-adapter'

export const authOptions: AuthOptions = {
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    secret: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  }) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      const usuario = user as unknown as UserType
      session.user = {
        ...session.user,
        id: user.id,
        admin: usuario?.admin,
      } as {
        id: string
        name: string
        email: string
        admin: boolean
      }
      return session
    },
  },
}
