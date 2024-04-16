import { useDarkMode } from '../toggleDarkMode';
const TitleNews = () => {
    const { darkMode } = useDarkMode();
    return ( 
        <>
        <div className={`px-20 py-10 medium:px-5  grid place-items-center text-center ${darkMode ? 'bg-black text-white' : ''}`}>
            <h3 className="font-[sans-serif] text-gray-600 font-bold">LETEST NEWS</h3>
            <h1 className="text-4xl title-font">From Our Blog</h1>
        </div>
            </>
        
     );
}
 
export default TitleNews;