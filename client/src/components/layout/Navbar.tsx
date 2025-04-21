import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const scrolled = useScroll(100);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const handleNavLinkClick = (href: string) => {
    setLocation(href);
    closeMenu();
  };

  return (
    <header 
      className={`fixed w-full bg-neutral/80 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-playfair font-semibold text-primary tracking-wider">
              LUMINA
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 font-montserrat text-sm font-medium">
            <Link href="/">
              <a className="nav-link">HOME</a>
            </Link>
            <Link href="/catalogue">
              <a className="nav-link">CATALOGUE</a>
            </Link>
            <Link href="/about">
              <a className="nav-link">ABOUT</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">CONTACT</a>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="text-lg" /> : <Menu className="text-lg" />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 bg-neutral ${
          isMenuOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 font-montserrat text-sm font-medium">
          <a 
            href="/" 
            className="py-2 border-b border-secondary/30"
            onClick={() => handleNavLinkClick("/")}
          >
            HOME
          </a>
          <a 
            href="/catalogue" 
            className="py-2 border-b border-secondary/30"
            onClick={() => handleNavLinkClick("/catalogue")}
          >
            CATALOGUE
          </a>
          <a 
            href="/about" 
            className="py-2 border-b border-secondary/30"
            onClick={() => handleNavLinkClick("/about")}
          >
            ABOUT
          </a>
          <a 
            href="/contact" 
            className="py-2"
            onClick={() => handleNavLinkClick("/contact")}
          >
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
