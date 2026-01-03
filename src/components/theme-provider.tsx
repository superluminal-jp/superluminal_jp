"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

interface ThemeProviderProps {
  children: React.ReactNode
}

/**
 * Theme Provider Component
 * 
 * Wraps the application with next-themes ThemeProvider to enable
 * dark mode functionality. Uses class-based theme switching.
 * 
 * @param children - Child components to wrap with theme provider
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
    >
      {children}
    </NextThemesProvider>
  )
}

