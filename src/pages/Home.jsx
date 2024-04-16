import About from "../components/About/About";
import Footer from "../components/Footer/footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/Navbar";
import Service from "../components/Service/ourService";
import Monilse from "../components/TestMonilse/monilse";
import LatestNews from "../components/latestNews/lATESTnEWs";
import StatsCard from "../components/review/review";
import SignUp from "../components/signUp";
import { DarkModeProvider } from "../components/toggleDarkMode";

const Home = () => {
    return ( 
        <DarkModeProvider>
        <Navbar />
        <Hero />
        <div id="service"><Service /></div>
        <div id="about"><About/></div>
        <StatsCard />
        <Monilse/>
        <div id="blog"><LatestNews/></div>
        <div id="signup"><SignUp/></div>
        <Footer/>
        </DarkModeProvider>
     );
}
 
export default Home;