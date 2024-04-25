import Dots from "../dots";
import about from "../../assets/Group 73.png"
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDarkMode } from "../toggleDarkMode";
const LeftPhoto = () => {
    const ref = useRef(null)
    const {scrollYProgress} =useScroll({
        target: ref,
        offset: ["0 1", "0.6 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const { darkMode } = useDarkMode();

    return ( 
        <motion.div 
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}
        className={`flex px-20 py-24 medium:px-5 min-h-[533px] items-center gap-7 large:flex-col  relative
        ${darkMode ? "bg-[#222831] text-white" : ""}`}>
            <div className="relative w-2/4 large:w-full"><img src={about} alt="" /></div>
        <div className="w-1/2 large:w-full">
            <h3 className="font-[sans-serif] text-gray-600 font-bold">ABOUT US</h3>
            <h1 className="text-5xl title-font">Interioris The Will
            of An Epoch Mextreo</h1>
            <p className="text-gray-600 font-[sans-serif]">There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form injected
            humour, or randomised words which do not look even slightly
            believable.If you are going to use a passage of Lorem Ipsum,
            sure there is not anything embarrassing hidden the middleof text.
                All the Lorem Ipsum generators on the Internettend to repeat
                predefined chunks as necessary,making this the first true
                generator on the Internet.</p>
            <button className="round btn-hover bg-green-600 font-bold text-white mt-5">Learn More</button>
        </div>
        
            <div className="absolute -bottom-20 left-0 z-40"><Dots /></div>
        </motion.div>
    );
}
 
export default LeftPhoto;