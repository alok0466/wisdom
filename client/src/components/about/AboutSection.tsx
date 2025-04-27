import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="aspect-[4/5] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Interior designer's workspace" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-lg w-48 h-48 flex items-center justify-center">
          <div className="text-center">
            <span className="font-playfair text-4xl font-semibold text-accent">3</span>
            <p className="font-montserrat text-sm tracking-wider text-primary mt-2">YEARS OF EXPERIENCE</p>
          </div>
        </div>
      </div>
      
      <div>
        <span className="text-accent font-montserrat text-sm tracking-wider uppercase">Our Story</span>
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mt-2">About UrbanVision</h2>
        <div className="w-16 h-px bg-accent my-6"></div>
        
        <div className="prose prose-lg max-w-none text-darkText/80">
          <p>UrbanVision was founded in 2023 with a simple yet powerful mission: to create interiors that inspire and enhance the human experience. We believe that thoughtful design has the power to transform not just spaces, but lives.</p>
          
          <p>Our team of passionate designers brings together diverse backgrounds and perspectives, united by a shared commitment to excellence and innovation. We approach each project as a unique opportunity to tell a story through space, light, texture, and form.</p>
          
          <p>At UrbanVision, we don't just design interiors – we craft experiences that reflect the personality, needs, and aspirations of our clients. From concept to completion, we work closely with you to ensure that every detail aligns with your vision.</p>
        </div>
        
        {/* <div className="mt-8">
          <Link href="#team">
            <Button variant="outline" className="px-8 py-3 border border-primary text-primary font-montserrat text-sm tracking-wider hover:bg-primary/5 transition-colors">
              MEET OUR TEAM
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
