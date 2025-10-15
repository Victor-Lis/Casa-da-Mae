// import type { UserType } from '@/@types/User'
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import prisma from "../lib/prisma";

export const authOptions: AuthOptions = {
  // adapter: SupabaseAdapter({
  //   url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  //   secret: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  // }) as any,
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const existentUser = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
            password: credentials?.password,
          },
        });

        if (existentUser) {
          return existentUser;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      const typedUser = user as unknown as UserType;
      session.user = typedUser;
      return session;
    },
  },
};
