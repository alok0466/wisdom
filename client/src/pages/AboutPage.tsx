import { Helmet } from "react-helmet";
import AboutSection from "@/components/about/AboutSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import TeamSection from "@/components/about/TeamSection";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | UrbanVision Interior Design</title>
        <meta name="description" content="Learn about UrbanVision Interior Design, our story, philosophy, and team of dedicated designers." />
      </Helmet>
      
      <main className="pt-24">
        <section id="about" className="py-20 bg-neutral">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection />
            <PhilosophySection />
            {/* <TeamSection /> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
