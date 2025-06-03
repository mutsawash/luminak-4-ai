
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Enable/disable body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-yellow-400' : 'text-white';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" aria-label="Luminak 4 AI Homepage">
            <img 
              src="/lovable-uploads/5e18e4ae-48d3-4910-b481-84a69da06612.png" 
              alt="Luminak 4 AI Logo" 
              className="h-9 w-auto"
            />
            <span className="font-bold text-xl text-white">
              <span className="text-yellow-400">LUMINAK</span> 4 AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
            <Link to="/" className={`font-medium hover:text-yellow-400 transition ${isActive('/')}`}>Home</Link>
            <Link to="/services" className={`font-medium hover:text-yellow-400 transition ${isActive('/services')}`}>Services</Link>
            <Link to="/about" className={`font-medium hover:text-yellow-400 transition ${isActive('/about')}`}>About Us</Link>
            <Link to="/case-studies" className={`font-medium hover:text-yellow-400 transition ${isActive('/case-studies')}`}>Case Studies</Link>
            <Link to="/blog" className={`font-medium hover:text-yellow-400 transition ${isActive('/blog')}`}>Blog</Link>
            <Link to="/contact" className={`font-medium hover:text-yellow-400 transition ${isActive('/contact')}`}>Contact</Link>
            <Link to="/careers" className={`font-medium hover:text-yellow-400 transition ${isActive('/careers')}`}>Careers</Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/get-started">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 transform hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-md hover:bg-slate-800/50 transition-colors"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <img 
                src="/lovable-uploads/5e18e4ae-48d3-4910-b481-84a69da06612.png" 
                alt="Luminak 4 AI Logo" 
                className="h-9 w-auto"
              />
              <span className="font-bold text-xl text-white">
                <span className="text-yellow-400">LUMINAK</span> 4 AI
              </span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2 rounded-md hover:bg-slate-800/50"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-8">
            <nav className="flex flex-col space-y-6" aria-label="Mobile Navigation">
              <Link to="/" className={`font-medium text-2xl hover:text-yellow-400 transition ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" className={`font-medium text-2xl hover:text-yellow-400 transition ${isActive('/services')}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/about" className={`font-medium text-2xl hover:text-yellow-400 transition ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/case-studies" className={`font-medium text-2xl hover:text-yellow-400 transition ${isActive('/case-studies')}`} onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
              <Link to="/blog" className={`font-medium text-2xl hover:text-yellow-400 transition ${isActive('/blog')}`} onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/contact" className={`font-medium text-2xl hover:text-yellow-400 transition ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/careers" className={`font-medium text-2xl hover:text-yellow-400 transition ${isActive('/careers')}`} onClick={() => setIsMenuOpen(false)}>Careers</Link>
            </nav>
          </div>
          <div className="p-4">
            <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 py-6 text-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
