import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => scrollTo('hero')} 
          className="text-xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-opacity"
        >
          HG.
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-wide">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="hover:underline underline-offset-4 decoration-1 decoration-gray-400 transition-all"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu placeholder - keeping it simple for single file clarity */}
          <span className="text-xs uppercase tracking-widest">Menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;