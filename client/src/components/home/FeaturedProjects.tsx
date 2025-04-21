import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedProject } from "@/lib/types";

const FeaturedProjects = () => {
  const { data: projects = [], isLoading } = useQuery<FeaturedProject[]>({
    queryKey: ['/api/featured-projects'],
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary">Featured Projects</h2>
          <div className="w-24 h-px bg-accent mx-auto my-6"></div>
          <p className="text-darkText/70">Discover our signature interior designs that transform ordinary spaces into extraordinary experiences.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="group relative overflow-hidden animate-pulse">
                <div className="aspect-[4/5] bg-gray-200"></div>
              </div>
            ))
          ) : (
            projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-playfair text-xl font-medium">{project.title}</h3>
                    <p className="mt-2 text-sm text-white/80">{project.description}</p>
                    <Link href={`/catalogue/${project.id}`}>
                      <a className="mt-4 inline-block text-sm font-montserrat uppercase tracking-wider">
                        View Project <ArrowRight className="ml-2 inline-block" size={14} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/catalogue">
            <Button variant="outline" className="px-8 py-3 border border-primary text-primary font-montserrat text-sm tracking-wider hover:bg-primary/5 transition-colors">
              VIEW ALL PROJECTS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
