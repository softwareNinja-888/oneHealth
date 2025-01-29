import { useState, useEffect } from 'react';
import { HamburgerMenu } from './helper/HamburgerMenu';
import '../index.css';
import menu from '/ui/menu.avif';
import { Button } from './helper/Button';

export function Header() {
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

  function toSection (section) {
    const contactSection = document.getElementById(section);
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`fixed lg:static top-0 left-0 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} z-100`}>
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50 hidden lg:block" 
             style={{ backgroundImage: "url('/ui/menu.avif')" }} />
        <div className="relative bg-primary/90 lg:bg-primary/80 shadow-md px-4 md:px-8 lg:px-16 py-4 lg:py-6">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <a href="#" className="z-10">
              <Button text='One Health' bg="bg-secondary" color="text-primary" />
            </a>
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="w-8 h-8">
                <img src="/ui/menu.avif" className="w-5" alt="menu" />
              </button>
            </div>
            <nav className="hidden lg:flex space-x-8">
                <div onClick={()=>{toSection('home')}} className="cursor-pointer text-secondary hover:text-secondary/80 hover:underline">Home</div>
                <div onClick={()=>{toSection('about')}}  className="cursor-pointer text-secondary hover:text-secondary/80 hover:underline">About</div>
                <div onClick={()=>{toSection('services')}}  className="cursor-pointer text-secondary hover:text-secondary/80 hover:underline">Services</div>
                <div onClick={()=>{toSection('benefits')}} className="cursor-pointer text-secondary hover:text-secondary/80 hover:underline">Benefits</div>
                <div onClick={()=>{toSection('team')}} className="cursor-pointer text-secondary hover:text-secondary/80 hover:underline">Team</div>  
                <div onClick={()=>{toSection('testimonials')}} className="cursor-pointer text-secondary hover:text-secondary/80 hover:underline">Testimonials</div>
                <div onClick={()=>{toSection('contact')}}  className="cursor-pointer text-secondary hover:text-secondary/80 hover:underline">Contact</div>

            </nav>
          </div>
        </div>
      </div>
      {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    </div>
  );
}
