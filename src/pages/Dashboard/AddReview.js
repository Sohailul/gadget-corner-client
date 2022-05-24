import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const handleAddReview = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const ratings = event.target.ratings.value;

        const review = { name, description, ratings };

        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            });
        toast("Review Added Successfully");
        event.target.reset();
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-5'>Add a Review</h1>
            <div className='flex mt-12 mb-12 justify-center items-center'>
                <div className='card w-1/2 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <form onSubmit={handleAddReview}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input disabled type="text" value={user?.displayName} name="name" className="input input-bordered" />
                            </div>
                            <div className='form-control'>
                                <label className="label">
                                    <span className="label-text">Select Ratings</span>
                                </label>
                                <select name='ratings' className="select select-bordered w-full max-w-xs">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="2.5">2.5</option>
                                    <option value="3.5">3.5</option>
                                    <option value="3.8">3.8</option>
                                    <option value="4">4</option>
                                    <option value="4.2">4.2</option>
                                    <option value="4.5">4.5</option>
                                    <option value="4.8">4.8</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Description" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;