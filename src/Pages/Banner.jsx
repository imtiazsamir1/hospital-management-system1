import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img6 from '../assets/6.jpg' 
import img7 from '../assets/7.jpg' 
import img8 from '../assets/8.jpg' 

const Banner = () => {
    return (
        <div>
               <Carousel>
                <div>
                    <img src={img6} />
                    
                </div>
                <div>
                    <img src={img7} />
                   
                </div>
                <div>
                    <img src={img8} />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;