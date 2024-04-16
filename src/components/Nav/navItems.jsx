import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'; 
import "./nav.css"
import { useDarkMode } from "../toggleDarkMode";
import NavLinks from "./navLinks";
import { useState, useEffect } from "react";
import NavIcon from "./navIcon";
const Navitems = () => {

    const { darkMode, toggleDarkMode } = useDarkMode();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return ( 
        <nav className={`flex justify-between px-20 py-3 items-center large:px-2 medium:px-10 small:px-5 ${darkMode ? 'bg-black text-white' : ''}`}>
        <div className="z-30 cursor-pointer"> 
        <img src={logo} alt=""/>
        </div>
        {width > 791 ?
        <>
        <NavLinks/>
        <div>
        <a href="#signup"><button className="bg-brown text-white round btn-hover">Sign Up</button></a> 
            <FontAwesomeIcon icon={faMoon} className={`cursor-pointer transition-all transform duration-500 hover:rotate-180`} onClick={toggleDarkMode} size="lg"/>
            </div>
            </>
            :
            <NavIcon/>
            }
        
        </nav>
     );
}
 
export default Navitems;