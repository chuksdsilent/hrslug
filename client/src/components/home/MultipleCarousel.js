import React from 'react'

import pics1 from '../../images/pics1.jpg';
import Slider from "react-slick";
import settings from "./CarouselSetting";
import {Link} from 'react-router-dom';

const MultipleCarousel = ({products = [], mainTitle, subtitle = ""}) => {
    return (
        <div className="carousel-name">
             <div className="container">
                <div className="title">
                    <div>{mainTitle}</div>
                </div>
                <div className="subtitle">{subtitle}</div>
                
                <div className="data-content">   
                    <Slider {...settings}>
                    {
                        products.map((product, index) => {
                            return (
                                <div key={product.id}>
                                    <div  className="individual-slider"> 
                                        <Link to={`/product/` + product.id}>
                                            <img  src={pics1} alt="" className="img-fluid" />
                                        </Link>
                                        
                                        <div className={product.id} className="content">
                                            <div  className="d-title">{product.title}</div>
                                            <div  className="instock">{product.instock}</div>
                                            <div  className="price">${product.price}</div>
                                            <div  className="add-to-stock">
                                                <Link to={`/product/` + product.id} className="add-to-cart">
                                                        Add to Cart
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MultipleCarousel
