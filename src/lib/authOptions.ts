import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.AUTH_SECRET,

  callbacks: {
    async signIn({ user }) {
      const adminEmail =
        process.env.ADMIN_EMAIL?.trim().toLowerCase();

      const googleEmail =
        user.email?.trim().toLowerCase();

      if (!adminEmail || !googleEmail) {
        return false;
      }

      return googleEmail === adminEmail;
    },

    async redirect({ url, baseUrl }) {
        if (url.startsWith("/")) {
            return `${baseUrl}${url}`;
        }

        if (url.startsWith(baseUrl)) {
            return url;
        }

        return `${baseUrl}/admin/appointments`;
    },
  },

  pages: {
    signIn: "/admin/login",
  },

  session: {
    strategy: "jwt",
  },
};