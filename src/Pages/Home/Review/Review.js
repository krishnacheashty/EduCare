import faker from 'faker';
import React from 'react';

const Review = ({ review }) => {
    return (

        <div className='col-md-4 feedback-card mb-4'>
            <div className='d-flex flex-column text-left mb-4 card h-100 p-3'>
                <div className='d-flex align-items-center mb-2'>
                    <div className="ms-2 ">
                        <h5>{review.name}</h5>
                        <small>{review.review}</small>
                        <p>Rating: {review.rating}</p>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Review;