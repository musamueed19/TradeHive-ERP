import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";

import Credentials from "next-auth/providers/credentials";
// import { email } from "zod";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Strapi",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              identifier: credentials.email,
              password: credentials.password,
            }),
          }
        );

        // now get res
        const data = await res.json();
        // console.log(res, '---------DATA---------', data)
        // console.log(res.ok, data?.jwt)

        if (!res?.ok || !data?.jwt) {
          throw new Error(data?.error?.message || "Login failed");
        }

        // return the user object to store in session
        return {
          id: data.user.id,
          name: data.user.username,
          email: data.user.email,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          jwt: data.jwt,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.jwt = token.jwt;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      return session;
    },
  },
  pages: {
    signIn: '/login', // your custom Login Page
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
});

export {handler as GET, handler as POST }