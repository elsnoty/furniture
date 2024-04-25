import { useDarkMode } from '../toggleDarkMode';
import maskOne from "../../assets/Mask Group (1).png"
import maskTwo from "../../assets/Mask Group (2).png"
import rectangle from "../../assets/Rectangle 31.png"
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
const ContentNews = () => {
    const { darkMode } = useDarkMode();
    const ref = useRef(null)
    const {scrollYProgress} =useScroll({
        target: ref,
        offset: ["0 1", "0.6 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const Data = [
        {
            title: "2020 Interior Design Trends",
          image: maskOne,
          imgTwo: rectangle,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          btn:"CONTINUE READING...."
        },
        {
          title: "28 Notable Product at ARC Interior Design",
          image: maskTwo,
          imgTwo: rectangle,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          btn:"CONTINUE READING...."
        }
      ];
    return ( 
        <div className={`flex px-36 xlarge:px-24 py-16 large:px-16 justify-between gap-8 large:flex-wrap medium:px-5 
        ${darkMode ? 'bg-[#222831] text-white' : ''}`}>
            {
                Data.map((data, inndex)=>(
                    <motion.div 
                    key={inndex}
                    ref={ref}
                    style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                            }}>
                        <div className='relative mb-10 '>
                        <img src={data.image} alt="" className='z-20 relative'/>
                        <img src={data.imgTwo} alt="" className='absolute top-5 left-4 z-0'/>
                        </div>
                        <h1 className='my-3 text-xl font-semibold'>{data.title}</h1>
                        <p>{data.description}</p>
                        <button className='round bg-green-600 p-2 mt-3 btn-hover'>{data.btn}</button>
                    </motion.div>
                ))
            }
        </div>
     );
}
 
export default ContentNews;