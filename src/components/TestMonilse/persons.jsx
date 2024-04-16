import pixabay from "../../assets/pexels-pixabay-220453.png"
import andrea from "../../assets/pexels-andrea-piacquadio-774909.png"
import { useDarkMode } from '../toggleDarkMode';

import comma from "../../assets/”.png"
const CardPerson = () => {
    const { darkMode } = useDarkMode();
    const Data = [
        {
          name: "Louis Saville",
          image: pixabay,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          name: "Rekha Varadwaz",
          image: andrea,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ];
      
    return ( 
        <div className={`flex px-36 xlarge:px-24 py-10 large:px-16 justify-between gap-8 large:block medium:px-10 
        ${darkMode ? 'bg-black text-white' : ''}`}>
      {Data.map((ceo, index) => (
        <div key={index} className={`flex shadow-div round py-10 max-h-[260px] max-w-[580px] p-3 relative large:min-w-full large:mb-5 small:mt-32
        ${darkMode ? 'bg-gradient-to-r from-fuchsia-900 to-fuchsia-700 text-white' : ''}`}>
          <img src={ceo.image} alt="" className="max-h-[130px] max-w-[130px] relative -left-10 rounded small:absolute small:-top-28 small:left-4"/>
          <div>
            <div className="flex justify-between items-start pb-3">
              <h3 className="text-xl font-semibold">{ceo.name}<span className="text-sm">/CEO at Google inc</span></h3>
              <img src={comma} alt="" />
            </div>
            <p className="">{ceo.description}</p>
          </div>
        </div>
      ))}
        </div>
     );
}
 
export default CardPerson;