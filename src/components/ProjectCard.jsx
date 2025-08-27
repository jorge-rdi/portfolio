import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ProjectCard({ project }) {
  const { t } = useTranslation()

  return (
    <Card className="border-0 shadow-lg h-full rounded-xl sm:rounded-2xl overflow-hidden">
      <CardContent className="h-full flex flex-col">
        <div className="h-32 sm:h-40 lg:h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full p-2 sm:p-4 rounded-lg sm:rounded-xl h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-3 sm:p-4 lg:p-6 flex-grow flex flex-col">
          <h3 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-primary hover:underline py-1"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              {t('liveDemo')}
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary py-1"
            >
              <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              {t('viewCode')}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}