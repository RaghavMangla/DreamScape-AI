import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Provider } from "@/components/Providers";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { dark,neobrutalism,shadesOfPurple } from '@clerk/themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI ArtScape",
  description: "AI-powered image, video, and music generation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    <html lang="en">
      <body className={cn(
        inter.className,
        "antialiased min-h-screen bg-gray-900 text-white"
      )}>
          <Provider>
           <Navbar /> 
          {children}
          </Provider>
 
      </body>
    </html>
    </ClerkProvider>
  );
}