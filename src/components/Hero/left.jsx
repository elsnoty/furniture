import { useTypingEffect } from "../../util/textReval";
import Dots from "../dots";
const LeftHero = () => {
    const typedText = useTypingEffect("Create Your Interior Design.", 100, true)
    return ( 
        <>
        <div className="w-1/2 large:w-full">
            <h3 className="font-[sans-serif] text-gray-600 font-bold">MODERN INTERIOR</h3>
            <h1 className="text-5xl title-font">{typedText}</h1>
            <p className="text-gray-600 font-[sans-serif]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.</p>
            <button className="round btn-hover bg-green-600 font-bold text-white my-3">CONTACT</button>
        </div>
    <div className="absolute -bottom-20 left-0 z-30"><Dots /></div>
    </>
     );
}
 
export default LeftHero;