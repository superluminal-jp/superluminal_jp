"use client"

import * as React from "react"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface SidebarProps {
  children: React.ReactNode
  className?: string
}

/**
 * Toggleable Sidebar Component
 * 
 * A responsive sidebar that can be toggled open/closed using a menu button.
 * On mobile devices, it appears as a slide-in sheet from the left.
 * 
 * @param children - Content to display inside the sidebar
 * @param className - Additional CSS classes
 */
export function Sidebar({ children, className }: SidebarProps) {
  const [open, setOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed left-4 top-4 z-50"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className={cn("w-80 p-0", className)}>
        <SheetHeader className="p-6 border-b flex flex-row items-center justify-between">
          <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </SheetHeader>
        <div className="p-6">{children}</div>
      </SheetContent>
    </Sheet>
  )
}

