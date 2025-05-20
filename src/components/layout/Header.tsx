
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="relative flex h-9 w-9 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-yellow-400">
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
            </span>
            <span className="font-bold text-xl text-white">
              <span className="text-yellow-400">LUMINAK</span> 4 AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium text-white hover:text-yellow-400 transition">Home</Link>
            <Link to="/services" className="font-medium text-white hover:text-yellow-400 transition">Services</Link>
            <Link to="/about" className="font-medium text-white hover:text-yellow-400 transition">About Us</Link>
            <Link to="/case-studies" className="font-medium text-white hover:text-yellow-400 transition">Case Studies</Link>
            <Link to="/blog" className="font-medium text-white hover:text-yellow-400 transition">Blog</Link>
            <Link to="/contact" className="font-medium text-white hover:text-yellow-400 transition">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link to="/" className="font-medium text-white hover:text-yellow-400 transition p-2" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="font-medium text-white hover:text-yellow-400 transition p-2" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="font-medium text-white hover:text-yellow-400 transition p-2" onClick={toggleMenu}>About Us</Link>
            <Link to="/case-studies" className="font-medium text-white hover:text-yellow-400 transition p-2" onClick={toggleMenu}>Case Studies</Link>
            <Link to="/blog" className="font-medium text-white hover:text-yellow-400 transition p-2" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className="font-medium text-white hover:text-yellow-400 transition p-2" onClick={toggleMenu}>Contact</Link>
            <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-slate-900">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
