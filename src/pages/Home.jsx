
import { AboutSection } from "../components/AboutSection"
import { Footer } from "../components/Footer"
import HeroSection from "../components/HeroSection";
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection"
import { StarBackground } from "@/components/StarBackground"
import { ServicesSection } from "../components/ServicesSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      <StarBackground />
      
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <Footer />
      </main>

    </div>
  )
}