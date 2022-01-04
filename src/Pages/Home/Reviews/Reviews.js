import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/reviews.JSON")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);


    return (
        <div className='review-background'>

            <section className='client-feedback d-flex align-items-center justify-content-center my-5'>
                <div className='container mb-5 mt-3'>
                    <h3 className='text-center text-white mb-5' style={{ fontSize: '36px', fontWeight: '600' }}>
                        WHAT PARENTS SAY
                    </h3>

                    <div className='row my-5'>
                        {reviews.map((review) => (
                            <Review key={review.id} review={review} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Reviews;