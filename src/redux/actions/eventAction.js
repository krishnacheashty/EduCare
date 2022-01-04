import * as actionTypes from '../conestants/eventConestants';

import axios from 'axios'; 

export const getEvent=()=>async(dispatch)=>{
    try {
        dispatch({type:actionTypes.EVENT_ADDED_REQUEST});

        const {data}=await axios.get(`https://educareserver.herokuapp.com/events`)
        // console.log(data);
        
        dispatch({
            type:actionTypes.EVENT_ADDED_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
            type:actionTypes.EVENT_ADDED_FAIL,
            payload:error.response && error.response.data.massage ? error.response.data.massage :
            error.massage,
        })
    }
}