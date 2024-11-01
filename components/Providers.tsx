"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import axios from "axios";


interface ProviderProps extends Partial<ThemeProviderProps> {
  children: React.ReactNode;
}

export function Provider({ children, ...props }: ProviderProps) {
  const { user } = useUser();

  useEffect(() => {
    const createUserIfNeeded = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) return;
      console.log("user",user)
      try {
        

        const response = await axios.post('/api/user', {
          id: user.id,
          name: user.username ?? user.fullName ?? "",
          email: user.primaryEmailAddress.emailAddress,
          imageUrl: user.imageUrl ?? "",
        });

        if (response.data.success) {
          console.log('User profile synced successfully');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };

    if (user) {

      createUserIfNeeded();
    }
  }, [user]);

  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}