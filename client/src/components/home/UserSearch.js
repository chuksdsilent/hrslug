import React from 'react'
import search from '../../images/search.png'
import cart from '../../images/cart.png'
import user from '../../images/user.png'
import {Link} from 'react-router-dom'
const UserSearch = () => {
    return (
        <div className="user-search">
            <div className="container">
            <div className="row">
                    <div className="col-md-3">
                        <Link to="/" style={{fontSize: "2em"}}>
                            Logo
                        </Link>
                    </div>
                    <div className="col-md-7">
                        <div className="search-box d-flex">
                            <input type="text" className='shadow-none' placeholder='Search Products...'/>
                            <img src={search} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="profile-side d-flex justify-content-between">
                            <img src={cart} alt="" className="img-fluid"/>
                            <div style={{ marginTop: ".7em", fontSize: "1.3em"}}>2839</div>
                            <img src={user} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Menu />                           */}
        </div>
    )
}

export default UserSearch
