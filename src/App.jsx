import { HeroSection } from "./components/HeroSection"
import { Navbar } from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"
import { SkillsSection } from "./components/SkillsSection"
import { ThemeProvider } from "./lib/ThemeContext"
import { ContactSection } from "./components/ContactSection"
import './i18n';

function App() {
  return (
    <ThemeProvider>
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </ThemeProvider>
  )
}

export default App
