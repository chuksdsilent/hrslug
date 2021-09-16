import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom';
import InnerNavbar from '../components/InnerNavbar';

import '../css/home.css'
import axios  from 'axios'
import { useDispatch } from 'react-redux';


const Customers = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [customers, setcustomers] = useState([])
    const [user, setuser] = useState("")
    useEffect(() => {
        console.log("get customer");
        setuser(user);
       const config = {
            headers: {
                'Cotent-Type': 'application/json',
                'x-header-token': localStorage.getItem("token")
            }
        }
         axios.get(process.env.REACT_APP_SERVER_APP_URL + `/api/suppliers`,  config)
        .then((data) => {
            console.log(data.data)
            setcustomers(data.data)
            console.log(customers);
        })
        .catch((err) => {
            console.log(err)
        });

        
    });
    
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
            <InnerNavbar />

            <div className="customers">
            <h3>Suppliers</h3>
            <div className="table">
                <table className="table">
                    <thead>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                    </thead>
                    {
                        customers.map((customer) => {
                            return (
                                <tr key={customer.key}>
                                    <td>{customer.email}</td>
                                    <td>{customer.first_name}</td>
                                    <td>{customer.last_name}</td>
                                    <td>{customer.phone}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                </div>
            </div>
        </div>
    )
}

export default Customers
