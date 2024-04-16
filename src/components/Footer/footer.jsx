    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faFacebook, faInstagram, faTwitter, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
    import logo from "../../assets/logo.png";
    import "./footer.css"
import { useDarkMode } from "../toggleDarkMode";
    const Footer = () => {
        const {darkMode} = useDarkMode();
    return (
        <footer className={` py-24 ${darkMode ? "bg-gradient-to-r to-fuchsia-900 from-slate-900 text-white" : "bg-gray-200"}`}>
        <div className="px-20 small:px-5 grid grid-cols-5 large:grid-cols-2 small:grid-cols-1">
            <div className="py-4  ">
            <img src={logo} alt="" className="pb-5"/>
            <p>But I must explain to you all this mistaken idea of denouncing pleasure.</p>
            </div>
            <div className="w-full py-4">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="leading-loose">
                <li><a href="">About Our Company </a></li>
                <li><a href="">Services We Provide</a></li>
                <li><a href="">Career & Opportunity</a></li>
                <li><a href="">Privacy & Policy</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            </div>
            <div className="w-full py-4">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="leading-loose">
                <li><a href="">About Company</a></li>
                <li><a href="">Our Testimonials</a></li>
                <li><a href="">Latest News</a></li>
                <li><a href="">Our Mission</a></li>
                <li><a href="">Get a Free Quote</a></li>
            </ul>
            </div>
            <div className="w-full py-4">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="leading-loose">
            <p><a href="">Sagrada Familia, Herba</a></p>
            <p><a href="">Street Front USA</a></p>
            <p><a href="">brandoxide@gmail.com</a></p>
            <p><a href="">002-568423591</a></p>
            </ul>
            </div>
        <div className="w-full py-4">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="leading-loose">
            <FontAwesomeIcon icon={faFacebook} className="social"/>
            <FontAwesomeIcon icon={faTwitter} className="social"/>
            <FontAwesomeIcon icon={faInstagram} className="social"/>
            <FontAwesomeIcon icon={faLinkedin} className="social"/>
            </ul>
        </div>
        </div>
        <div className="text-center mt-8">
            <p className="text-gray-400">Copyright © 2020 Brandoxide. All rights reserved.</p>
        </div>
        </footer>
    );
    };

    export default Footer;
