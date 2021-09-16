const initialState = {
  
}
export const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case "REGISTER_SUCCESSFUL":
            localStorage.setItem('email', action.payload.email)
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('isAuthenticated', true)
            return {
                ...state,
                ...action.payload
            };
        case "AUTH_SUCCESS":
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('isAuthenticated', true)
            return action.payload
        case "AUTH_FAILED":
            localStorage.removeItem('token')
            return action.payload
        case "LOGGED_IN":
            return action.payload
        case "LOGOUT":
            return action.payload;
        default:
            return  state
    }
};

