import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { FaMoneyBillWave, FaTools, FaFlag } from 'react-icons/fa';

const BusinessSummary = () => {
    return (
        <div className='mt-28'>
            <h1 className='text-4xl font-bold text-center mb-24 divider'><span className='text-primary'>Business</span> Summary</h1>
            <div class="stats shadow grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div class="stat w-25 text-center">
                    <div class="text-6xl m-auto text-primary">
                        <IoIosPeople />
                    </div>
                    <div class="stat-value text-primary">500+</div>
                    <div class="stat-title text-2xl">Happy Customers</div>
                </div>

                <div class="stat w-25 text-center">
                    <div class="text-6xl m-auto text-secondary">
                        <FaMoneyBillWave />
                    </div>
                    <div class="stat-value text-secondary">$2.6M</div>
                    <div class="stat-title text-2xl">Annual Revenue</div>
                </div>

                <div class="stat w-25 text-center">
                    <div class="text-6xl m-auto text-primary">
                        <FaTools />
                    </div>
                    <div class="stat-value text-primary mt-3 mb-3">100+</div>
                    <div class="stat-title text-2xl">Tools/Parts</div>
                </div>

                <div class="stat w-25 text-center">
                    <div class="text-6xl m-auto text-secondary">
                        <FaFlag />
                    </div>
                    <div class="stat-value text-secondary mt-3 mb-3">50+</div>
                    <div class="stat-title text-2xl">Countries</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;