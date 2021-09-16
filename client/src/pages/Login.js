import React, { useState } from 'react'
import Navbar from '../components/home/Navbar';

import MailingList from '../components/home/MailingList';
import {ToastContainer, toast} from 'react-toastify';
import { auth } from '../firebase'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

const Login = ({history}) => {

  const dispatch = useDispatch()
    const [user, setUser] = useState({
        "email": "",
        "password": ""
    });
    const [loading, setLoading] = useState(false)

  const onChange = (e) =>{
    setUser({ ...user, [e.target.name]: e.target.value})    
  }

  const {email , password} = user;
  let [error, setError ] = useState("");
  const errors = useSelector(state => state.error)
  if(errors) console.log("this error is below");
  console.log(errors)
  const handleSubmit = async (e) => {

    e.preventDefault();
    const loginDetails = {
        email, password
    }

    console.log(loginDetails);

    const config = {
        headers: {
            'Cotent-Type': 'application/json'
        }
    }

    try{
    const res = await axios.post(`${process.env.REACT_APP_SERVER_APP_URL}/api/auth`, loginDetails, config)
    
    dispatch({
        type: "AUTH_SUCCESS",
        payload:{
            email,
            token: res.data.token,
            isAuthenticated: true
        }
    })

    if(res.data.token){
        history.push("customers");
    }
    }catch(error){
       setError(true)
        console.log(error)
        setLoading(false);

    }

  }

    return (
        <div>
            <Navbar />
            <div className="creative">
                <div className="container">
                    <div className="card">
                        { error ?  (
                            <div className="alert alert-danger">
                            Invalid Username/Password
                            </div>
                        ) : ""}
                        <div className="card-body">
                            <h5>Login for Creative</h5>
                            <hr />
                            <ToastContainer />
                            
                            <form  onSubmit={handleSubmit}>
                            
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Email</label>
                                        <input 
                                        name="email"
                                        onChange={onChange}
                                        value={email}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Password</label>
                                        <input 
                                        name="password"
                                        onChange={onChange}
                                        value={password}
                                        type="password" className="form-control"/>
                                    </div>
                                </div>
                                <div><button type="submit" onClick={() => setLoading(true)} className="form-control btn btn-danger">{loading ? "loading..." : "Login"} </button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
