import dots from "../assets/Group 54.png"
import {useEffect, useState} from "react"
const Dots = () => {
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
        <img src={dots} alt="" className={`${width < 1024 ? "hidden" : "block"}` }/>
     );
}
 
export default Dots;