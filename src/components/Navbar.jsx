import { Moon, Sun, FolderOpen, User, Languages } from "lucide-react"
import { useTheme } from "../lib/ThemeContext"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-background/80" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-semibold text-foreground">
              {t('name')}
            </h1>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-accent transition-colors group relative"
              aria-label={t('projects')}
            >
              <FolderOpen className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                {t('projects')}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-accent transition-colors group relative"
              aria-label={t('skills')}
            >
              <User className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                {t('skills')}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-accent transition-colors group relative"
              onClick={toggleLanguage}
              aria-label={t('translate')}
            >
              <Languages className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                {t('translate')}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-accent transition-all duration-300 group relative"
              aria-label={t('theme')}
            >
              {theme === "dark" ? (
                <Sun className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 rotate-0 scale-100" />
              ) : (
                <Moon className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 rotate-0 scale-100" />
              )}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                {t('theme')}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
