import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 lg:pt-0 lg:h-screen relative overflow-hidden">
      <div className="lg:absolute inset-0 z-0">
        <div className="h-[50vh] lg:h-full w-full relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Elegant living room with minimalist design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:h-screen flex flex-col justify-center">
        <div className="lg:w-1/2 py-12 lg:py-0 bg-neutral/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-primary">
            Crafting Spaces That Inspire
          </h1>
          <p className="mt-6 text-lg md:text-xl text-darkText/80 max-w-xl">
            Where artistry meets functionality. We design interiors that reflect your personality and elevate your daily experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/catalogue">
              <Button className="px-8 py-3 bg-accent text-white font-montserrat text-sm tracking-wider hover:bg-accent/90 transition-colors">
                EXPLORE DESIGNS
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="px-8 py-3 border border-primary text-primary font-montserrat text-sm tracking-wider hover:bg-primary/5 transition-colors">
                ABOUT US
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <Link href="/catalogue">
          <a className="text-white animate-bounce block">
            <ChevronDown className="opacity-80" />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
