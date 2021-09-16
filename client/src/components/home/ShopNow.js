import React from 'react'
import art1 from '../../images/art1.jpg'

const ShopNow = () => {
    return (
        <div className="shop-now">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <img src={art1} alt="" className="img-fluid"/>                    
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <img src={art1} alt="" className="img-fluid"/>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopNow
