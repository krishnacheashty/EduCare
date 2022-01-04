import * as actionTypes from '../conestants/reviewConestants';

import axios from 'axios';

export const getReview=()=>async(dispatch)=>{
    try {
        dispatch({type:actionTypes.REVIEW_ADDED_REQUEST});

        const {data}=await axios.get(`https://educareserver.herokuapp.com/review`)
        // console.log(data);
        
        dispatch({
            type:actionTypes.REVIEW_ADDED_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
            type:actionTypes.REVIEW_ADDED_FAIL,
            payload:error.response && error.response.data.massage ? error.response.data.massage :
            error.massage,
        })
    }
}