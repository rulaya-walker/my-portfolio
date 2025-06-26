import { useState } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import {LINKS} from "../constants"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto md:mh-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
            <a href="#home">Ganesh Danuwar</a>
        </div>
        <div className="hidden md:flex space-x-4">
        {LINKS.map((link,index) => (
            <a key={index} href={link.href} className="text-white hover:text-stone-400 transition-colors duration-300">
                {link.label}
            </a>
        ))}
        </div>

        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label={menuOpen ? "Close menu" : "Open menu"}>
                {menuOpen ? (<RiCloseFill className="w-6 h-6 cursor-pointer" />) : (<RiMenuFill className="w-6 h-6 cursor-pointer" />)}
            </button>
        </div>

        </div>
        {menuOpen && (
            <div className="md:hidden bg-stone-950/30 backdrop-blur-lg p-4 rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
                <ul className="space-y-2">
                    {LINKS.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="text-white hover:text-stone-400 transition-colors duration-300 block">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar