import React from 'react'
import {Link} from 'react-router-dom';
const Menu = () => {

    let menus = [
        {
            id : 1,
            menu : "Home"
        },
        {
            id : 2,
            menu : "Shop"
        },
        {
            id : 3,
            menu : "Bakery"
        },
        {
            id : 4,
            menu : "Beverages"
        }
    ]
    return (
        <div className="menus">
            <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-7">
                    <ul>
                        {
                            menus.map((menu, index) => {
                                return (
                                    <li key={menu.id}>{menu.menu}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-2 d-flex">
                        <div>
                            <Link to='/register'>
                                Register / 
                            </Link>
                        </div>
                        <div>
                            <Link to='/login'>
                            Login
                            </Link>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Menu
