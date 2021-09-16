import React from 'react'
import aboutgen from '../../images/aboutgen.jpg'
import {Link} from 'react-router-dom';


const ProductInfo = () => {
   
    const title = "Title Name";
    const img = aboutgen;
    const price = 8.6;
    const avaiableStock = true;
    const productDescription = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis veritatis reiciendis saepe. Maxime nisi rerum nostrum vel eaque debitis aliquam perspiciatis vitae natus? Architecto, iste!`
    return (
        <div className="product-info">
        <div className="card">
            <div className="card-body ">
            <div className="d-flex justify-content-between">
                <div className="product-titles">
                    {title}
                </div>
                <div>
                    <Link to="/cart" className="btn btn-primary">
                        View Cart
                    </Link>
                </div>
            
            </div>
            </div>
        </div>
        <div className="card mt-4">
            <div className="card-body">
            <div className="product-title">{title}</div>
            <div className="row">
                <div className="col-md-4">
                    <img src={img} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-5">
                    <div className="price">${price}</div>
                    <div className="badge stock">{avaiableStock ? "In Stock": "Sold"}</div>
                    <div className="description">{productDescription}</div>
                    <div className="location">
                        <div class="mb-4 row mt-4">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Locaton</label>
                            <div class="col-sm-9">
                            <select name="" id="" className="form-control">
                                <option value="">Lagos</option>
                                <option value="">Abuja</option>
                                <option value="">Anambra</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="location">
                        <div class="mb-4 row mt-4">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Cloth</label>
                            <div class="col-sm-9">
                            <select name="" id="" className="form-control">
                                <option value="">Native</option>
                                <option value="">Agbada</option>
                                <option value="">Shirt</option>
                                <option value="">Trouser</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="location">
                        <div class="mb-4 row mt-4">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Cloth Size</label>
                            <div class="col-sm-9">
                            <select name="" id="" className="form-control">
                                <option value="">Small</option>
                                <option value="">Medium</option>
                                <option value="">large</option>
                                <option value="">Extra large</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary ">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="col-md-3">
                    skdfjo
                </div>
            </div>
            
            </div>
        </div>
        </div>
    )
}

export default ProductInfo
