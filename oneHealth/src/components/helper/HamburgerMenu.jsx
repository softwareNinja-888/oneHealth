
import close from '/ui/close.avif'

import { motion } from "framer-motion";

export function HamburgerMenu({ menuOpen, setMenuOpen }){


  // Animation variants for menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  function handleClick(id){
    const section = document.getElementById(id)
    section ? window.scrollTo({top: section.offsetTop -120, behavior:"smooth"}) : null;
    setMenuOpen(!menuOpen)
  }



  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0  bg-opacity-100 z-100 "
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={setMenuOpen} // Close menu when clicking outside
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      />

      {/* Animated Menu */}
      <motion.div
        className="fixed inset-0 z-150 bg-secondary flex flex-col items-center justify-center h-screen w-screen"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {/* CLOSE BTN */}
        <img src={close} onClick={() => setMenuOpen(false)} className="absolute top-10 right-10 text-2xl w-5" />

        {/* Links */}
        <nav className="flex flex-col space-y-4 font-roboto text-primary text-2xl items-center gap-6">      
          <div onClick={()=>{handleClick('about')}} className=" hover:underline">About</div>
          <div onClick={()=>{handleClick('services')}} className=" hover:underline">Services</div>
          <div onClick={()=>{handleClick('benefits')}} className=" hover:underline">Benefits</div>
          <div onClick={()=>{handleClick('testimonials')}} className='hover:underline'>Testimonials</div>
          <div onClick={()=>{handleClick('contact')}} className='hover:underline'>Contact Form</div>
          <div onClick={()=>{handleClick('team')}} className=" hover:underline">Meet the Team</div>  
        </nav>     
        </motion.div>
    </>
  );
};
