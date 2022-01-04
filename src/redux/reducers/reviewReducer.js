import * as actionTypes from '../conestants/reviewConestants';


export const getReviewReducer=(state={reviewItem:[]},action)=>{
    switch(action.type){
        case actionTypes.REVIEW_ADDED_REQUEST:
            return {
                loading:true,
                reviewItem:[]
            }
        case actionTypes.REVIEW_ADDED_SUCCESS:
            return{
                loading:false,
                reviewItem:action.payload,
                
            }
            
        case actionTypes.REVIEW_ADDED_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        // const item= action.payload;


        default:
            return state;
    }
    
}

