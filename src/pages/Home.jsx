// import About from "../components/home/About";
// import Banner from "../components/home/Banner";
import Bannerh from "../components/home/Bannerh";
import Categorey from "../components/home/Categorey";
import Service from "../components/home/Service";
import Swiperslider from "../components/home/Swiperslider";


const Home = () => {
    return (
        <div>
            <Bannerh></Bannerh>
            <Swiperslider></Swiperslider>
            {/* <Banner></Banner> */}
            <Categorey></Categorey>
            {/* <About></About> */}
            <Service></Service>
            
        </div>
    );
};

export default Home;