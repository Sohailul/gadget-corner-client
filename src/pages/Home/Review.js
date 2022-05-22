import React from 'react';
import Rating from 'react-rating';
import {AiFillStar} from 'react-icons/ai';

const Review = ({ review }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="text-2xl">{review.name}</h2>
                    <p>{review.description}</p>
                    <div className='text-center mt-5'>
                        <Rating
                            initialRating={review.ratings}
                            emptySymbol={<AiFillStar />}
                            fullSymbol={<AiFillStar style={{ color: 'goldenrod' }} icon={AiFillStar} />}
                            readonly
                        ></Rating>
                        <p className='font-bold'>{review.ratings}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;