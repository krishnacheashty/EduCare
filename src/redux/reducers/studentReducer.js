import * as actionTypes from '../conestants/studentConestants';


export const getStudentReducer=(state={studentItem:[]},action)=>{
    switch(action.type){
        case actionTypes.STUDENT_ADDED_REQUEST:
            return {
                loading:true,
                studentItem:[]
            }
        case actionTypes.STUDENT_ADDED_SUCCESS:
            return{
                loading:false,
                studentItem:action.payload,
                
            }
            
        case actionTypes.STUDENT_ADDED_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        // const item= action.payload;


        default:
            return state;
    }
    
}

