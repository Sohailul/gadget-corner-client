import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={tool.img} alt="tools" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{tool.name}</h2>
                    <p>{tool.description}</p>
                    <p className='font-bold'>Minimum Order Quantity: {tool.min_order_quantity}</p>
                    <p className='font-bold'>Available Quantity: {tool.available_quantity}</p>
                    <p className='font-bold'>Price: ${tool.price}</p>
                    <div className="card-actions justify-center mt-3">
                        <Link to={`/purchase/${tool._id}`} className="btn btn-primary text-white btn-block">BUY NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;