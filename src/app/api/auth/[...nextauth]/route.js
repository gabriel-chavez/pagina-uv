import { login } from "@/services/seguridadService";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
          throw new Error(token.error);
        }        
        return { token: token.datos.token, user: token.datos.user }; 
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, 
    updateAge: 5 * 60, 
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_KEY,  
    verificationOptions: {
      algorithms: ['HS256'],
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {        
        token.accessToken = user.token; 
        token.user = user.user;
      }
      return token;
    },

    async session({ session, token }) {
      // Inyecta el JWT y datos del usuario en la sesión
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
