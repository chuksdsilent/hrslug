import React from 'react'
import main from '../../images/main.jpg'
import art1 from '../../images/art1.jpg'
import art2 from '../../images/art2.jpg'
import art3 from '../../images/art3.jpg'
import art4 from '../../images/art4.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <div className="carousel">
            <div className="container">
                <Slider {...settings}>
                    <div>
                        <img src={main} alt="" className="img-fluid"/>                    
                    </div>
                    <div>
                        <img src={art1} alt="" className="img-fluid"/>                    
                    </div>
                    <div>
                    <img src={art2} alt="" className="img-fluid"/>                                            
                    </div>
                    <div>
                    <img src={art3} alt="" className="img-fluid"/>                    
                        
                    </div>
                    <div>
                        <img src={art4} alt="" className="img-fluid"/>                    
                    </div>
                </Slider>
            </div>
        </div>
    )
}


export default Carousel
