
import{
    ADD_CREATIVE
    
} from '../../types'


export default  (state, action) =>{
    switch(action.type){
        case ADD_CREATIVE:
            return{
                ...state,
                creatives: [...state.creatives, action.payload]
            }
        default:
            return state;
    }
}