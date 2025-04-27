import { useQuery } from "@tanstack/react-query";
import { Linkedin, Instagram } from "lucide-react";
import { TeamMember } from "@/lib/types";

const TeamSection = () => {
  const { data: team = [], isLoading } = useQuery<TeamMember[]>({
    queryKey: ['/api/team-members'],
  });

  return (
    <div id="team" className="mt-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-accent font-montserrat text-sm tracking-wider uppercase">The Experts</span>
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mt-2">Our Team</h2>
        <div className="w-24 h-px bg-accent mx-auto my-6"></div>
        <p className="text-darkText/70">Meet the talented individuals who bring our vision to life and make UrbanVision a leader in interior design.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="text-center animate-pulse">
              <div className="aspect-square bg-gray-200 mb-6"></div>
              <div className="h-6 bg-gray-200 rounded mb-2 w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          ))
        ) : (
          team.map((member) => (
            <div key={member.id} className="text-center">
              <div className="aspect-square overflow-hidden mb-6">
                <img 
                  src={member.imageUrl} 
                  alt={`Portrait of ${member.name}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-medium text-primary">{member.name}</h3>
              <p className="text-accent font-montserrat text-sm tracking-wider uppercase mt-1">{member.position}</p>
              <div className="flex justify-center space-x-4 mt-4">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:text-accent transition-colors">
                    <Linkedin size={18} />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noreferrer" className="text-primary hover:text-accent transition-colors">
                    <Instagram size={18} />
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TeamSection;
