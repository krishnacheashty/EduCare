import * as actionTypes from '../conestants/teacherConestants';

import axios from 'axios';

export const getTeacher=()=>async(dispatch)=>{
    try {
        dispatch({type:actionTypes.TEACHER_ADDED_REQUEST});

        const {data}=await axios.get(`https://edu-care-sarver.onrender.com/teachers`)
        // console.log(data);
        
        dispatch({
            type:actionTypes.TEACHER_ADDED_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
            type:actionTypes.TEACHER_ADDED_FAIL,
            payload:error.response && error.response.data.massage ? error.response.data.massage :
            error.massage,
        })
    }
}