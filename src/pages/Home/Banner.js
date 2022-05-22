import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.imgur.com/9ilVH5n.png" className="max-w-sm lg:max-w-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold text-primary">Quality Manfacturing!</h1>
                    <p class="py-6 font-bold">When we use the term electrical parts, it is meant to intend the functional pieces of your electrical system</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;