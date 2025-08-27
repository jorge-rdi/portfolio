import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "https://www.eduardev.com/_next/image?url=%2Fimages%2Fnasa.png&w=2048&q=75",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    image: "https://www.eduardev.com/_next/image?url=%2Fimages%2Fnasa.png&w=2048&q=75",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/taskapp",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "https://www.eduardev.com/_next/image?url=%2Fimages%2Fnasa.png&w=2048&q=75",
    technologies: ["React", "Python", "FastAPI", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/weather",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics platform for social media performance tracking with data visualization and reporting features.",
    image: "https://www.eduardev.com/_next/image?url=%2Fimages%2Fnasa.png&w=2048&q=75",
    technologies: ["Flutter", "Django", "PostgreSQL", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/analytics",
  },
]

export default function ProjectsSection() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="min-py-16 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projectsTitle')}</h2>

        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full overflow-hidden"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="flex -ml-0 sm:-ml-2">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="basis-full sm:basis-1/2 pl-0 sm:pl-2"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => api && api.scrollPrev()}
              disabled={!api}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index + 1 === current ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => api && api.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => api && api.scrollNext()}
              disabled={!api}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}