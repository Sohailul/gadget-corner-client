import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://live.staticflickr.com/65535/52100389066_6e7d83976f_h.jpg" className="max-w-sm lg:max-w-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-primary">Quality Manufacturing!</h1>
                    <p className="py-6 font-bold">When we use the term electrical parts, it is meant to intend the functional pieces of your electrical system</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;