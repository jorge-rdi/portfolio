import { Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function HeroSection() {
  const { t } = useTranslation()
  
  return (
    <section className="py-16 flex items-center justify-center max-w-2xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image and Dock */}
        <div className="flex flex-col space-y-6 items-center md:items-start">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="/img.png"
              alt="John Doe"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-2 border-border"
            />
          </div>

          <div className="flex items-center justify-center space-x-2 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 rounded-full px-4 py-3 shadow-lg w-fit mx-auto">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-accent group relative" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-foreground group-hover:text-blue-500 transition-colors duration-300" />
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('github')}
                </span>
              </a>
            </Button>

            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-accent group relative" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-foreground group-hover:text-orange-500 transition-colors duration-300" />
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('linkedin')}
                </span>
              </a>
            </Button>

            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-accent group relative" asChild>
              <a href="/resume.pdf" download aria-label={t('download')}>
                <Download className="h-5 w-5 text-foreground group-hover:text-green-500 transition-colors duration-300" />
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('download')}
                </span>
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Text Content */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t('greeting' ) + ' ' } 
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                 {t('name')}
              </span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  )
}
