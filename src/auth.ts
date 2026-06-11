import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";


import { prisma } from "@/lib/prisma";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({


  session: {
    strategy: "jwt",
  },

  providers: [

    Credentials({

      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {

        try {

          const email =
            credentials?.email as string;

          const password =
            credentials?.password as string;

          console.log(
            "LOGIN ATTEMPT:",
            email
          );

          const user =
            await prisma.user.findUnique({
              where: {
                email,
              },
            });

          console.log(
            "USER FOUND:",
            !!user
          );

          if (!user) {
            console.log(
              "USER NOT FOUND"
            );
            return null;
          }

          const valid =
            await bcrypt.compare(
              password,
              user.password
            );

          console.log(
            "PASSWORD VALID:",
            valid
          );

          if (!valid) {
            console.log(
              "PASSWORD FAILED"
            );
            return null;
          }

          console.log(
            "LOGIN SUCCESS:",
            user.email
          );

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };

        } catch (error) {

          console.error(
            "AUTHORIZE ERROR:",
            error
          );

          return null;
        }

      },

    }),

  ],

  callbacks: {

    async jwt({
      token,
      user,
    }) {

      if (user) {
        token.role =
          (user as any).role;
      }

      return token;
    },

    async session({
      session,
      token,
    }) {

      (session.user as any).role =
        token.role;

      return session;
    },

  },

});