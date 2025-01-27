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
        //recaptchaToken: { label: "reCAPTCHA Token", type: "text" }, 
      },
      async authorize(credentials) {
        const { usuario, password, recaptchaToken } = credentials;

        // Verificar reCAPTCHA con Google
        const recaptchaResponse = await fetch(
          "https://www.google.com/recaptcha/api/siteverify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              secret: process.env.RECAPTCHA_SECRET_KEY, 
              response: recaptchaToken,
            }),
          }
        );

        const recaptchaData = await recaptchaResponse.json();

        // if (!recaptchaData.success) {
        //   console.error("Verificación de reCAPTCHA fallida:", recaptchaData);
        //   throw new Error("La verificación de reCAPTCHA falló. Por favor, intenta de nuevo.");
        // }

        // Llamada al servicio de login
        const token = await login(usuario, password);

        console.log("token=>>>>", token);
        if (token.error) {
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
      return session;
    },
  },
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
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
