import { useDarkMode } from '../toggleDarkMode';
const Title = () => {
    const { darkMode } = useDarkMode();
    return ( 
        <>
        <div className={`px-20 py-10 medium:px-5  grid place-items-center text-center ${darkMode ? 'bg-black text-white' : ''}`}>
            <h3 className="font-[sans-serif] text-gray-600 font-bold">TESTIMONIALS</h3>
            <h1 className="text-4xl title-font">Client says about us</h1>
        </div>
            
            </>
        
     );
}
 
export default Title;