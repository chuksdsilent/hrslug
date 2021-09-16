import React, {useEffect} from 'react';
import '../src/libraries/bootstrap/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

import RegisterComplete from './pages/RegisterComplete';
import { useDispatch } from 'react-redux';
import CreativeState from './context/creatives/CreativeState';
import Login from './pages/Login';
import UserRoute from './routes/UserRoute'
import axios from 'axios'
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Suppliers from './pages/Suppliers';
import UploadProducts from './pages/UploadProducts';

function App() {
  const dispatch = useDispatch();
      useEffect(() => {
    async function loggedinuser(){

        const config = {
          headers: {
              'Cotent-Type': 'application/json'
          }
      }
      try {
            const email =  localStorage.getItem("email")
            
            const res = await axios.get(`${process.env.REACT_APP_SERVER_APP_URL}/api/logged-in-user?email=${email}`, config);
            dispatch({
                type: "LOGGED_IN",
                payload: res.data
            })
              }catch (error) {
                          
              // console.log(error.response);
              console.log(error.request);
              // console.log(error.message);
        }
    }

    loggedinuser();
  }, [])
     
  return (
    <CreativeState>
      <Router>
        <div className="App">
          <Switch>      
            <Route exact path="/" component={RegisterComplete} />
            <UserRoute exact path="/dashboard" component={Dashboard} />
            <UserRoute exact path="/products" component={UploadProducts} />
            <UserRoute exact path="/customers" component={Customers} />
            <UserRoute exact path="/suppliers" component={Suppliers} />
            {/* <UserRoute exact path="/creative/dashboard" component={Dashboard} />  */}
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </CreativeState>
  );
}

export default App;
