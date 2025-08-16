import { LightIcon } from "@/components/ui/light-icon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ isNavbar }: { isNavbar?: boolean }) {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button disabled>
        <LightIcon light={theme === "light"} />
      </button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button onClick={toggleTheme} className={`neu-button group cursor-pointer rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300 hover:text-primary ${isNavbar ? 'p-1' : ''}`}>
      <LightIcon light={theme === "dark"} className={`transition-all duration-300 hover:scale-110 group-hover:scale-110 group-hover:drop-shadow-muted-foreground group-hover:drop-shadow-lg ${isNavbar ? 'size-8' : 'size-10'}`} />
    </button>
  )
}
