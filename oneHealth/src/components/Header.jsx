import { useState, useEffect } from 'react';
import { HamburgerMenu } from './helper/HamburgerMenu';
import '../index.css';
import menu from '/ui/menu.avif';
import { Button } from './helper/Button';

import logo from '/nlogo.avif'

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
        <div className="relative bg-[#0d5d40] shadow-md px-4 md:px-8 lg:px-16 py-4 lg:py-6">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <a href="#" className="z-10">
              <img src={logo} alt="" className="w-32"/>
            </a>
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="w-8 h-8">
                <img src="/ui/menu.avif" className="w-5" alt="menu" />
              </button>
            </div>
            <nav className="hidden lg:flex space-x-16">
                <div onClick={()=>{toSection('home')}} className="no-underline relative cursor-pointer after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-secondary text-base max-[500px]:text-xs text-secondary ">Home</div>
               <div onClick={()=>{toSection('about')}}  className="flex gap-1.5 no-underline relative cursor-pointer  after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-secondary text-base max-[500px]:text-xs text-secondary ">About</div>
                <div onClick={()=>{toSection('services')}}  className="flex gap-1.5 no-underline relative cursor-pointer  after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-secondary text-base max-[500px]:text-xs text-secondary ">Services</div>
                <div onClick={()=>{toSection('benefits')}} className="flex gap-1.5 no-underline relative cursor-pointer  after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-secondary text-base max-[500px]:text-xs text-secondary ">Benefits</div>
                <div onClick={()=>{toSection('team')}} className="flex gap-1.5 no-underline relative cursor-pointer  after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-secondary text-base max-[500px]:text-xs text-secondary ">Team</div>  
                <div onClick={()=>{toSection('testimonials')}} className="flex gap-1.5 no-underline relative cursor-pointer  after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-secondary text-base max-[500px]:text-xs text-secondary ">Testimonials</div>
                <div onClick={()=>{toSection('contact')}}  className="flex gap-1.5 no-underline relative cursor-pointer  after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-secondary text-base max-[500px]:text-xs text-secondary ">Contact</div>

            </nav>
          </div>
        </div>
      </div>
      {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    </div>
  );
}
