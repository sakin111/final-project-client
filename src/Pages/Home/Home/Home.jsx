import Footer from "../../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Trending from "../Trending/Trending";
import TrendingCard from "../Trending/TrendingCard";
import CommentPage from "../commentPage/commentPage";

import Pay from "../pay/Pay";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendingCard></TrendingCard>
           <Trending></Trending>
           <Pay></Pay>
          <CommentPage></CommentPage>
           <Footer></Footer>
        </div>
    );
};

export default Home;