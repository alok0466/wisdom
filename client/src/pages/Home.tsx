import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CatalogueGrid from "@/components/catalogue/CatalogueGrid";
import AboutSection from "@/components/about/AboutSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import TeamSection from "@/components/about/TeamSection";
import ContactSection from "@/components/contact/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LUMINA | Interior Design Studio</title>
        <meta name="description" content="LUMINA Interior Design Studio - Crafting spaces that inspire" />
      </Helmet>
      
      <main>
        <HeroSection />
        <FeaturedProjects />
        <CatalogueGrid />
        
        <section id="about" className="py-20 bg-neutral">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection />
            <PhilosophySection />
            <TeamSection />
          </div>
        </section>
        
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
