import React from 'react'
import MultipleCarousel from './MultipleCarousel';
import Products from './Products';
const TrendingDesigns = () => {
    return (
        <div className="trending-designs">
            <MultipleCarousel products = {Products} mainTitle = {"Trending Designs"} />
         </div>
    )
}

export default TrendingDesigns
