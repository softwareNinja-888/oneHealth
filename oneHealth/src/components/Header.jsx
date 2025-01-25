import { useState } from 'react'
import {HamburgerMenu} from './helper/HamburgerMenu'
import '../index.css'

import menu from '/ui/menu.avif'
import { Button } from './helper/Button'

export function Header(){
    const [menuOpen,setMenuOpen] = useState(false)

    return(
        <>
            <div className="h-full px-5 py-6 bg-secondary flex justify-between items-center">
                {/* <div className="flex w-36 justify-center border border-primary bg-primary text-secondary rounded-full py-3 px-3 font-lora font-bold ">One Health</div> */}
                <Button text='One Health'/>
                <div className="">
                    <img src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
                    {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
                </div>
              
            </div>
        </>
    )
}