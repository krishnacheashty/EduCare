import * as actionTypes from '../conestants/studentConestants';

import axios from 'axios'; 

export const getStudent=()=>async(dispatch)=>{
    try {
        dispatch({type:actionTypes.STUDENT_ADDED_REQUEST});

        const {data}=await axios.get(`https://edu-care-sarver.onrender.com/student`)
        // console.log(data);
        
        dispatch({
            type:actionTypes.STUDENT_ADDED_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
            type:actionTypes.STUDENT_ADDED_FAIL,
            payload:error.response && error.response.data.massage ? error.response.data.massage :
            error.massage,
        })
    }
}