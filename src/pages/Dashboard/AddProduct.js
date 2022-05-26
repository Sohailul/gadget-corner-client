import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://afternoon-journey-91609.herokuapp.com/tool').then(res => res.json()))

    const imageStorageKey = '6f4880c6859553e110b5fdbfd3a8489e';

    /**
     * 3 ways to store images
     * 1. Third party storage //Free open public storage is ok for Practice project 
     * 2. Your own storage in your own server (file system)
     * 3. Database: Mongodb 
     * 
     * YUP: to validate file: Search: Yup file validation for react hook form
    */
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        description: data.description,
                        min_order_quantity: data.min_order_quantity,
                        available_quantity: data.available_quantity,
                        price: data.price,
                        img: img
                    }
                    // send to your database 
                    fetch('https://afternoon-journey-91609.herokuapp.com/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Tools or Parts added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Tools');
                            }
                        })

                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-5">Add a New Tools or parts</h2>
            <div className='mt-12 mb-12 flex justify-center items-center'>
                <div className='card w-1/2 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Tools Name"
                                    className="input input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Description"
                                    className="input input-bordered"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Description is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Order Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Minimum Order Quantity"
                                    className="input input-bordered"
                                    {...register("min_order_quantity", {
                                        required: {
                                            value: true,
                                            message: 'Minimum Order Quantity is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.min_order_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Available Quantity"
                                    className="input input-bordered"
                                    {...register("available_quantity", {
                                        required: {
                                            value: true,
                                            message: 'Available Quantity is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.available_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Price"
                                    className="input input-bordered"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Price is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;