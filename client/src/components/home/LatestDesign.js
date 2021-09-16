import React from 'react'
import MultipleCarousel from './MultipleCarousel';
import Products from './Products';

const LatestDesign = ({title}) => {

    return (
        <div className="latest-design">
           <MultipleCarousel products = {Products} mainTitle = {"Latest Designs"} subtitle = {"Don't miss out on this weeks offer"} />
        </div>
    )
}

export default LatestDesign
