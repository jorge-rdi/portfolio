import { Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function HeroSection() {
  const { t } = useTranslation()
  
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Image and Dock */}
          <div className="flex flex-col space-y-6 items-center lg:items-start order-2 lg:order-1">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="/img.png"
              alt="John Doe"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg border-2 border-border"
            />
          </div>

          <div className="flex items-center justify-center space-x-2 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg w-fit">
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-accent group relative" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-foreground group-hover:text-blue-500 transition-colors duration-300" />
                <span className="absolute -bottom-8 sm:-bottom-9 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                  {t('github')}
                </span>
              </a>
            </Button>

            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-accent group relative" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-foreground group-hover:text-orange-500 transition-colors duration-300" />
                <span className="absolute -bottom-8 sm:-bottom-9 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                  {t('linkedin')}
                </span>
              </a>
            </Button>

            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-accent group relative" asChild>
              <a href="/resume.pdf" download aria-label={t('download')}>
                <Download className="h-4 w-4 sm:h-5 sm:w-5 text-foreground group-hover:text-green-500 transition-colors duration-300" />
                <span className="absolute -bottom-8 sm:-bottom-9 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                  {t('download')}
                </span>
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Text Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-1 lg:order-2">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              {t('greeting' ) + ' ' } 
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                 {t('name')}
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
            {t('description')}
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}
