import { Lightbulb, Scale, Handshake } from "lucide-react";

const PhilosophySection = () => {
  const philosophyItems = [
    {
      icon: <Lightbulb className="text-accent text-xl" />,
      title: "Thoughtful Innovation",
      description: "We embrace innovation not for its own sake, but as a means to create more beautiful, functional, and sustainable spaces. Every design choice serves a purpose."
    },
    {
      icon: <Scale className="text-accent text-xl" />,
      title: "Balance & Harmony",
      description: "We believe in creating spaces where aesthetic beauty and practical functionality exist in perfect equilibrium. Neither form nor function should be compromised."
    },
    {
      icon: <Handshake className="text-accent text-xl" />,
      title: "Collaborative Process",
      description: "We see design as a dialogue, not a monologue. Our best work emerges from close collaboration with our clients, understanding their vision and transforming it into reality."
    }
  ];

  return (
    <div className="mt-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-accent font-montserrat text-sm tracking-wider uppercase">Our Approach</span>
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mt-2">Design Philosophy</h2>
        <div className="w-24 h-px bg-accent mx-auto my-6"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {philosophyItems.map((item, index) => (
          <div key={index} className="bg-white p-8 shadow-sm transition-transform hover:-translate-y-2 duration-300">
            <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="font-playfair text-xl font-medium text-primary mb-4">{item.title}</h3>
            <p className="text-darkText/70">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhilosophySection;
