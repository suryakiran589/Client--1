// components/Header.tsx
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isScrolled, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection 
}) => {
  const navItems = ['Home', 'Services', 'Gallery', 'Contact'];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Amma Invisible Grilling
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative "
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 py-4 px-4 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header