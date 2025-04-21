import { Link } from "wouter";
import { 
  Instagram, 
  Linkedin, 
  SendIcon 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-6">LUMINA</h3>
            <p className="text-white/70 mb-6">
              Crafting exceptional interior spaces that inspire and enhance life's moments.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat text-sm uppercase font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-white/70 hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/catalogue">
                  <a className="text-white/70 hover:text-accent transition-colors">Catalogue</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white/70 hover:text-accent transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/70 hover:text-accent transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat text-sm uppercase font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">Residential Design</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">Commercial Design</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">Space Planning</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">Custom Furniture</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">Consultation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat text-sm uppercase font-medium mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">Subscribe to receive updates and design inspiration.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 w-full bg-white/10 border border-white/20 focus:outline-none focus:border-accent text-white placeholder-white/50"
              />
              <Button type="submit" className="bg-accent px-4 hover:bg-accent/90 transition-colors">
                <SendIcon className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} LUMINA Interior Design. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm mx-3">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm mx-3">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
