import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'
import { SupabaseAdapter } from '@auth/supabase-adapter';
 
export const authOptions: AuthOptions = {
    adapter: SupabaseAdapter({
      url: process.env.SUPABASE_URL as string,
      secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
    }) as any,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      })
    ],
    callbacks: {
      async session({ session, token, user, }){
        session.user = { ...session.user, id: user.id } as {
          id: string,
          name: string;
          email: string;
        }
        return session;
      }
    }
  }