import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{review.name}</h2>
                    <p>{review.description}</p>
                    <p>{review.ratings}</p>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;