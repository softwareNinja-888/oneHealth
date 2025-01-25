
import React from "react";
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


  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0  bg-opacity-100 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={setMenuOpen} // Close menu when clicking outside
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      />

      {/* Animated Menu */}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-secondary"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {/* CLOSE BTN */}
        <img src={close} onClick={() => setMenuOpen(false)} className="absolute top-10 right-10 text-2xl w-5" />

        {/* Links */}
        <nav className="flex flex-col space-y-4 font-roboto text-primary text-xl items-center">
          <div className="dark:text-white hover:underline">About</div>
          <div className="dark:text-white hover:underline">Service</div>
          <div className="dark:text-white hover:underline">Benefits</div>
          <div className="dark:text-white hover:underline">Meet the Team</div>
          <div className='dark:text-white'>Testimonials</div>
          <div className='dark:text-white'>Contact Form</div>
        </nav>     
        </motion.div>
    </>
  );
};
