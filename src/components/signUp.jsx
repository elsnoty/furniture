import Dots from "./dots";
import { useDarkMode } from "./toggleDarkMode";

const SignUp = () => {
    const { darkMode } = useDarkMode();
    return ( 
        <div className={`flex-col justify-center items-center text-center px-36 xlarge:px-24 py-24 large:px-16 medium:px-5 relative
        ${darkMode ? "bg-black text-white" : ""}`}>
            <h1 className="text-4xl font-bold mb-2">DON&apos;T FORGET TO SIGN UP</h1>
            <hr className=" w-[40%] relative left-[30%] border-[1px]"/>
            <p className="pt-7">Find out early about all upcoming promotions and new product releases with our newsletter.</p>
            <div className="mt-4">
                <input type="text" placeholder="Enter your email adress ..." className="small:text-sm bg-gray-200 text-black relative w-7/12 p-2 rounded-tl-3xl outline-none"/>
                <button className="bg-green-600 text-white rounded-br-3xl p-2">SUBSCRIB</button>
            </div>
            <div className="absolute -bottom-20 left-0 z-40"><Dots /></div>
        </div>
     );
}
 
export default SignUp;