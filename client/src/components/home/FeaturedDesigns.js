import React from 'react'
import MultipleCarousel from './MultipleCarousel';
import Products from './Products';

const FeaturedDesigns = () => {
    return (
        <div className="featured-designs">
           <MultipleCarousel products = {Products} mainTitle = {"Featured Designs"} />            
        </div>
    )
}

export default FeaturedDesigns
