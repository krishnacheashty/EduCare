import * as actionTypes from '../conestants/eventSecondConestants';


export const getEventSecondReducer=(state={eventSecondItem:[]},action)=>{
    switch(action.type){
        case actionTypes.EVENTSECOND_ADDED_REQUEST:
            return {
                loading:true,
                eventSecondItem:[]
            }
        case actionTypes.EVENTSECOND_ADDED_SUCCESS:
            return{
                loading:false,
                eventSecondItem:action.payload,
                
            }
            
        case actionTypes.EVENTSECOND_ADDED_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        // const item= action.payload;


        default:
            return state;
    }
    
}

