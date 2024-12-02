import { login } from "@/services/seguridadService";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // // Hacer la solicitud a la API de backend para autenticar
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     email: credentials?.email,
        //     password: credentials?.password,
        //   }),
        // });                
        const token = await login(credentials.email, credentials?.password);

        console.log("token=>>>>",token)
        // Obtener la respuesta del backend
        //const user = await res.json();
        
        // Si hay un error, lanzarlo
        if (token.error) {
          console.log("token=>>>>",token)
          throw new Error(token.error);
        }

        // Si la autenticación es exitosa, devolver el usuario
        return token;
      },
    }),
  ],
  callbacks: {
    // Configurar el JWT para incluir el usuario en el token
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    // Configurar la sesión para incluir el usuario en el objeto sesión
    async session({ session, token }) {
        console.log(session, token)
      session.user = token;  // Aquí agregamos el usuario al objeto de la sesión
      return session;
    },
  },
  pages: {
    // Personalizar la página de inicio de sesión
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
