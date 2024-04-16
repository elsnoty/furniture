import { useScroll, motion, useTransform } from "framer-motion";
import { useDarkMode } from "../toggleDarkMode";
import BottomContent from "./leftBottom";
import LeftPhoto from "./leftTop";
import BottomPhoto from "./rightBotttom";
import { useRef } from "react";

const About = () => {
    const ref = useRef(null)
    const {scrollYProgress} =useScroll({
        target: ref,
        offset: ["0 1", "0.6 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const { darkMode } = useDarkMode();

    return ( 
        <>
            <LeftPhoto />
        <hr className="border-[2px] border-brown"/>
        <motion.div 
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}
        className={`flex px-20 py-24 medium:px-5 min-h-[533px] items-center gap-7 large:flex-col  relative
         ${darkMode ? "bg-black text-white" : ""}`}>
            <BottomContent />
            <BottomPhoto />
         </motion.div>
         <hr/>
        </>
     );
}
 
export default About;