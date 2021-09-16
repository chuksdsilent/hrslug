import React from 'react'
import {useSelector} from 'react-redux'
import {Route, Link} from 'react-router-dom'
 

const UserRoute = ({childres, ...rest}) => {
    
    // const {user} = useSelector((state) => ({...state}))
    const user = localStorage.getItem("token")
    
    return user ? (<Route {...rest} render={() => childres} />) : (
        <div>
            UnAuthorized Access
        </div>
    )
}

export default UserRoute
