import React, { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify';
import Navbar from '../components/home/Navbar';

import { useDispatch } from "react-redux";
import axios from 'axios';

const RegisterComplete = ({history}) => {

    const dispatch = useDispatch();

    // const reduxuser = useSelector(state => state.user)
  
    // const creativeCotext = useContext(creativeContext)

    // const { creatives } = creativeCotext;
    
    // console.log(creatives)
    
    let [user, setUser] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone": "",
        "password": "", 
        "user_type": ""
    });

    const { first_name, last_name, email, phone, password , user_type} = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value})

    const [Loading, setLoading] = useState(false);
    const [regMsg, setRegMsg] = useState('')
  
  
  const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
       
       const config = {
           headers: {
               'Cotent-Type': 'application/json'
           }
       }
        try {

            // const user = {...user, user_type: 'customer'};
            console.log(user)

            const res = await axios.post(process.env.REACT_APP_SERVER_APP_URL + '/api/register', user, config);
            user = {"email": email, "token": res.data.token}
            console.log(user)
            dispatch({
                type: "REGISTER_SUCCESSFUL",
                payload: user
            })
            setUser({
                "firstName": "",
                "lastName": "",
                "email": "",
                "phone": "",
                "password": ""
            })
            setRegMsg("Registration Successful. click on Login to continue")
            setLoading(false)
            
           


            // creativeCotext.addCreative(user);
            // console.log(creatives)
            
        } catch (error) {
        
            setLoading(false);        
        // console.log(error.response);
        console.log(error.request);
        // console.log(error.message);
        // toast.error(error.response.data.errors[0].msg);
        }
      
      
        // setLoading(false);
    };
   
    return (
        <div>
            <div className="creative">
                <Navbar />
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            {
                                regMsg &&
                                (
                                    <div className="alert alert-success">
                                        {regMsg}
                                    </div>
                                )
                            }
                            <h5>Register</h5>
                            <hr />
                            <ToastContainer />
                            <form  onSubmit={handleSubmit}>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label htmlFor="">First Name</label>
                                        <input 
                                        name="first_name"
                                        onChange={onChange}
                                        value={first_name}
                                        type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="">Last Name</label>
                                        <input 
                                        name="last_name"
                                        onChange={onChange}
                                        value={last_name}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                               
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Phone</label>
                                        <input 
                                        name="phone"
                                        onChange={onChange}
                                        value={phone}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Email</label>
                                        <input 
                                        name="email"
                                        value={email}
                                        onChange = {onChange}
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
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                      <input type="radio" name="user_type" checked={user_type === "customer"}  onChange={onChange} value="customer" id="" /> Customer  &nbsp;
                                      <input type="radio" name="user_type" checked={user_type === "supplier"}   onChange={onChange} value="supplier" id="" /> Supplier
                                    </div>
                                </div>
                               
                                <div><button type="submit" className="form-control btn btn-danger">{(Loading) ? "Loading..." : "Sign up"}</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterComplete
