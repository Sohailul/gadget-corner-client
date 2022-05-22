import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={tool.img} alt="tools" class="rounded-xl"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>{tool.description}</p>
                    <p className='font-bold'>Minimum Order Quantity: {tool.min_order_quantity}</p>
                    <p className='font-bold'>Available Quantity: {tool.available_quantity}</p>
                    <p className='font-bold'>Price: ${tool.price}</p>
                    <div class="card-actions justify-center mt-3">
                        <button class="btn btn-primary btn-block">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;