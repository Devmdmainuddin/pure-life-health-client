
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Bannerh = () => {


  
    return (
        <div>
            <Carousel getConfigurableProps>
        

                <div>
                    <img src="https://i.ibb.co/nwspGDW/electronics-banner-2.jpg" />
                 
                </div>
                <div>
                    <img src="https://i.ibb.co/KF9nm0S/electronics-banner-1.jpg" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/9yxG1rd/mens-banner.jpg" />
                    
                </div>

               
            </Carousel>
        </div>
    );
};

export default Bannerh;