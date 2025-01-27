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

    return (
        <>
            <div className={`fixed top-0 left-0 w-full bg-secondary shadow-md transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} px-5 py-6 flex justify-between items-center z-0 h-32`}>
                <a href="#"><Button text='One Health' /></a>
                <div>
                    <img src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
                    {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
                </div>
            </div>
        </>
    );
}
