import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ProjectCard({ project }) {
  const { t } = useTranslation()

  return (
    <Card className="border-0 shadow-lg h-full rounded-2xl overflow-hidden">
      <CardContent className="h-full flex flex-col">
        <div className="h-40 sm:h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full p-4 rounded-xl h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
          <div className="flex gap-4 mt-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              {t('liveDemo')}
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <Github className="h-4 w-4" />
              {t('viewCode')}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}