import React, {useReducer} from 'react';
import uuid from 'uuid';
import CreativeContext from './CreativeContext';
import creativeReducer from './CreativeReducer'

import{
    ADD_CREATIVE,
   
} from '../../types'


const CreativeState = (props) => {
    const initialState = {
        creatives:[{
            "id": 1,
            "firstName": "Samson",
            "lastName": "Chuwkudi",
            "email": "samchuks@gmail.com",
            "phone": "0803254785",
            "facebook": "samo@gmail.com",
            "instagram": "@sam",
            "accountNumber": "2547855658",
            "accountName": "Oshaba Samson",
            "bank": "Access Bank",
            "password": "123456"
        }]
    }
    const [state, dispatch] = useReducer(creativeReducer, initialState);

    const addCreative = creative =>{
        console.log("coming from state" + creative)
        dispatch({
            type: ADD_CREATIVE,
            payload: creative
        })
    }
    return(
       
        <CreativeContext.Provider
            value={{
                creatives: state.creatives,
                addCreative
            }}
            >
            {props.children}
        </CreativeContext.Provider>
    )

}

export default CreativeState;