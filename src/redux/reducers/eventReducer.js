import * as actionTypes from '../conestants/eventConestants';


export const getEventReducer=(state={eventItem:[]},action)=>{
    switch(action.type){
        case actionTypes.EVENT_ADDED_REQUEST:
            return {
                loading:true,
                eventItem:[]
            }
        case actionTypes.EVENT_ADDED_SUCCESS:
            return{
                loading:false,
                eventItem:action.payload,
                
            }
            
        case actionTypes.EVENT_ADDED_FAIL:
            return{
                loading:false, 
                error:action.payload
            }
        // const item= action.payload;


        default:
            return state;
    }
    
}

