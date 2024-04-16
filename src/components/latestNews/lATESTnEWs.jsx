import ContentNews from "./content";
import TitleNews from "./title";

const LatestNews = () => {
    return ( 
        <div className="bg-gray-200">
        <TitleNews/>
        <ContentNews/>
        <hr/>
        </div>
     );
}
 
export default LatestNews;