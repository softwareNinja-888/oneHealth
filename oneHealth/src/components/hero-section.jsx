import React, { useState, useEffect } from 'react';
import { HamburgerMenu } from './helper/HamburgerMenu';
import { Button } from './helper/Button';

export function HeaderNew() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed lg:static top-0 left-0 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} z-50`}>
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50 hidden lg:block" 
             style={{ backgroundImage: "url('/ui/menu.avif')" }} />
        <div className="relative bg-secondary/90 lg:bg-secondary/80 shadow-md px-4 md:px-8 lg:px-16 py-4 lg:py-6">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <a href="#" className="z-10">
              <Button text='One Health' />
            </a>
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="w-8 h-8">
                <img src="/ui/menu.avif" className="w-5" alt="menu" />
              </button>
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-primary hover:text-primary/80">Home</a>
              <a href="#services" className="text-primary hover:text-primary/80">Services</a>
              <a href="#about" className="text-primary hover:text-primary/80">About</a>
              <a href="#contact" className="text-primary hover:text-primary/80">Contact</a>
            </nav>
          </div>
        </div>
      </div>
      {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    </div>
  );
};
