import { useState, useRef, useEffect } from 'react';
import { MotionConfig, motion } from "framer-motion";
import { useDarkMode } from '../toggleDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'; 
import NavLinks from './navLinks';

const NavIcon = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [showMenu, setShowMenu] = useState(false);
    const burgerRef = useRef(null);
    const menuRef = useRef(null);
    
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                !burgerRef.current.contains(event.target) &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setShowMenu(false);
            }
        };

        if (showMenu) {
            window.addEventListener("click", handleOutsideClick);
        } else {
            window.removeEventListener("click", handleOutsideClick);
        }

        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [showMenu]);


    const handleClick = () => {
      setShowMenu((prevActive) => !prevActive);
    };
    
    const VARIANTS = {
        top: {
            open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
            },
            closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
            },
        },
        middle: {
            open: {
                rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
                rotate: ["-45deg", "0deg", "0deg"],
            },
        },
        bottom: {
            open: {
                rotate: ["0deg", "0deg", "45deg"],
                bottom: ["35%", "50%", "50%"],
                left: "50%",
            },
            closed: {
                rotate: ["45deg", "0deg", "0deg"],
                bottom: ["50%", "50%", "35%"],
                left: "calc(50% + 10px)",
            },
        },
    };

    return ( 
        <div className='flex items-center'>
            <MotionConfig
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >
                <motion.button
                    initial={false}
                    animate={showMenu ? "open" : "closed"}
                    onClick={handleClick}
                    className="relative h-16 w-20 rounded-full bg-white/0 transition-colors z-20"
                    ref={burgerRef}
                >
                    <motion.span
                        variants={VARIANTS.top}
                        className={`absolute h-1 w-10 bg-black ${darkMode ? "bg-white" : ""}`}
                        style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                    />
                    <motion.span
                        variants={VARIANTS.middle}
                        className={`absolute h-1 w-10 bg-black ${darkMode ? "bg-white" : ""}`}
                        style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                    />
                    <motion.span
                        variants={VARIANTS.bottom}
                        className={`absolute h-1 w-5 bg-black ${darkMode ? "bg-white" : ""}`}
                        style={{
                            x: "-50%",
                            y: "50%",
                            bottom: "35%",
                            left: "calc(50% + 10px)",
                        }}
                    />
                </motion.button>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: showMenu ? 1 : 0, x: showMenu ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-16 right-0 px-5 py-3 min-w-[60vw] rounded-lg z-30 ${darkMode ? "bg-gradient-to-tl from-gray-900 to-gray-800 text-white": "bg-green-900"} ${showMenu ? 'block' : 'hidden'}`}
                    ref={menuRef}
                >
                    <NavLinks/>
                    <a href="#signup"><button className="bg-brown text-white rounded-br-lg rounded-tl-lg p-1 mr-3 my-2 btn-hover">Sign Up</button></a>
                </motion.div>
            </MotionConfig>
            <FontAwesomeIcon icon={faMoon} onClick={toggleDarkMode} size='lg' className={`cursor-pointer transition-all transform duration-500 hover:rotate-180`}/>
        </div>
    );
}

export default NavIcon;
