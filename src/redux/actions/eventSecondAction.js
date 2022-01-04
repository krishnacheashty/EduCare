import * as actionTypes from '../conestants/eventSecondConestants';

import axios from 'axios';

export const getEventSecond=()=>async(dispatch)=>{
    try {
        dispatch({type:actionTypes.EVENTSECOND_ADDED_REQUEST});

        const {data}=await axios.get(`https://educareserver.herokuapp.com/eventSecond`)
        // console.log(data);
        
        dispatch({
            type:actionTypes.EVENTSECOND_ADDED_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
            type:actionTypes.EVENTSECOND_ADDED_FAIL,
            payload:error.response && error.response.data.massage ? error.response.data.massage :
            error.massage,
        })
    }
}