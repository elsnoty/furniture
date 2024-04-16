import { useDarkMode } from "../toggleDarkMode";
import LeftHero from "./left";
import RightHero from "./right";

const Hero = () => {
    const { darkMode } = useDarkMode();

    return ( 
        <div className={`flex px-20 py-16 medium:px-5 min-h-[533px] items-center gap-7 large:flex-col  relative 
        ${darkMode ? "bg-black text-white" : ""}`}>
        <LeftHero/>
        <RightHero />
        </div>
     );
}
 
export default Hero;