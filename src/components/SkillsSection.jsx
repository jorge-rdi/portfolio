import {
  SiPython,
  SiJavascript,
  SiDart,
  SiReact,
  SiFlutter,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiMysql,
  SiMongodb,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { useTranslation } from "react-i18next"

const skills = [
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "Dart", icon: SiDart, color: "text-blue-400" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Flutter", icon: SiFlutter, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "React Native", icon: TbBrandReactNative, color: "text-cyan-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-foreground" },
  { name: "FastAPI", icon: SiFastapi, color: "text-green-600" },
  { name: "Django", icon: SiDjango, color: "text-green-700" },
  { name: "Flask", icon: SiFlask, color: "text-foreground" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
]

export function SkillsSection() {
  const { t } = useTranslation()
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">{t('skillsTitle')}</h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center p-3 sm:p-4 lg:p-6 rounded-lg border border-border bg-card hover:bg-accent transition-all duration-200 group hover:scale-105"
              >
                <IconComponent
                  className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mb-2 sm:mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                />
                <span className="text-xs sm:text-sm lg:text-base font-medium text-foreground text-center leading-tight">{t(skill.name)}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}