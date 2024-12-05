// src/app/api/auth/[...nextauth]/route.js

import { login } from "@/services/seguridadService";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Definir authOptions
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        usuario: { label: "Usuario", type: "text", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const token = await login(credentials.usuario, credentials?.password);
        console.log("token=>>>>", token);

        if (token.error) {
          console.log("token=>>>>", token);
          throw new Error(token.error);
        }

        return token.datos; 
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user }; 
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token; 
      console.log("route.js: session:", session, "token:", token);
      return session;
    },
  },
  pages: {
    signIn: "/login", 
  },
};

const handler = NextAuth(authOptions); 

export { handler as GET, handler as POST }; 
