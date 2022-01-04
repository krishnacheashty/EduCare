import React from 'react';
import Review from '../Review/Review';
import "./Reviews.css"
// use useEffect
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

// action
import {getReview as listReview} from '../../../redux/actions/reviewAction'

const Reviews = () => {

    const dispatch=useDispatch();
    const getReview=useSelector(state=>state.getReview);
    
    // console.log(getTeacher)

 const {reviewItem,loading,error}=getReview;


useEffect(() => {
    dispatch(listReview()) 

}, [dispatch]);


    return (
        <div className='review-background'>

            <section className='client-feedback d-flex align-items-center justify-content-center my-5'>
                <div className='container mb-5 mt-3'>
                    <h3 className='text-center text-white mb-5' style={{ fontSize: '36px', fontWeight: '600' }}>
                        WHAT PARENTS SAY
                    </h3>

                    <div className='row my-5'>
                        {reviewItem.map((review) => (
                            <Review key={review.id} review={review} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Reviews;