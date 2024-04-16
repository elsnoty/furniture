import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import sr from "../../assets/sr.png"
import sd from "../../assets/sd.png"
import ere from "../../assets/ere (1).png"
import "./service.css"
import { useDarkMode } from '../toggleDarkMode';

import Dots from '../dots';

const Service = () => {
    const { darkMode } = useDarkMode();
    const [activeServiceIndex, setActiveServiceIndex] = useState(0);

    const services = [
        { name: 'Interior Design', image: sr },
        { name: 'Architecture', image: ere },
        { name: 'Planning', image: sd }
    ];

    const handleLeftClick = () => {
        setActiveServiceIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
        console.log(activeServiceIndex);
    };

    const handleRightClick = () => {
        setActiveServiceIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
        <div className={`px-20 py-24 large:px-5 relative ${darkMode ? 'bg-black text-white' : ''}`}>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="font-[sans-serif] text-gray-600 font-bold">WHAT WE DO</h3>
                    <h1 className="text-5xl font-[sans-serif] font-bold py-5">Our Service</h1>
                </div>
                <div>
                    <button onClick={handleLeftClick}>
                        <FontAwesomeIcon icon={faAngleLeft} size='lg' className='icons btn-hover' />
                    </button>
                    <button onClick={handleRightClick}>
                        <FontAwesomeIcon icon={faAngleRight} size='lg' className='icons btn-hover' />
                    </button>
                </div>
            </div>

            <div className='flex justify-between large:flex-wrap gap-4'>
                {services.map((service, index) => (
                    <div key={index} className={`ser-div round ${index === activeServiceIndex ? 'bg-brown text-white' : darkMode ? 'bg-green-950 text-white' : ''}`}>
                        <img src={service.image} alt="" className='max-h-[40px]' />
                        <div className={`round `}>
                            <h1 className="text-2xl font-bold pb-3">{service.name}</h1>
                            <p className="">Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod temporincididunt ut labore.</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute -bottom-20 right-0 z-40'><Dots /></div>
        </div>
            </>
        
    );
}

export default Service;
