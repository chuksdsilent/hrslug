import React  from 'react'
import {Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';



const Navbar = () => {
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
        <div className="nav-bar">
              <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse me-auto">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                               
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               
                                <li>
                                    <Link to='/register'>
                                        Register
                                    </Link>   
                                </li>
                                <li>
                                    <Link to='/login'>
                                        login
                                    </Link>   
                                </li>
                               
                             
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
