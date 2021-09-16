import React from 'react'
import '../css/home.css'
import {Link, useHistory} from 'react-router-dom';

import { useDispatch } from 'react-redux';

const InnerNavbar = () => {
    
const dispatch = useDispatch();
const history = useHistory();

const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    dispatch({
        type: "LOGOUT",
        payload: null
    })
    
    history.push("/");
}

    return (
        <div>
               <div className="dashboard d-flex justify-content-between">
                <div className="d-flex">
                    <div style={{marginRight: 10}}>
                        <Link to="/customers">Customers</Link>
                    </div>
                    <div  style={{marginRight: 10}}>
                    <Link to = "/suppliers" > Suppliers</Link>

                    </div>
                    <div>
                    <Link to = "/products"> Upload Product</Link>

                    </div>
                </div>
                <div>
                <Link onClick={() => logout()}>Logout </Link>

                </div>
            </div>
        </div>
    )
}

export default InnerNavbar;