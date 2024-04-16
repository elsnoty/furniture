import { useDarkMode } from "../toggleDarkMode";

const StatsCard = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
    <div className={`px-20 py-24 medium:px-5 grid place-items-center text-center 
    ${darkMode ? "bg-black text-white" : "bg-gray-100"}`}>

      <h1 className="text-4xl title-font "><span className="block">3000+</span> Completed Work</h1>
      <h1 className="text-4xl title-font ">Which WE have Successfully Done</h1>
      <div className={`flex flex-wrap gap-5 justify-around w-full relative
      ${darkMode ? "text-black" : "bg-gray-100"}`}>

        <div className="card round">
          <span className="text-4xl font-bold">980</span>
          <p>Project</p>
          </div>
        <div className="card round">
          <span className="text-4xl font-bold">520</span>
          <p>Happy Client</p>
          </div>
        <div className="card round">
          <span className="text-4xl font-bold">330</span>
          <p>Winners</p>
          </div>
        <div className="card round">
          <span className="text-4xl font-bold">120</span>
          <p>Recoment</p>
          </div>
          <hr className="border-[2px] border-brown w-[80%] absolute z-0 top-1/2 small:border-hidden"/>
      </div>
    </div>
<hr />
</>
  );
};

export default StatsCard;
