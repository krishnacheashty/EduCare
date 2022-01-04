import * as actionTypes from '../conestants/teacherConestants';


export const getTeacherReducer=(state={teacherItem:[]},action)=>{
    switch(action.type){
        case actionTypes.TEACHER_ADDED_REQUEST:
            return {
                loading:true,
                teacherItem:[]
            }
        case actionTypes.TEACHER_ADDED_SUCCESS:
            return{
                loading:false,
                teacherItem:action.payload,
                
            }
            
        case actionTypes.TEACHER_ADDED_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        // const item= action.payload;


        default:
            return state;
    }
    
}

