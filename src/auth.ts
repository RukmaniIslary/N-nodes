import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import { PrismaAdapter } from "@auth/prisma-adapter";

import { prisma } from "@/lib/prisma";

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({

  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt"
  },

  providers: [

    Credentials({

      name: "credentials",

      credentials: {
        email: {},
        password: {}
      },

      async authorize(credentials) {

        const email =
          credentials.email as string;

        const password =
          credentials.password as string;

        const user =
          await prisma.user.findUnique({
            where: {
              email
            }
          });

        if (!user)
          return null;

        const valid =
          await bcrypt.compare(
            password,
            user.password
          );

        if (!valid)
          return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        };

      }

    })

  ],

  callbacks: {

    async jwt({ token, user }) {

      if (user) {
        token.role =
          (user as any).role;
      }

      return token;
    },

    async session({
      session,
      token
    }) {

      (session.user as any).role =
        token.role;

      return session;
    }

  }

});